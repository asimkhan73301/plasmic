// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: OcKjGNdq-h

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
import StyleToggleButton from "../../components/style-controls/StyleToggleButton"; // plasmic-import: bqUvK9cs5w/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicStyleToggleButtonGroup.module.css"; // plasmic-import: OcKjGNdq-h/css

import CloseIcon from "../plasmic_kit/PlasmicIcon__Close"; // plasmic-import: hy7vKrgdAZwW4/icon

createPlasmicElementProxy;

export type PlasmicStyleToggleButtonGroup__VariantMembers = {
  styleType: "right" | "between";
  autoWidth: "autoWidth";
};
export type PlasmicStyleToggleButtonGroup__VariantsArgs = {
  styleType?: SingleChoiceArg<"right" | "between">;
  autoWidth?: SingleBooleanChoiceArg<"autoWidth">;
};
type VariantPropType = keyof PlasmicStyleToggleButtonGroup__VariantsArgs;
export const PlasmicStyleToggleButtonGroup__VariantProps =
  new Array<VariantPropType>("styleType", "autoWidth");

export type PlasmicStyleToggleButtonGroup__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStyleToggleButtonGroup__ArgsType;
export const PlasmicStyleToggleButtonGroup__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicStyleToggleButtonGroup__OverridesType = {
  root?: p.Flex<"div">;
  buttonsContainer?: p.Flex<"div">;
};

export interface DefaultStyleToggleButtonGroupProps {
  children?: React.ReactNode;
  styleType?: SingleChoiceArg<"right" | "between">;
  autoWidth?: SingleBooleanChoiceArg<"autoWidth">;
  className?: string;
}

const $$ = {};

function PlasmicStyleToggleButtonGroup__RenderFunc(props: {
  variants: PlasmicStyleToggleButtonGroup__VariantsArgs;
  args: PlasmicStyleToggleButtonGroup__ArgsType;
  overrides: PlasmicStyleToggleButtonGroup__OverridesType;
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
        path: "styleType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.styleType,
      },
      {
        path: "autoWidth",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.autoWidth,
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
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        "baseline-friendly-centered-block-container",
        {
          [sty.rootautoWidth]: hasVariant($state, "autoWidth", "autoWidth"),
          [sty.rootstyleType_right]: hasVariant($state, "styleType", "right"),
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"buttonsContainer"}
        data-plasmic-override={overrides.buttonsContainer}
        hasGap={true}
        className={classNames(projectcss.all, sty.buttonsContainer, {
          [sty.buttonsContainerautoWidth]: hasVariant(
            $state,
            "autoWidth",
            "autoWidth"
          ),
          [sty.buttonsContainerstyleType_between]: hasVariant(
            $state,
            "styleType",
            "between"
          ),
          [sty.buttonsContainerstyleType_right]: hasVariant(
            $state,
            "styleType",
            "right"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <StyleToggleButton
                className={classNames(
                  "__wab_instance",
                  sty.styleToggleButton__bW8S4
                )}
              >
                <CloseIcon
                  className={classNames(projectcss.all, sty.svg__rsFgI)}
                  role={"img"}
                />
              </StyleToggleButton>
              <StyleToggleButton
                className={classNames(
                  "__wab_instance",
                  sty.styleToggleButton__l4DOy
                )}
                valueSetState={"isSet"}
              >
                <CloseIcon
                  className={classNames(projectcss.all, sty.svg__pKot)}
                  role={"img"}
                />
              </StyleToggleButton>
            </React.Fragment>
          ),
          value: args.children,
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "buttonsContainer"],
  buttonsContainer: ["buttonsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  buttonsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStyleToggleButtonGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStyleToggleButtonGroup__VariantsArgs;
    args?: PlasmicStyleToggleButtonGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStyleToggleButtonGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStyleToggleButtonGroup__ArgsType,
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
          internalArgPropNames: PlasmicStyleToggleButtonGroup__ArgProps,
          internalVariantPropNames: PlasmicStyleToggleButtonGroup__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStyleToggleButtonGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStyleToggleButtonGroup";
  } else {
    func.displayName = `PlasmicStyleToggleButtonGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicStyleToggleButtonGroup = Object.assign(
  // Top-level PlasmicStyleToggleButtonGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    buttonsContainer: makeNodeComponent("buttonsContainer"),

    // Metadata about props expected for PlasmicStyleToggleButtonGroup
    internalVariantProps: PlasmicStyleToggleButtonGroup__VariantProps,
    internalArgProps: PlasmicStyleToggleButtonGroup__ArgProps,
  }
);

export default PlasmicStyleToggleButtonGroup;
/* prettier-ignore-end */
