// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6CrqkTcB6gSAHoA8c8zpNz
// Component: UsJCR-Jtn5

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
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_top_bar.module.css"; // plasmic-import: 6CrqkTcB6gSAHoA8c8zpNz/projectcss
import sty from "./PlasmicZoomButton.module.css"; // plasmic-import: UsJCR-Jtn5/css

import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

export type PlasmicZoomButton__VariantMembers = {};

export type PlasmicZoomButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicZoomButton__VariantsArgs;
export const PlasmicZoomButton__VariantProps = new Array<VariantPropType>();

export type PlasmicZoomButton__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicZoomButton__ArgsType;
export const PlasmicZoomButton__ArgProps = new Array<ArgPropType>("children");

export type PlasmicZoomButton__OverridesType = {
  root?: p.Flex<typeof Button>;
};

export interface DefaultZoomButtonProps {
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

function PlasmicZoomButton__RenderFunc(props: {
  variants: PlasmicZoomButton__VariantsArgs;
  args: PlasmicZoomButton__ArgsType;
  overrides: PlasmicZoomButton__OverridesType;
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

  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      endIcon={
        <ChevronDownsvgIcon
          className={classNames(projectcss.all, sty.svg___5FCws)}
          role={"img"}
        />
      }
      font={"dim" as const}
      size={"small" as const}
      startIcon={
        <ArrowRightsvgIcon
          className={classNames(projectcss.all, sty.svg___336LD)}
          role={"img"}
        />
      }
      type={["clear"]}
      withIcons={["endIcon"]}
    >
      {p.renderPlasmicSlot({
        defaultContents: "25%",
        value: args.children,
      })}
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicZoomButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicZoomButton__VariantsArgs;
  args?: PlasmicZoomButton__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicZoomButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicZoomButton__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicZoomButton__ArgProps,
          internalVariantPropNames: PlasmicZoomButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicZoomButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicZoomButton";
  } else {
    func.displayName = `PlasmicZoomButton.${nodeName}`;
  }
  return func;
}

export const PlasmicZoomButton = Object.assign(
  // Top-level PlasmicZoomButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicZoomButton
    internalVariantProps: PlasmicZoomButton__VariantProps,
    internalArgProps: PlasmicZoomButton__ArgProps,
  }
);

export default PlasmicZoomButton;
/* prettier-ignore-end */
