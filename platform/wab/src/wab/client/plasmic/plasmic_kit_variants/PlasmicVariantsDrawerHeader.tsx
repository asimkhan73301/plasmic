// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wT5BWZPEc2fYxyqbTLXMt2
// Component: wv3xEE20Zw
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
import projectcss from "./plasmic_plasmic_kit_variants.module.css"; // plasmic-import: wT5BWZPEc2fYxyqbTLXMt2/projectcss
import sty from "./PlasmicVariantsDrawerHeader.module.css"; // plasmic-import: wv3xEE20Zw/css

import VariantGroupIcon from "../plasmic_kit/PlasmicIcon__VariantGroup"; // plasmic-import: pyS6pK4Spx-QF/icon

export type PlasmicVariantsDrawerHeader__VariantMembers = {};

export type PlasmicVariantsDrawerHeader__VariantsArgs = {};
type VariantPropType = keyof PlasmicVariantsDrawerHeader__VariantsArgs;
export const PlasmicVariantsDrawerHeader__VariantProps =
  new Array<VariantPropType>();

export type PlasmicVariantsDrawerHeader__ArgsType = {
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVariantsDrawerHeader__ArgsType;
export const PlasmicVariantsDrawerHeader__ArgProps = new Array<ArgPropType>(
  "icon",
  "children"
);

export type PlasmicVariantsDrawerHeader__OverridesType = {
  root?: p.Flex<"div">;
  iconContainer?: p.Flex<"div">;
  labelContainer?: p.Flex<"div">;
};

export interface DefaultVariantsDrawerHeaderProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicVariantsDrawerHeader__RenderFunc(props: {
  variants: PlasmicVariantsDrawerHeader__VariantsArgs;
  args: PlasmicVariantsDrawerHeader__ArgsType;
  overrides: PlasmicVariantsDrawerHeader__OverridesType;

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

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

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
        data-plasmic-name={"iconContainer"}
        data-plasmic-override={overrides.iconContainer}
        className={classNames(projectcss.all, sty.iconContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <VariantGroupIcon
              className={classNames(projectcss.all, sty.svg__vs8Wf)}
              role={"img"}
            />
          ),

          value: args.icon,
          className: classNames(sty.slotTargetIcon),
        })}
      </div>

      <div
        data-plasmic-name={"labelContainer"}
        data-plasmic-override={overrides.labelContainer}
        className={classNames(projectcss.all, sty.labelContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Variant Group",
          value: args.children,
          className: classNames(sty.slotTargetChildren),
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "iconContainer", "labelContainer"],
  iconContainer: ["iconContainer"],
  labelContainer: ["labelContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  iconContainer: "div";
  labelContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariantsDrawerHeader__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicVariantsDrawerHeader__VariantsArgs;
  args?: PlasmicVariantsDrawerHeader__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicVariantsDrawerHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicVariantsDrawerHeader__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicVariantsDrawerHeader__ArgProps,
          internalVariantPropNames: PlasmicVariantsDrawerHeader__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicVariantsDrawerHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariantsDrawerHeader";
  } else {
    func.displayName = `PlasmicVariantsDrawerHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicVariantsDrawerHeader = Object.assign(
  // Top-level PlasmicVariantsDrawerHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    iconContainer: makeNodeComponent("iconContainer"),
    labelContainer: makeNodeComponent("labelContainer"),

    // Metadata about props expected for PlasmicVariantsDrawerHeader
    internalVariantProps: PlasmicVariantsDrawerHeader__VariantProps,
    internalArgProps: PlasmicVariantsDrawerHeader__ArgProps,
  }
);

export default PlasmicVariantsDrawerHeader;
/* prettier-ignore-end */
