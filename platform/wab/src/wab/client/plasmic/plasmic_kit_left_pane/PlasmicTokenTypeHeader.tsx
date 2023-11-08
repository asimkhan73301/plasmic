// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: eMjSZ8G7mG

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
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import ExpandButton from "../../components/widgets/ExpandButton"; // plasmic-import: JJhv0MV9DH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicTokenTypeHeader.module.css"; // plasmic-import: eMjSZ8G7mG/css

import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicTokenTypeHeader__VariantMembers = {
  isExpanded: "isExpanded";
};
export type PlasmicTokenTypeHeader__VariantsArgs = {
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
};
type VariantPropType = keyof PlasmicTokenTypeHeader__VariantsArgs;
export const PlasmicTokenTypeHeader__VariantProps = new Array<VariantPropType>(
  "isExpanded"
);

export type PlasmicTokenTypeHeader__ArgsType = {
  tokenType?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTokenTypeHeader__ArgsType;
export const PlasmicTokenTypeHeader__ArgProps = new Array<ArgPropType>(
  "tokenType"
);

export type PlasmicTokenTypeHeader__OverridesType = {
  root?: p.Flex<"div">;
  addButton?: p.Flex<typeof IconButton>;
  expandButton?: p.Flex<typeof ExpandButton>;
};

export interface DefaultTokenTypeHeaderProps {
  tokenType?: React.ReactNode;
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTokenTypeHeader__RenderFunc(props: {
  variants: PlasmicTokenTypeHeader__VariantsArgs;
  args: PlasmicTokenTypeHeader__ArgsType;
  overrides: PlasmicTokenTypeHeader__OverridesType;
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
        path: "isExpanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isExpanded,
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
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        { [sty.rootisExpanded]: hasVariant($state, "isExpanded", "isExpanded") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___2Aimk, {
          [sty.freeBoxisExpanded___2AimkaTp]: hasVariant(
            $state,
            "isExpanded",
            "isExpanded"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Colors",
          value: args.tokenType,
          className: classNames(sty.slotTargetTokenType),
        })}
      </div>
      {true ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___36Lfh, {
            [sty.freeBoxisExpanded___36LfHaTp]: hasVariant(
              $state,
              "isExpanded",
              "isExpanded"
            ),
          })}
        >
          {(hasVariant($state, "isExpanded", "isExpanded") ? true : true) ? (
            <IconButton
              data-plasmic-name={"addButton"}
              data-plasmic-override={overrides.addButton}
              children2={
                <ChevronDownsvgIcon
                  className={classNames(projectcss.all, sty.svg__jqg1)}
                  role={"img"}
                />
              }
              className={classNames("__wab_instance", sty.addButton, {
                [sty.addButtonisExpanded]: hasVariant(
                  $state,
                  "isExpanded",
                  "isExpanded"
                ),
              })}
              size={"small" as const}
            >
              <PlussvgIcon
                className={classNames(projectcss.all, sty.svg__ihGm1)}
                role={"img"}
              />
            </IconButton>
          ) : null}
          <ExpandButton
            data-plasmic-name={"expandButton"}
            data-plasmic-override={overrides.expandButton}
            className={classNames("__wab_instance", sty.expandButton, {
              [sty.expandButtonisExpanded]: hasVariant(
                $state,
                "isExpanded",
                "isExpanded"
              ),
            })}
            isExpanded={
              hasVariant($state, "isExpanded", "isExpanded") ? true : undefined
            }
            size={"small" as const}
          />
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "addButton", "expandButton"],
  addButton: ["addButton"],
  expandButton: ["expandButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  addButton: typeof IconButton;
  expandButton: typeof ExpandButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTokenTypeHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTokenTypeHeader__VariantsArgs;
    args?: PlasmicTokenTypeHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTokenTypeHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTokenTypeHeader__ArgsType,
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
          internalArgPropNames: PlasmicTokenTypeHeader__ArgProps,
          internalVariantPropNames: PlasmicTokenTypeHeader__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTokenTypeHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTokenTypeHeader";
  } else {
    func.displayName = `PlasmicTokenTypeHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTokenTypeHeader = Object.assign(
  // Top-level PlasmicTokenTypeHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    addButton: makeNodeComponent("addButton"),
    expandButton: makeNodeComponent("expandButton"),

    // Metadata about props expected for PlasmicTokenTypeHeader
    internalVariantProps: PlasmicTokenTypeHeader__VariantProps,
    internalArgProps: PlasmicTokenTypeHeader__ArgProps,
  }
);

export default PlasmicTokenTypeHeader;
/* prettier-ignore-end */
