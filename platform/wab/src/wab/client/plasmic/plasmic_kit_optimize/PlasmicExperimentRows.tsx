// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gtUDvxG6cmBbSzqLikNzoP
// Component: jARgXSx3Oz
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
import ExperimentRow from "../../components/splits/ExperimentRow"; // plasmic-import: 74OdgMxR-T/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_optimize.module.css"; // plasmic-import: gtUDvxG6cmBbSzqLikNzoP/projectcss
import sty from "./PlasmicExperimentRows.module.css"; // plasmic-import: jARgXSx3Oz/css

export type PlasmicExperimentRows__VariantMembers = {};

export type PlasmicExperimentRows__VariantsArgs = {};
type VariantPropType = keyof PlasmicExperimentRows__VariantsArgs;
export const PlasmicExperimentRows__VariantProps = new Array<VariantPropType>();

export type PlasmicExperimentRows__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicExperimentRows__ArgsType;
export const PlasmicExperimentRows__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicExperimentRows__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultExperimentRowsProps {
  children?: React.ReactNode;
  className?: string;
}

export const defaultExperimentRows__Args: Partial<PlasmicExperimentRows__ArgsType> =
  {};

function PlasmicExperimentRows__RenderFunc(props: {
  variants: PlasmicExperimentRows__VariantsArgs;
  args: PlasmicExperimentRows__ArgsType;
  overrides: PlasmicExperimentRows__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultExperimentRows__Args, props.args);
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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__bLtg5)}
            />

            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__slFWu)}
            />

            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__es2Cb)}
            />

            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__e6F9B)}
            />

            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__jXgth)}
            />

            <ExperimentRow
              className={classNames("__wab_instance", sty.experimentRow__mghP3)}
            />
          </React.Fragment>
        ),

        value: args.children,
      })}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicExperimentRows__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicExperimentRows__VariantsArgs;
    args?: PlasmicExperimentRows__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicExperimentRows__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicExperimentRows__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicExperimentRows__ArgProps,
      internalVariantPropNames: PlasmicExperimentRows__VariantProps,
    });

    return PlasmicExperimentRows__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicExperimentRows";
  } else {
    func.displayName = `PlasmicExperimentRows.${nodeName}`;
  }
  return func;
}

export const PlasmicExperimentRows = Object.assign(
  // Top-level PlasmicExperimentRows renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicExperimentRows
    internalVariantProps: PlasmicExperimentRows__VariantProps,
    internalArgProps: PlasmicExperimentRows__ArgProps,
  }
);

export default PlasmicExperimentRows;
/* prettier-ignore-end */
