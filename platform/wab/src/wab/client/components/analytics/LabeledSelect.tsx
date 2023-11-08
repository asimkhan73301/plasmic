// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Tooltip } from "antd";
import * as React from "react";
import {
  DefaultLabeledSelectProps,
  PlasmicLabeledSelect,
} from "../../plasmic/plasmic_kit_analytics/PlasmicLabeledSelect";
import Select from "../widgets/Select";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface LabeledSelectProps extends Omit<DefaultLabeledSelectProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from DefaultLabeledSelectProps altogether and have
// total control over the props for your component.
export interface LabeledSelectProps extends DefaultLabeledSelectProps {
  options?: Array<{ label: string; value?: string; group?: string }>;
  selected: string;
  groups?: Array<{ label: string; value: string }>;
  isDisabled?: boolean;
  info?: string;
  onChange: (_?: string) => void;
}

function LabeledSelect_(
  props: LabeledSelectProps,
  ref: HTMLElementRefOf<"div">
) {
  const { options, selected, onChange, groups, isDisabled, info, ...rest } =
    props;

  const SelectChildren = (() => {
    if (groups) {
      const elementsWithoutGroup = (options ?? []).filter(
        (option) => !option.group
      );
      return [
        ...elementsWithoutGroup.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        )),
        ...groups.map(({ label, value }) => (
          <Select.OptionGroup key={value} title={label}>
            {(options ?? [])
              .filter((option) => option.group === value)
              .map((option) => (
                <Select.Option key={option.value} value={option.value}>
                  {option.label}
                </Select.Option>
              ))}
          </Select.OptionGroup>
        )),
      ];
    }
    return (options ?? []).map(({ label, value }) => (
      <Select.Option key={value} value={value}>
        {label}
      </Select.Option>
    ));
  })();

  return (
    <PlasmicLabeledSelect
      root={{ ref }}
      {...rest}
      select={{
        isDisabled,
        value: selected,
        onChange: (value) => onChange(value ?? undefined),
        children: SelectChildren,
      }}
      info={{
        wrap: (node) => {
          return <Tooltip title={info}>{node}</Tooltip>;
        },
      }}
    />
  );
}

const LabeledSelect = React.forwardRef(LabeledSelect_);
export default LabeledSelect;
