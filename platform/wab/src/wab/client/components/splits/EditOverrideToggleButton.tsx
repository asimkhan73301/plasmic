import { isKnownGlobalVariantSplitContent } from "../../../classes";
// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { SplitSlice } from "../../../classes";
import { spawn } from "../../../common";
import { isDedicatedArena } from "../../../shared/Arenas";
import {
  DefaultEditOverrideToggleButtonProps,
  PlasmicEditOverrideToggleButton,
} from "../../plasmic/plasmic_kit_optimize/PlasmicEditOverrideToggleButton";
import { useStudioCtx } from "../../studio-ctx/StudioCtx";
import { makeVariantsController } from "../variants/VariantsController";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface EditOverrideToggleButtonProps extends Omit<DefaultEditOverrideToggleButtonProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultEditOverrideToggleButtonProps altogether and have
// total control over the props for your component.
export interface EditOverrideToggleButtonProps
  extends DefaultEditOverrideToggleButtonProps {
  slice: SplitSlice;
}

function EditOverrideToggleButton(props: EditOverrideToggleButtonProps) {
  const { slice } = props;
  const studioCtx = useStudioCtx();
  const vcontroller = makeVariantsController(studioCtx);
  const arena = studioCtx.currentArena;
  const curComponent =
    studioCtx.focusedViewCtx()?.currentComponent() ??
    (isDedicatedArena(arena) ? arena.component : undefined);

  return (
    <PlasmicEditOverrideToggleButton
      componentName={curComponent?.name || "Page"}
      onClick={() => {
        spawn(
          studioCtx.change(({ success }) => {
            const _content = slice.contents[0];
            if (isKnownGlobalVariantSplitContent(_content)) {
              const variant = _content.variant;
              vcontroller?.onClickVariant(variant);
            }
            return success();
          })
        );
      }}
    />
  );
}

export default EditOverrideToggleButton;
