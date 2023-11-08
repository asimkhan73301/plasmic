// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuzE93KTc4ZKNBYf3LAfy
// Component: iKmOjRERju

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_context_menu_indicator.module.css"; // plasmic-import: fuzE93KTc4ZKNBYf3LAfy/projectcss
import sty from "./PlasmicBoundingBoxHighlighter.module.css"; // plasmic-import: iKmOjRERju/css

createPlasmicElementProxy;

export type PlasmicBoundingBoxHighlighter__VariantMembers = {
  isRecording: "isRecording";
};
export type PlasmicBoundingBoxHighlighter__VariantsArgs = {
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
};
type VariantPropType = keyof PlasmicBoundingBoxHighlighter__VariantsArgs;
export const PlasmicBoundingBoxHighlighter__VariantProps =
  new Array<VariantPropType>("isRecording");

export type PlasmicBoundingBoxHighlighter__ArgsType = {};
type ArgPropType = keyof PlasmicBoundingBoxHighlighter__ArgsType;
export const PlasmicBoundingBoxHighlighter__ArgProps = new Array<ArgPropType>();

export type PlasmicBoundingBoxHighlighter__OverridesType = {
  root?: p.Flex<"div">;
  outerBorder?: p.Flex<"div">;
  outerBorder2?: p.Flex<"div">;
  innerBorder?: p.Flex<"div">;
};

export interface DefaultBoundingBoxHighlighterProps {
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
  className?: string;
}

const $$ = {};

function PlasmicBoundingBoxHighlighter__RenderFunc(props: {
  variants: PlasmicBoundingBoxHighlighter__VariantsArgs;
  args: PlasmicBoundingBoxHighlighter__ArgsType;
  overrides: PlasmicBoundingBoxHighlighter__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isRecording",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isRecording,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

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
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"outerBorder"}
        data-plasmic-override={overrides.outerBorder}
        className={classNames(projectcss.all, sty.outerBorder)}
      />

      <div
        data-plasmic-name={"outerBorder2"}
        data-plasmic-override={overrides.outerBorder2}
        className={classNames(projectcss.all, sty.outerBorder2, {
          [sty.outerBorder2isRecording]: hasVariant(
            $state,
            "isRecording",
            "isRecording"
          ),
        })}
      />

      <div
        data-plasmic-name={"innerBorder"}
        data-plasmic-override={overrides.innerBorder}
        className={classNames(projectcss.all, sty.innerBorder)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "outerBorder", "outerBorder2", "innerBorder"],
  outerBorder: ["outerBorder"],
  outerBorder2: ["outerBorder2"],
  innerBorder: ["innerBorder"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  outerBorder: "div";
  outerBorder2: "div";
  innerBorder: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBoundingBoxHighlighter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBoundingBoxHighlighter__VariantsArgs;
    args?: PlasmicBoundingBoxHighlighter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBoundingBoxHighlighter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBoundingBoxHighlighter__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          internalArgPropNames: PlasmicBoundingBoxHighlighter__ArgProps,
          internalVariantPropNames: PlasmicBoundingBoxHighlighter__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicBoundingBoxHighlighter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBoundingBoxHighlighter";
  } else {
    func.displayName = `PlasmicBoundingBoxHighlighter.${nodeName}`;
  }
  return func;
}

export const PlasmicBoundingBoxHighlighter = Object.assign(
  // Top-level PlasmicBoundingBoxHighlighter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    outerBorder: makeNodeComponent("outerBorder"),
    outerBorder2: makeNodeComponent("outerBorder2"),
    innerBorder: makeNodeComponent("innerBorder"),

    // Metadata about props expected for PlasmicBoundingBoxHighlighter
    internalVariantProps: PlasmicBoundingBoxHighlighter__VariantProps,
    internalArgProps: PlasmicBoundingBoxHighlighter__ArgProps,
  }
);

export default PlasmicBoundingBoxHighlighter;
/* prettier-ignore-end */
