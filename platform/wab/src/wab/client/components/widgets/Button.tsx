// This is a skeleton starter React component generated by Plasmic.
// Feel free to edit as you see fit.
import { PublicLink } from "@/wab/client/components/PublicLink";
import {
  DefaultButtonProps,
  PlasmicButton,
} from "@/wab/client/plasmic/PlasmicButton";
import { Tooltip } from "antd";
import React from "react";

interface ButtonProps
  extends DefaultButtonProps,
    Omit<
      React.ComponentProps<"button">,
      "type" | "disabled" | "color" | "key"
    > {
  tooltip?: React.ReactNode;
  href?: string;
  target?: string;
  htmlType?: React.ComponentProps<"button">["type"];
  className?: string;
  "data-test-id"?: string;
}

// type ButtonProps = Omit<React.ComponentProps<"button">, "type" | "disabled"> & {
//   children?: ReactNode;
//   startIcon?: ReactNode;
//   endIcon?: ReactNode;
//   withIcons?: PlasmicButton__VariantsArgs["withIcons"];
//   type?: PlasmicButton__VariantsArgs["type"];
//   size?: PlasmicButton__VariantsArgs["size"];
//   font?: PlasmicButton__VariantsArgs["font"];
//   color?: PlasmicButton__VariantsArgs["color"];
//   href?: string;
//   target?: string;
//   tooltip?: React.ReactNode;
//   // className prop is required for positioning instances of
//   // this Component
//   className?: string;

//   disabled?: "disabled" | boolean;

//   htmlType?: React.ComponentProps<"button">["type"];
// };

const Button = React.forwardRef(function Button(
  props: ButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const {
    tooltip,
    href,
    target,
    htmlType,
    className,
    "data-test-id": dataTestId,
    ...rest
  } = props;
  return (
    <PlasmicButton
      root={{
        as: href ? PublicLink : "button",
        props: {
          href,
          className: className ? `${className} btn-link` : "btn-link",
          type: props.htmlType ?? "button",
          ref,
          "data-test-id": dataTestId,
          target,
        },
        wrap: (x) => (tooltip ? <Tooltip title={tooltip}>{x}</Tooltip> : x),
      }}
      {...rest}
    />
  );
});

export default Button as React.FunctionComponent<ButtonProps>;
