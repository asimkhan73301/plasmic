// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { Tooltip } from "antd";
import * as React from "react";
import {
  DefaultChipProps,
  PlasmicChip,
} from "../../plasmic/plasmic_kit_design_system/PlasmicChip";

interface ChipProps extends Omit<DefaultChipProps, "deletable"> {
  onDelete?: () => void;
  onClick?: () => void;
  tooltip?: React.ReactNode;
}

function Chip(props: ChipProps) {
  const { onDelete, tooltip, ...rest } = props;
  return (
    <PlasmicChip
      {...rest}
      deletable={!!props.onDelete}
      closeIcon={{
        onClick: (e) => {
          e.stopPropagation();
          props.onDelete && props.onDelete();
        },
      }}
      root={{
        props: {
          onClick: props.onClick,
        },

        wrap: tooltip
          ? (x) => <Tooltip title={tooltip}>{x as React.ReactElement}</Tooltip>
          : undefined,
      }}
    />
  );
}

export default Chip;
