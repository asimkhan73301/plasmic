/**
 * Super simple migration framework for cli.
 *
 * If you want to run some migration script (say, to fix up the schema of plasmic.json, etc),
 * you should:
 *
 * 1. Bump your cli version.
 * 2. Add a [version]-[desc].ts file to the migrations folder, exporting a function that takes
 *    the previous version of plasmic.json (or plasmic.lock) blob, and returns the new version
 *    of plasmic.json (or plasmic.lock) blob.
 * 3. Add the migration function to the MIGRATIONS (or LOCK_MIGRATIONS) dict in this file.
 *
 * The framework will run migrations in sequence, so you are guaranteed that the plasmic.json blob
 * passed into your migration function is valid as of the previous version.
 */
import chalk from "chalk";
import L from "lodash";
import semver from "semver";
import path from "upath";
import { logger } from "../deps";
import { PlasmicConfig, PlasmicLock } from "../utils/config-utils";
import { HandledError } from "../utils/error";
import {
  existsBuffered,
  readFileText,
  writeFileContentRaw,
} from "../utils/file-utils";
import {
  getCliVersion,
  installUpgrade,
  isCliGloballyInstalled,
} from "../utils/npm-utils";
import { confirmWithUser } from "../utils/user-utils";
import { ensureFileLocks } from "./0.1.110-fileLocks";
import { migrateInit } from "./0.1.27-migrateInit";
import { tsToTsx } from "./0.1.28-tsToTsx";
import { ensureProjectIcons } from "./0.1.31-ensureProjectIcons";
import { ensureVersion } from "./0.1.42-ensureVersion";
import { ensureJsBundleThemes } from "./0.1.57-ensureJsBundleThemes";
import { ensureImageFiles } from "./0.1.64-imageFiles";
import { ensureComponentType } from "./0.1.95-componentType";
export interface MigrateContext {
  absoluteSrcDir: string;
}

type MigrateConfigFunc = (
  prev: PlasmicConfig,
  context: MigrateContext
) => PlasmicConfig;
type MigrateLockFunc = (
  prev: PlasmicLock,
  context: MigrateContext
) => PlasmicLock;

export const MIGRATIONS: Record<string, MigrateConfigFunc> = {
  "0.1.27": migrateInit,
  "0.1.28": tsToTsx,
  "0.1.31": ensureProjectIcons,
  "0.1.42": ensureVersion,
  "0.1.57": ensureJsBundleThemes,
  "0.1.64": ensureImageFiles,
  "0.1.95": ensureComponentType,
};

export const LOCK_MIGRATIONS: Record<string, MigrateLockFunc> = {
  "0.1.110": ensureFileLocks,
};

export async function runNecessaryMigrations(
  configFile: string,
  lockFile: string,
  yes?: boolean
) {
  const cliVersion = getCliVersion();
  const readConfig = (): PlasmicConfig => JSON.parse(readFileText(configFile));
  // If we don't have a lock file, we don't need to run migrations on it!
  const maybeReadLock = (): PlasmicLock | undefined => {
    if (existsBuffered(lockFile)) {
      return JSON.parse(readFileText(lockFile));
    }
    return undefined;
  };
  const writeConfig = (config: PlasmicConfig) =>
    writeFileContentRaw(configFile, JSON.stringify(config, undefined, 2), {
      force: true,
    });
  const writeLock = (lock: PlasmicLock) =>
    writeFileContentRaw(lockFile, JSON.stringify(lock, undefined, 2), {
      force: true,
    });
  const cur = readConfig();
  const curVersion: string | undefined = cur.cliVersion;

  if (!!curVersion && semver.lt(cliVersion, curVersion)) {
    const confirm = await confirmWithUser(
      `Project requires @plasmicapp/cli>=${curVersion} (You currently have ${cliVersion}). Would you like to upgrade it?`,
      yes
    );
    if (!confirm) {
      throw new HandledError("Upgrading is required to continue.");
    }

    const success = installUpgrade("@plasmicapp/cli", {
      global: isCliGloballyInstalled(path.dirname(configFile)),
      dev: true,
    });

    if (success) {
      console.log(
        chalk.bold("@plasmicapp/cli has been upgraded; please try again!")
      );
      process.exit();
    } else {
      throw new HandledError("Error upgrading @plasmicapp/cli");
    }
  }

  const context: MigrateContext = {
    absoluteSrcDir: path.isAbsolute(cur.srcDir)
      ? cur.srcDir
      : path.resolve(path.dirname(configFile), cur.srcDir),
  };
  const greaterVersions = semver.sort(
    [...L.keys(MIGRATIONS), ...L.keys(LOCK_MIGRATIONS)].filter(
      (v) => !curVersion || semver.gt(v, curVersion)
    )
  );
  for (const version of greaterVersions) {
    logger.info(`Migrating to plasmic.json version ${version}`);
    const migrationFunc = MIGRATIONS[version];
    if (migrationFunc !== undefined) {
      const prev = readConfig();
      const next = migrationFunc(prev, context);
      next.cliVersion = version;
      writeConfig(next);
    }

    const lockMigrationFunc = LOCK_MIGRATIONS[version];
    if (lockMigrationFunc !== undefined) {
      const prev = maybeReadLock();
      if (prev) {
        const next = lockMigrationFunc(prev, context);
        writeLock(next);
      }
    }
  }

  // Finally, stamp the latest version
  const latestConfig = readConfig();
  if (latestConfig.cliVersion !== cliVersion) {
    latestConfig.cliVersion = cliVersion;
    writeConfig(latestConfig);
  }
}
