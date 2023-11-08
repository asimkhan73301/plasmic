// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6CrqkTcB6gSAHoA8c8zpNz
// Component: MAl3yYpW3c

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

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_top_bar.module.css"; // plasmic-import: 6CrqkTcB6gSAHoA8c8zpNz/projectcss
import sty from "./PlasmicTitleEditable.module.css"; // plasmic-import: MAl3yYpW3c/css

import EditsvgIcon from "../q_4_icons/icons/PlasmicIcon__Editsvg"; // plasmic-import: _Qa2gdunG/icon

export type PlasmicTitleEditable__VariantMembers = {
  disabled: "disabled";
};

export type PlasmicTitleEditable__VariantsArgs = {
  disabled?: SingleBooleanChoiceArg<"disabled">;
};

type VariantPropType = keyof PlasmicTitleEditable__VariantsArgs;
export const PlasmicTitleEditable__VariantProps = new Array<VariantPropType>(
  "disabled"
);

export type PlasmicTitleEditable__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
};

type ArgPropType = keyof PlasmicTitleEditable__ArgsType;
export const PlasmicTitleEditable__ArgProps = new Array<ArgPropType>(
  "children",
  "icon"
);

export type PlasmicTitleEditable__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultTitleEditableProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTitleEditable__RenderFunc(props: {
  variants: PlasmicTitleEditable__VariantsArgs;
  args: PlasmicTitleEditable__ArgsType;
  overrides: PlasmicTitleEditable__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled,
      },
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
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
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootdisabled]: hasVariant($state, "disabled", "disabled") }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      {p.renderPlasmicSlot({
        defaultContents: "Enter some text",
        value: args.children,
      })}

      {(triggers.hover_root ? true : false)
        ? p.renderPlasmicSlot({
            defaultContents: (
              <EditsvgIcon
                className={classNames(projectcss.all, sty.svg__uFjIs)}
                role={"img"}
              />
            ),

            value: args.icon,
          })
        : null}
    </div>
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
  PlasmicTitleEditable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicTitleEditable__VariantsArgs;
  args?: PlasmicTitleEditable__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicTitleEditable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicTitleEditable__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicTitleEditable__ArgProps,
          internalVariantPropNames: PlasmicTitleEditable__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTitleEditable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTitleEditable";
  } else {
    func.displayName = `PlasmicTitleEditable.${nodeName}`;
  }
  return func;
}

export const PlasmicTitleEditable = Object.assign(
  // Top-level PlasmicTitleEditable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicTitleEditable
    internalVariantProps: PlasmicTitleEditable__VariantProps,
    internalArgProps: PlasmicTitleEditable__ArgProps,
  }
);

export default PlasmicTitleEditable;
/* prettier-ignore-end */
