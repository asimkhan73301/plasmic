// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { round } from "lodash";
import * as React from "react";
import { ensure, spawn } from "../../common";
import { ApiTeam } from "../../shared/ApiSchema";
import { AppCtx } from "../app-ctx";
import { useAppCtx } from "../contexts/AppContexts";
import {
  DefaultFreeTrialProps,
  PlasmicFreeTrial,
} from "../plasmic/plasmic_kit_design_system/PlasmicFreeTrial";
import { promptBilling } from "./modals/PricingModal";
import { PublicLink } from "./PublicLink";

const MILLIS_PER_DAY = 1000 * 60 * 60 * 24;

function getTrialTimeRemaining(
  appCtx: AppCtx,
  trialStartDate: Date,
  trialDays: number
) {
  if (Date.now() - trialStartDate.getTime() > trialDays * MILLIS_PER_DAY) {
    spawn(appCtx.reloadAppCtx());
    return null;
  }
  const daysRemaining =
    trialDays - round((Date.now() - trialStartDate.getTime()) / MILLIS_PER_DAY);
  return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"}`;
}

export function recentlyEndedTrial(appCtx: AppCtx, team: ApiTeam) {
  const daysToShowAfterEnded = 7;
  return !!(
    !team.featureTierId &&
    team.trialStartDate &&
    ((team.trialDays ?? appCtx.appConfig.freeTrialDays) +
      daysToShowAfterEnded) *
      MILLIS_PER_DAY >
      Date.now() - new Date(team.trialStartDate).getTime()
  );
}

export interface FreeTrialProps extends DefaultFreeTrialProps {
  team?: ApiTeam;
}

function FreeTrial_(props: FreeTrialProps, ref: HTMLElementRefOf<"div">) {
  const { team, ...rest } = props;
  const appCtx = useAppCtx();
  // Show the banner if
  const recentlyEnded = team && recentlyEndedTrial(appCtx, team);

  return (
    <>
      {team && (team.onTrial || recentlyEnded) && (
        <PlasmicFreeTrial
          root={{ as: PublicLink, ref }}
          freeTrialTimeRemaining={
            team.onTrial &&
            getTrialTimeRemaining(
              appCtx,
              new Date(
                ensure(
                  team.trialStartDate,
                  "A team on free trial must have a start date"
                )
              ),
              team.trialDays ?? appCtx.appConfig.freeTrialDays
            )
          }
          trialEnded={!!recentlyEnded}
          onClick={async () => {
            const { tiers } = await appCtx.api.listCurrentFeatureTiers();
            await promptBilling({
              appCtx,
              title: "",
              target: {
                team,
              },
              availableTiers: tiers,
            });
          }}
          {...rest}
        />
      )}
    </>
  );
}

const FreeTrial = React.forwardRef(FreeTrial_);
export default FreeTrial;
