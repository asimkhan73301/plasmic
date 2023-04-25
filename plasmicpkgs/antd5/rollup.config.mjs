
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import esbuild from "rollup-plugin-esbuild";
import glob from "glob";
const SKINNY_INPUTS = glob.sync('./src/register*.ts*');

export default [
  {
    input: ["./src/index.ts"],
    external: (id) => {
      if (id.startsWith("regenerator-runtime") || id.startsWith("tslib")) {
        return false;
      }
      return !id.startsWith(".") && !path.isAbsolute(id);
    },
    output: [
      // {
      //   file: "dist/antd.esm.mjs",
      //   format: "esm",
      //   sourcemap: true,
      //   exports: "named",
      // },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        interop: "auto",
      },
      // {
      //   file: "dist/antd.esm.js",
      //   format: "esm",
      //   sourcemap: true,
      //   exports: "named",
      // },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      esbuild({
        loaders: {
          ".json": "json",
        },
      }),
    ],
  },
  {
    input: SKINNY_INPUTS,
    external: (id) => {
      if (id.startsWith("regenerator-runtime") || id.startsWith("tslib")) {
        return false;
      }
      return !id.startsWith(".") && !path.isAbsolute(id);
    },
    output: [
      {
        dir: "skinny",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        interop: "auto",
        entryFileNames: `[name].js`,
        chunkFileNames: `[name]-[hash].js`,
      },
      // {
      //   dir: "skinny",
      //   format: "esm",
      //   sourcemap: true,
      //   exports: "named",
      //   interop: "auto",
      //   entryFileNames: `[name].esm.mjs`,
      //   chunkFileNames: `[name]-[hash].esm.mjs`,
      // },
    ],
    plugins: [
      resolve(),
      commonjs(),
      json(),
      esbuild({
        loaders: {
          ".json": "json",
        },
      }),
    ],
  },
];
