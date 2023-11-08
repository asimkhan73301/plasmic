// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ehckhYnyDHgCBbV47m9bkf
// Component: XvpbI4g-IJWK

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
import ElevatedCard from "../../components/pricing/ElevatedCard"; // plasmic-import: OOKbAz_EJ7Rm/component

import {
  EnvironmentValue,
  useEnvironment,
} from "./PlasmicGlobalVariant__Environment"; // plasmic-import: hIjF9NLAUKG-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import sty from "./PlasmicPopout.module.css"; // plasmic-import: XvpbI4g-IJWK/css

createPlasmicElementProxy;

export type PlasmicPopout__VariantMembers = {
  above: "above";
  noArrow: "noArrow";
};
export type PlasmicPopout__VariantsArgs = {
  above?: SingleBooleanChoiceArg<"above">;
  noArrow?: SingleBooleanChoiceArg<"noArrow">;
};
type VariantPropType = keyof PlasmicPopout__VariantsArgs;
export const PlasmicPopout__VariantProps = new Array<VariantPropType>(
  "above",
  "noArrow"
);

export type PlasmicPopout__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicPopout__ArgsType;
export const PlasmicPopout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPopout__OverridesType = {
  reversedVstack?: p.Flex<"div">;
  arrowContainer?: p.Flex<"div">;
  arrow?: p.Flex<"div">;
};

export interface DefaultPopoutProps {
  children?: React.ReactNode;
  above?: SingleBooleanChoiceArg<"above">;
  noArrow?: SingleBooleanChoiceArg<"noArrow">;
  className?: string;
}

function PlasmicPopout__RenderFunc(props: {
  variants: PlasmicPopout__VariantsArgs;
  args: PlasmicPopout__ArgsType;
  overrides: PlasmicPopout__OverridesType;
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
        path: "above",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.above,
      },
      {
        path: "noArrow",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noArrow,
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

  const globalVariants = ensureGlobalVariants({
    environment: useEnvironment(),
  });

  return (
    <div
      data-plasmic-name={"reversedVstack"}
      data-plasmic-override={overrides.reversedVstack}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.reversedVstack,
        {
          [projectcss.global_environment_website]: hasVariant(
            globalVariants,
            "environment",
            "website"
          ),
          [sty.reversedVstackabove]: hasVariant($state, "above", "above"),
        }
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <ElevatedCard
            className={classNames("__wab_instance", sty.elevatedCard__lyFaM)}
            menuContainer2={
              <div className={classNames(projectcss.all, sty.freeBox__dkPx6)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___5Xafm
                  )}
                  href={"#"}
                >
                  {"Menu item 1"}
                </a>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__kzr9C
                  )}
                  href={"#"}
                >
                  {"Menu item 1"}
                </a>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__ydj8H
                  )}
                  href={"#"}
                >
                  {"Menu item 1"}
                </a>
              </div>
            }
          />
        ),

        value: args.children,
      })}
      <div
        data-plasmic-name={"arrowContainer"}
        data-plasmic-override={overrides.arrowContainer}
        className={classNames(projectcss.all, sty.arrowContainer, {
          [sty.arrowContainerabove]: hasVariant($state, "above", "above"),
          [sty.arrowContainernoArrow]: hasVariant($state, "noArrow", "noArrow"),
          [sty.arrowContainernoArrow_above]:
            hasVariant($state, "above", "above") &&
            hasVariant($state, "noArrow", "noArrow"),
        })}
      >
        <div
          data-plasmic-name={"arrow"}
          data-plasmic-override={overrides.arrow}
          className={classNames(projectcss.all, sty.arrow, {
            [sty.arrowabove]: hasVariant($state, "above", "above"),
          })}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  reversedVstack: ["reversedVstack", "arrowContainer", "arrow"],
  arrowContainer: ["arrowContainer", "arrow"],
  arrow: ["arrow"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  reversedVstack: "div";
  arrowContainer: "div";
  arrow: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPopout__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPopout__VariantsArgs;
    args?: PlasmicPopout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPopout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPopout__ArgsType,
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
          internalArgPropNames: PlasmicPopout__ArgProps,
          internalVariantPropNames: PlasmicPopout__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicPopout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "reversedVstack") {
    func.displayName = "PlasmicPopout";
  } else {
    func.displayName = `PlasmicPopout.${nodeName}`;
  }
  return func;
}

export const PlasmicPopout = Object.assign(
  // Top-level PlasmicPopout renders the root element
  makeNodeComponent("reversedVstack"),
  {
    // Helper components rendering sub-elements
    arrowContainer: makeNodeComponent("arrowContainer"),
    arrow: makeNodeComponent("arrow"),

    // Metadata about props expected for PlasmicPopout
    internalVariantProps: PlasmicPopout__VariantProps,
    internalArgProps: PlasmicPopout__ArgProps,
  }
);

export default PlasmicPopout;
/* prettier-ignore-end */
