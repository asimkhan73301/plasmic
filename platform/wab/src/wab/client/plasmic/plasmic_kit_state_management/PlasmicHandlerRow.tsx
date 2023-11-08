// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: frhoorZk3bxNXU73uUyvHm
// Component: VYbagtLCKV

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
import ActionChip from "../../components/sidebar-tabs/StateManagement/ActionChip"; // plasmic-import: _uEitkIFZr/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "./plasmic_plasmic_kit_state_management.module.css"; // plasmic-import: frhoorZk3bxNXU73uUyvHm/projectcss
import sty from "./PlasmicHandlerRow.module.css"; // plasmic-import: VYbagtLCKV/css

createPlasmicElementProxy;

export type PlasmicHandlerRow__VariantMembers = {};
export type PlasmicHandlerRow__VariantsArgs = {};
type VariantPropType = keyof PlasmicHandlerRow__VariantsArgs;
export const PlasmicHandlerRow__VariantProps = new Array<VariantPropType>();

export type PlasmicHandlerRow__ArgsType = {
  handlerName?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicHandlerRow__ArgsType;
export const PlasmicHandlerRow__ArgProps = new Array<ArgPropType>(
  "handlerName",
  "children"
);

export type PlasmicHandlerRow__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHandlerRowProps {
  handlerName?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicHandlerRow__RenderFunc(props: {
  variants: PlasmicHandlerRow__VariantsArgs;
  args: PlasmicHandlerRow__ArgsType;
  overrides: PlasmicHandlerRow__OverridesType;
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
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__eUpUb)}>
        <div className={classNames(projectcss.all, sty.freeBox__qgIiv)}>
          {p.renderPlasmicSlot({
            defaultContents: "Handler 1",
            value: args.handlerName,
          })}
        </div>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8J8Wo)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <ActionChip
              className={classNames("__wab_instance", sty.actionChip__z1NMw)}
            />
          ),

          value: args.children,
        })}
      </p.Stack>
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
  PlasmicHandlerRow__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHandlerRow__VariantsArgs;
    args?: PlasmicHandlerRow__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHandlerRow__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHandlerRow__ArgsType,
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
          internalArgPropNames: PlasmicHandlerRow__ArgProps,
          internalVariantPropNames: PlasmicHandlerRow__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicHandlerRow__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHandlerRow";
  } else {
    func.displayName = `PlasmicHandlerRow.${nodeName}`;
  }
  return func;
}

export const PlasmicHandlerRow = Object.assign(
  // Top-level PlasmicHandlerRow renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHandlerRow
    internalVariantProps: PlasmicHandlerRow__VariantProps,
    internalArgProps: PlasmicHandlerRow__ArgProps,
  }
);

export default PlasmicHandlerRow;
/* prettier-ignore-end */
