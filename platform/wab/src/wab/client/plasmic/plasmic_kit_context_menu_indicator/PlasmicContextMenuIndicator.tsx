// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuzE93KTc4ZKNBYf3LAfy
// Component: AITkGvBysG

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
import MenuIndicator from "../../components/ContextMenuIndicator/MenuIndicator"; // plasmic-import: 5RLoIE7-j5/component
import BoundingBoxHighlighter from "../../components/ContextMenuIndicator/BoundingBoxHighlighter"; // plasmic-import: iKmOjRERju/component
import ContextMenuIndicatorInner from "../../components/ContextMenuIndicator/ContextMenuIndicatorInner"; // plasmic-import: juosawBbMz/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_context_menu_indicator.module.css"; // plasmic-import: fuzE93KTc4ZKNBYf3LAfy/projectcss
import sty from "./PlasmicContextMenuIndicator.module.css"; // plasmic-import: AITkGvBysG/css

createPlasmicElementProxy;

export type PlasmicContextMenuIndicator__VariantMembers = {
  isActive: "isActive";
  isRecording: "isRecording";
  fullWidth: "fullWidth";
};
export type PlasmicContextMenuIndicator__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
  fullWidth?: SingleBooleanChoiceArg<"fullWidth">;
};
type VariantPropType = keyof PlasmicContextMenuIndicator__VariantsArgs;
export const PlasmicContextMenuIndicator__VariantProps =
  new Array<VariantPropType>("isActive", "isRecording", "fullWidth");

export type PlasmicContextMenuIndicator__ArgsType = {
  children?: React.ReactNode;
  contextMenu?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContextMenuIndicator__ArgsType;
export const PlasmicContextMenuIndicator__ArgProps = new Array<ArgPropType>(
  "children",
  "contextMenu"
);

export type PlasmicContextMenuIndicator__OverridesType = {
  root?: p.Flex<"div">;
  menuIndicator?: p.Flex<typeof MenuIndicator>;
  boundingBoxHighlighter?: p.Flex<typeof BoundingBoxHighlighter>;
  contextMenuIndicatorInner?: p.Flex<typeof ContextMenuIndicatorInner>;
  invisibleHoverTarget?: p.Flex<"div">;
  contextMenuContainer?: p.Flex<"div">;
};

export interface DefaultContextMenuIndicatorProps {
  children?: React.ReactNode;
  contextMenu?: React.ReactNode;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  isRecording?: SingleBooleanChoiceArg<"isRecording">;
  fullWidth?: SingleBooleanChoiceArg<"fullWidth">;
  className?: string;
}

const $$ = {};

function PlasmicContextMenuIndicator__RenderFunc(props: {
  variants: PlasmicContextMenuIndicator__VariantsArgs;
  args: PlasmicContextMenuIndicator__ArgsType;
  overrides: PlasmicContextMenuIndicator__OverridesType;
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
        path: "isActive",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isActive,
      },
      {
        path: "isRecording",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isRecording,
      },
      {
        path: "fullWidth",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.fullWidth,
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const [isRootFocusWithin, triggerRootFocusWithinProps] = useTrigger(
    "useFocusedWithin",
    {}
  );
  const triggers = {
    hover_root: isRootHover,
    focusWithin_root: isRootFocusWithin,
  };

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
        sty.root,
        { [sty.rootfullWidth]: hasVariant($state, "fullWidth", "fullWidth") }
      )}
      data-plasmic-trigger-props={[
        triggerRootHoverProps,
        triggerRootFocusWithinProps,
      ]}
    >
      <MenuIndicator
        data-plasmic-name={"menuIndicator"}
        data-plasmic-override={overrides.menuIndicator}
        className={classNames("__wab_instance", sty.menuIndicator)}
      />

      <BoundingBoxHighlighter
        data-plasmic-name={"boundingBoxHighlighter"}
        data-plasmic-override={overrides.boundingBoxHighlighter}
        className={classNames("__wab_instance", sty.boundingBoxHighlighter)}
      />

      {p.renderPlasmicSlot({
        defaultContents: (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__omx2K
            )}
          >
            {"Test text"}
          </div>
        ),
        value: args.children,
      })}
      <ContextMenuIndicatorInner
        data-plasmic-name={"contextMenuIndicatorInner"}
        data-plasmic-override={overrides.contextMenuIndicatorInner}
        active={hasVariant($state, "isActive", "isActive") ? true : undefined}
        className={classNames("__wab_instance", sty.contextMenuIndicatorInner, {
          [sty.contextMenuIndicatorInnerisActive]: hasVariant(
            $state,
            "isActive",
            "isActive"
          ),
          [sty.contextMenuIndicatorInnerisRecording]: hasVariant(
            $state,
            "isRecording",
            "isRecording"
          ),
        })}
        interactive={
          triggers.focusWithin_root
            ? true
            : triggers.hover_root
            ? true
            : undefined
        }
        isRecording={
          hasVariant($state, "isRecording", "isRecording") ? true : undefined
        }
      />

      <div
        data-plasmic-name={"invisibleHoverTarget"}
        data-plasmic-override={overrides.invisibleHoverTarget}
        className={classNames(projectcss.all, sty.invisibleHoverTarget, {
          [sty.invisibleHoverTargetisActive]: hasVariant(
            $state,
            "isActive",
            "isActive"
          ),
        })}
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)" }}
      />

      <div
        data-plasmic-name={"contextMenuContainer"}
        data-plasmic-override={overrides.contextMenuContainer}
        className={classNames(projectcss.all, sty.contextMenuContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.contextMenu,
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "menuIndicator",
    "boundingBoxHighlighter",
    "contextMenuIndicatorInner",
    "invisibleHoverTarget",
    "contextMenuContainer",
  ],
  menuIndicator: ["menuIndicator"],
  boundingBoxHighlighter: ["boundingBoxHighlighter"],
  contextMenuIndicatorInner: ["contextMenuIndicatorInner"],
  invisibleHoverTarget: ["invisibleHoverTarget"],
  contextMenuContainer: ["contextMenuContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  menuIndicator: typeof MenuIndicator;
  boundingBoxHighlighter: typeof BoundingBoxHighlighter;
  contextMenuIndicatorInner: typeof ContextMenuIndicatorInner;
  invisibleHoverTarget: "div";
  contextMenuContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContextMenuIndicator__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContextMenuIndicator__VariantsArgs;
    args?: PlasmicContextMenuIndicator__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContextMenuIndicator__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContextMenuIndicator__ArgsType,
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
          internalArgPropNames: PlasmicContextMenuIndicator__ArgProps,
          internalVariantPropNames: PlasmicContextMenuIndicator__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicContextMenuIndicator__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContextMenuIndicator";
  } else {
    func.displayName = `PlasmicContextMenuIndicator.${nodeName}`;
  }
  return func;
}

export const PlasmicContextMenuIndicator = Object.assign(
  // Top-level PlasmicContextMenuIndicator renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menuIndicator: makeNodeComponent("menuIndicator"),
    boundingBoxHighlighter: makeNodeComponent("boundingBoxHighlighter"),
    contextMenuIndicatorInner: makeNodeComponent("contextMenuIndicatorInner"),
    invisibleHoverTarget: makeNodeComponent("invisibleHoverTarget"),
    contextMenuContainer: makeNodeComponent("contextMenuContainer"),

    // Metadata about props expected for PlasmicContextMenuIndicator
    internalVariantProps: PlasmicContextMenuIndicator__VariantProps,
    internalArgProps: PlasmicContextMenuIndicator__ArgProps,
  }
);

export default PlasmicContextMenuIndicator;
/* prettier-ignore-end */
