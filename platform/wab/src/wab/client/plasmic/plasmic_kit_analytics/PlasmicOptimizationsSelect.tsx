// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cQnF1HuwK97HkvkrC6uRk2
// Component: 0bODOMCtGi
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
import OptimizationOption from "../../components/analytics/OptimizationOption"; // plasmic-import: yvny0cDy_e/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_analytics.module.css"; // plasmic-import: cQnF1HuwK97HkvkrC6uRk2/projectcss
import sty from "./PlasmicOptimizationsSelect.module.css"; // plasmic-import: 0bODOMCtGi/css

export type PlasmicOptimizationsSelect__VariantMembers = {};

export type PlasmicOptimizationsSelect__VariantsArgs = {};
type VariantPropType = keyof PlasmicOptimizationsSelect__VariantsArgs;
export const PlasmicOptimizationsSelect__VariantProps =
  new Array<VariantPropType>();

export type PlasmicOptimizationsSelect__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOptimizationsSelect__ArgsType;
export const PlasmicOptimizationsSelect__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicOptimizationsSelect__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultOptimizationsSelectProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicOptimizationsSelect__RenderFunc(props: {
  variants: PlasmicOptimizationsSelect__VariantsArgs;
  args: PlasmicOptimizationsSelect__ArgsType;
  overrides: PlasmicOptimizationsSelect__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = args;

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
        {"Optimizations"}
      </div>

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <OptimizationOption
                className={classNames(
                  "__wab_instance",
                  sty.optimizationOption__jRgRr
                )}
                label={"Unset"}
                selected={true}
              />

              <OptimizationOption
                className={classNames(
                  "__wab_instance",
                  sty.optimizationOption__glowY
                )}
                label={"A/B Test"}
              />

              <OptimizationOption
                className={classNames(
                  "__wab_instance",
                  sty.optimizationOption___7ZyRs
                )}
                label={"Experiment"}
              />

              <OptimizationOption
                className={classNames(
                  "__wab_instance",
                  sty.optimizationOption__dkn4A
                )}
                label={"Another one"}
              />
            </React.Fragment>
          ),

          value: args.children,
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text", "freeBox"],
  text: ["text"],
  freeBox: ["freeBox"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOptimizationsSelect__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOptimizationsSelect__VariantsArgs;
    args?: PlasmicOptimizationsSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOptimizationsSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOptimizationsSelect__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicOptimizationsSelect__ArgProps,
          internalVariantPropNames: PlasmicOptimizationsSelect__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicOptimizationsSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOptimizationsSelect";
  } else {
    func.displayName = `PlasmicOptimizationsSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicOptimizationsSelect = Object.assign(
  // Top-level PlasmicOptimizationsSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicOptimizationsSelect
    internalVariantProps: PlasmicOptimizationsSelect__VariantProps,
    internalArgProps: PlasmicOptimizationsSelect__ArgProps,
  }
);

export default PlasmicOptimizationsSelect;
/* prettier-ignore-end */
