// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ColumnWrapReverseSpaceEvenlyIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function ColumnWrapReverseSpaceEvenlyIcon(
  props: ColumnWrapReverseSpaceEvenlyIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 58a2 2 0 01-2-2V8a2 2 0 114 0v48a2 2 0 01-2 2zm48 0a2 2 0 01-2-2V8a2 2 0 114 0v48a2 2 0 01-2 2zm-9-44a2 2 0 00-2-2h-4a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2v-8zm-24-2a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8a2 2 0 012-2h4zm24 18a2 2 0 00-2-2h-4a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2v-8zm-24-2a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2v-8a2 2 0 012-2h4zm24 18a2 2 0 00-2-2h-4a2 2 0 00-2 2v8a2 2 0 002 2h4a2 2 0 002-2v-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ColumnWrapReverseSpaceEvenlyIcon;
/* prettier-ignore-end */
