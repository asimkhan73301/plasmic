// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { omit } from "lodash";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { EventHandler } from "../../../../classes";
import {
  DefaultActionChipProps,
  PlasmicActionChip,
} from "../../../plasmic/plasmic_kit_state_management/PlasmicActionChip";

export interface ActionChipProps extends DefaultActionChipProps {
  eventHandler: EventHandler | undefined | null;
  onClick: () => void;
  "data-plasmic-prop"?: string;
}

function ActionChip_(props: ActionChipProps, ref: HTMLElementRefOf<"div">) {
  const { eventHandler, onClick, ...rest } = props;

  const actionName =
    eventHandler?.interactions.length === 1
      ? eventHandler.interactions[0].interactionName
      : `${eventHandler?.interactions.length ?? 0} actions`;

  return (
    <PlasmicActionChip
      root={{
        ref,
        "data-plasmic-prop": props["data-plasmic-prop"],
      }}
      {...omit(rest, "data-plasmic-prop")}
      actionName={actionName}
      onClick={onClick}
    />
  );
}

const ActionChip = observer(ActionChip_, { forwardRef: true });
export default ActionChip;
