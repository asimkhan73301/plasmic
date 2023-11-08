// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: buRRLzgjkH
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicComponentPropsSubHeader.module.css"; // plasmic-import: buRRLzgjkH/css

export type PlasmicComponentPropsSubHeader__VariantMembers = {
  noDetails: "noDetails";
};

export type PlasmicComponentPropsSubHeader__VariantsArgs = {
  noDetails?: SingleBooleanChoiceArg<"noDetails">;
};

type VariantPropType = keyof PlasmicComponentPropsSubHeader__VariantsArgs;
export const PlasmicComponentPropsSubHeader__VariantProps =
  new Array<VariantPropType>("noDetails");

export type PlasmicComponentPropsSubHeader__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicComponentPropsSubHeader__ArgsType;
export const PlasmicComponentPropsSubHeader__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicComponentPropsSubHeader__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  details?: p.Flex<"div">;
};

export interface DefaultComponentPropsSubHeaderProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  noDetails?: SingleBooleanChoiceArg<"noDetails">;
  className?: string;
}

export const defaultComponentPropsSubHeader__Args: Partial<PlasmicComponentPropsSubHeader__ArgsType> =
  {};

function PlasmicComponentPropsSubHeader__RenderFunc(props: {
  variants: PlasmicComponentPropsSubHeader__VariantsArgs;
  args: PlasmicComponentPropsSubHeader__ArgsType;
  overrides: PlasmicComponentPropsSubHeader__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign(
    {},
    defaultComponentPropsSubHeader__Args,
    props.args
  );

  const $props = args;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header, {
          [sty.headernoDetails]: hasVariant(variants, "noDetails", "noDetails"),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Variant Props",
          value: args.children,
          className: classNames(sty.slotTargetChildren),
        })}
      </div>

      {(hasVariant(variants, "noDetails", "noDetails") ? false : true) ? (
        <div
          data-plasmic-name={"details"}
          data-plasmic-override={overrides.details}
          className={classNames(projectcss.all, sty.details, {
            [sty.detailsnoDetails]: hasVariant(
              variants,
              "noDetails",
              "noDetails"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Some details",
            value: args.slot,
            className: classNames(sty.slotTargetSlot),
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "details"],
  header: ["header"],
  details: ["details"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  details: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComponentPropsSubHeader__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicComponentPropsSubHeader__VariantsArgs;
  args?: PlasmicComponentPropsSubHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicComponentPropsSubHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicComponentPropsSubHeader__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicComponentPropsSubHeader__ArgProps,
      internalVariantPropNames: PlasmicComponentPropsSubHeader__VariantProps,
    });

    return PlasmicComponentPropsSubHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComponentPropsSubHeader";
  } else {
    func.displayName = `PlasmicComponentPropsSubHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicComponentPropsSubHeader = Object.assign(
  // Top-level PlasmicComponentPropsSubHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    details: makeNodeComponent("details"),

    // Metadata about props expected for PlasmicComponentPropsSubHeader
    internalVariantProps: PlasmicComponentPropsSubHeader__VariantProps,
    internalArgProps: PlasmicComponentPropsSubHeader__ArgProps,
  }
);

export default PlasmicComponentPropsSubHeader;
/* prettier-ignore-end */
