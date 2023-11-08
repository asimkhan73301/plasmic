// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: frhoorZk3bxNXU73uUyvHm
// Component: EmZVqVuGE1

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
import Textbox from "../../components/widgets/Textbox"; // plasmic-import: pA22NEzDCsn_/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: 11bnIiSxJUyPwS/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "./plasmic_plasmic_kit_state_management.module.css"; // plasmic-import: frhoorZk3bxNXU73uUyvHm/projectcss
import sty from "./PlasmicLabeledItem.module.css"; // plasmic-import: EmZVqVuGE1/css

import SearchsvgIcon from "../q_4_icons/icons/PlasmicIcon__Searchsvg"; // plasmic-import: R5DLz11OA/icon
import ClosesvgIcon from "../q_4_icons/icons/PlasmicIcon__Closesvg"; // plasmic-import: DhvEHyCHT/icon

createPlasmicElementProxy;

export type PlasmicLabeledItem__VariantMembers = {
  layout: "vertical" | "horizontal";
  labelSize: "half";
  withRightExtras: "withRightExtras";
};
export type PlasmicLabeledItem__VariantsArgs = {
  layout?: SingleChoiceArg<"vertical" | "horizontal">;
  labelSize?: SingleChoiceArg<"half">;
  withRightExtras?: SingleBooleanChoiceArg<"withRightExtras">;
};
type VariantPropType = keyof PlasmicLabeledItem__VariantsArgs;
export const PlasmicLabeledItem__VariantProps = new Array<VariantPropType>(
  "layout",
  "labelSize",
  "withRightExtras"
);

export type PlasmicLabeledItem__ArgsType = {
  label?: React.ReactNode;
  value?: React.ReactNode;
  rightExtras?: React.ReactNode;
  gap?: number;
};
type ArgPropType = keyof PlasmicLabeledItem__ArgsType;
export const PlasmicLabeledItem__ArgProps = new Array<ArgPropType>(
  "label",
  "value",
  "rightExtras",
  "gap"
);

export type PlasmicLabeledItem__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultLabeledItemProps {
  label?: React.ReactNode;
  value?: React.ReactNode;
  rightExtras?: React.ReactNode;
  gap?: number;
  layout?: SingleChoiceArg<"vertical" | "horizontal">;
  labelSize?: SingleChoiceArg<"half">;
  withRightExtras?: SingleBooleanChoiceArg<"withRightExtras">;
  className?: string;
}

const $$ = {};

function PlasmicLabeledItem__RenderFunc(props: {
  variants: PlasmicLabeledItem__VariantsArgs;
  args: PlasmicLabeledItem__ArgsType;
  overrides: PlasmicLabeledItem__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          gap: 8,
        },
        props.args
      ),
    [props.args]
  );

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
        path: "layout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.layout,
      },
      {
        path: "labelSize",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.labelSize,
      },
      {
        path: "withRightExtras",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          !!$props.rightExtras ?? $props.withRightExtras,
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
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootlabelSize_half]: hasVariant($state, "labelSize", "half"),
          [sty.rootlayout_horizontal]: hasVariant(
            $state,
            "layout",
            "horizontal"
          ),
          [sty.rootlayout_vertical]: hasVariant($state, "layout", "vertical"),
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bXw82, {
          [sty.freeBoxlayout_horizontal__bXw82EsXmk]: hasVariant(
            $state,
            "layout",
            "horizontal"
          ),
          [sty.freeBoxlayout_vertical__bXw821KxsP]: hasVariant(
            $state,
            "layout",
            "vertical"
          ),
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0Gerh, {
            [sty.freeBoxlabelSize_half___0GerhhH4Fv]: hasVariant(
              $state,
              "labelSize",
              "half"
            ),
            [sty.freeBoxlayout_horizontal___0GerhEsXmk]: hasVariant(
              $state,
              "layout",
              "horizontal"
            ),
            [sty.freeBoxlayout_vertical___0Gerh1KxsP]: hasVariant(
              $state,
              "layout",
              "vertical"
            ),
            [sty.freeBoxwithRightExtras___0GerhuUUj4]: hasVariant(
              $state,
              "withRightExtras",
              "withRightExtras"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label,
          })}
        </p.Stack>
        <div
          className={classNames(projectcss.all, sty.freeBox__wrYhU, {
            [sty.freeBoxlabelSize_half__wrYhUhH4Fv]: hasVariant(
              $state,
              "labelSize",
              "half"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Textbox
                className={classNames("__wab_instance", sty.textbox__kv871, {
                  [sty.textboxlayout_vertical__kv8711KxsP]: hasVariant(
                    $state,
                    "layout",
                    "vertical"
                  ),
                })}
                prefixIcon={
                  <SearchsvgIcon
                    className={classNames(projectcss.all, sty.svg__oazkb)}
                    role={"img"}
                  />
                }
                styleType={["bordered"]}
                suffixIcon={
                  <ClosesvgIcon
                    className={classNames(projectcss.all, sty.svg__hkE1G)}
                    role={"img"}
                  />
                }
              />
            ),

            value: args.value,
          })}
        </div>
      </p.Stack>
      <div
        className={classNames(projectcss.all, sty.freeBox__oh2X, {
          [sty.freeBoxlayout_vertical__oh2X1KxsP]: hasVariant(
            $state,
            "layout",
            "vertical"
          ),
          [sty.freeBoxwithRightExtras__oh2XUUUj4]: hasVariant(
            $state,
            "withRightExtras",
            "withRightExtras"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.rightExtras,
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLabeledItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLabeledItem__VariantsArgs;
    args?: PlasmicLabeledItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLabeledItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLabeledItem__ArgsType,
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
          internalArgPropNames: PlasmicLabeledItem__ArgProps,
          internalVariantPropNames: PlasmicLabeledItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLabeledItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLabeledItem";
  } else {
    func.displayName = `PlasmicLabeledItem.${nodeName}`;
  }
  return func;
}

export const PlasmicLabeledItem = Object.assign(
  // Top-level PlasmicLabeledItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicLabeledItem
    internalVariantProps: PlasmicLabeledItem__VariantProps,
    internalArgProps: PlasmicLabeledItem__ArgProps,
  }
);

export default PlasmicLabeledItem;
/* prettier-ignore-end */
