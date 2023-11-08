// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gtUDvxG6cmBbSzqLikNzoP
// Component: CWtKq3CmyB
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
import sty from "./PlasmicSegmentControl.module.css"; // plasmic-import: CWtKq3CmyB/css

import UserssvgIcon from "../q_4_icons/icons/PlasmicIcon__Userssvg"; // plasmic-import: SQUWUgO0N/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicSegmentControl__VariantMembers = {
  edit: "edit";
};

export type PlasmicSegmentControl__VariantsArgs = {
  edit?: SingleBooleanChoiceArg<"edit">;
};

type VariantPropType = keyof PlasmicSegmentControl__VariantsArgs;
export const PlasmicSegmentControl__VariantProps = new Array<VariantPropType>(
  "edit"
);

export type PlasmicSegmentControl__ArgsType = {};
type ArgPropType = keyof PlasmicSegmentControl__ArgsType;
export const PlasmicSegmentControl__ArgProps = new Array<ArgPropType>();

export type PlasmicSegmentControl__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  message?: p.Flex<"div">;
  targetBtn?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
};

export interface DefaultSegmentControlProps {
  edit?: SingleBooleanChoiceArg<"edit">;
  className?: string;
}

function PlasmicSegmentControl__RenderFunc(props: {
  variants: PlasmicSegmentControl__VariantsArgs;
  args: PlasmicSegmentControl__ArgsType;
  overrides: PlasmicSegmentControl__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Target Audience"}
      </div>

      <div
        data-plasmic-name={"message"}
        data-plasmic-override={overrides.message}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.message,
          { [sty.messageedit]: hasVariant(variants, "edit", "edit") }
        )}
      >
        {hasVariant(variants, "edit", "edit")
          ? "You have an audience defined"
          : "No target audience defined"}
      </div>

      <Button
        data-plasmic-name={"targetBtn"}
        data-plasmic-override={overrides.targetBtn}
        className={classNames("__wab_instance", sty.targetBtn)}
        size={"stretch" as const}
        startIcon={
          <UserssvgIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        }
        type={"primary" as const}
        withIcons={"startIcon" as const}
      >
        {hasVariant(variants, "edit", "edit")
          ? "Edit target audience"
          : "Select a target audience"}
      </Button>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "message", "targetBtn", "svg"],
  text: ["text"],
  message: ["message"],
  targetBtn: ["targetBtn", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  message: "div";
  targetBtn: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSegmentControl__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSegmentControl__VariantsArgs;
    args?: PlasmicSegmentControl__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSegmentControl__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSegmentControl__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicSegmentControl__ArgProps,
      internalVariantPropNames: PlasmicSegmentControl__VariantProps,
    });

    return PlasmicSegmentControl__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSegmentControl";
  } else {
    func.displayName = `PlasmicSegmentControl.${nodeName}`;
  }
  return func;
}

export const PlasmicSegmentControl = Object.assign(
  // Top-level PlasmicSegmentControl renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    message: makeNodeComponent("message"),
    targetBtn: makeNodeComponent("targetBtn"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSegmentControl
    internalVariantProps: PlasmicSegmentControl__VariantProps,
    internalArgProps: PlasmicSegmentControl__ArgProps,
  }
);

export default PlasmicSegmentControl;
/* prettier-ignore-end */
