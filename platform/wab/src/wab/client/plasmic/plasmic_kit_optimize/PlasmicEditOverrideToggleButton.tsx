// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gtUDvxG6cmBbSzqLikNzoP
// Component: QUkOz1f5TI
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_optimize.module.css"; // plasmic-import: gtUDvxG6cmBbSzqLikNzoP/projectcss
import sty from "./PlasmicEditOverrideToggleButton.module.css"; // plasmic-import: QUkOz1f5TI/css

import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import EditsvgIcon from "../q_4_icons/icons/PlasmicIcon__Editsvg"; // plasmic-import: _Qa2gdunG/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicEditOverrideToggleButton__VariantMembers = {};

export type PlasmicEditOverrideToggleButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicEditOverrideToggleButton__VariantsArgs;
export const PlasmicEditOverrideToggleButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicEditOverrideToggleButton__ArgsType = {};
type ArgPropType = keyof PlasmicEditOverrideToggleButton__ArgsType;
export const PlasmicEditOverrideToggleButton__ArgProps =
  new Array<ArgPropType>();

export type PlasmicEditOverrideToggleButton__OverridesType = {
  root?: p.Flex<typeof Button>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  componentName?: p.Flex<"span">;
};

export interface DefaultEditOverrideToggleButtonProps {
  className?: string;
}

export const defaultEditOverrideToggleButton__Args: Partial<PlasmicEditOverrideToggleButton__ArgsType> =
  {};

function PlasmicEditOverrideToggleButton__RenderFunc(props: {
  variants: PlasmicEditOverrideToggleButton__VariantsArgs;
  args: PlasmicEditOverrideToggleButton__ArgsType;
  overrides: PlasmicEditOverrideToggleButton__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign(
    {},
    defaultEditOverrideToggleButton__Args,
    props.args
  );

  const $props = args;

  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      endIcon={
        <ChevronDownsvgIcon
          className={classNames(projectcss.all, sty.svg__vkCw5)}
          role={"img"}
        />
      }
      pointerCursor={true}
      size={"small" as const}
      startIcon={
        <ArrowRightsvgIcon
          className={classNames(projectcss.all, sty.svg__heyIn)}
          role={"img"}
        />
      }
      type={"primary" as const}
    >
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <EditsvgIcon
            className={classNames(projectcss.all, sty.svg__vi6F)}
            role={"img"}
          />

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>{"Record Changes for "}</React.Fragment>
              <span
                data-plasmic-name={"componentName"}
                data-plasmic-override={overrides.componentName}
                className={classNames(
                  projectcss.all,
                  projectcss.span,
                  projectcss.__wab_text,
                  projectcss.plasmic_default__inline,
                  sty.componentName
                )}
              >
                {"{ComponentName}"}
              </span>
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
        </p.Stack>
      ) : null}
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text", "componentName"],
  freeBox: ["freeBox", "text", "componentName"],
  text: ["text", "componentName"],
  componentName: ["componentName"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
  freeBox: "div";
  text: "div";
  componentName: "span";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEditOverrideToggleButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEditOverrideToggleButton__VariantsArgs;
    args?: PlasmicEditOverrideToggleButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEditOverrideToggleButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEditOverrideToggleButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicEditOverrideToggleButton__ArgProps,
      internalVariantPropNames: PlasmicEditOverrideToggleButton__VariantProps,
    });

    return PlasmicEditOverrideToggleButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditOverrideToggleButton";
  } else {
    func.displayName = `PlasmicEditOverrideToggleButton.${nodeName}`;
  }
  return func;
}

export const PlasmicEditOverrideToggleButton = Object.assign(
  // Top-level PlasmicEditOverrideToggleButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    componentName: makeNodeComponent("componentName"),

    // Metadata about props expected for PlasmicEditOverrideToggleButton
    internalVariantProps: PlasmicEditOverrideToggleButton__VariantProps,
    internalArgProps: PlasmicEditOverrideToggleButton__ArgProps,
  }
);

export default PlasmicEditOverrideToggleButton;
/* prettier-ignore-end */
