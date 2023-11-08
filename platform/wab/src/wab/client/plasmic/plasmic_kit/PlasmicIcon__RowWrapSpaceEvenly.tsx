// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RowWrapSpaceEvenlyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RowWrapSpaceEvenlyIcon(props: RowWrapSpaceEvenlyIconProps) {
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
          "M6 8a2 2 0 012-2h48a2 2 0 110 4H8a2 2 0 01-2-2zm0 48a2 2 0 012-2h48a2 2 0 110 4H8a2 2 0 01-2-2zm4-39a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8zM8 41a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4zm18-24a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8zm-2 24a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2h-8a2 2 0 01-2-2v-4zm18-24a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default RowWrapSpaceEvenlyIcon;
/* prettier-ignore-end */
