// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: DEllwXrn27Q

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
import EditableResourceName from "../../components/EditableResourceName"; // plasmic-import: UttGK3xVrb/component
import PanelDivider from "../../components/PanelDivider"; // plasmic-import: 0NaTcyuAGK2dN/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import CopyButton from "../../components/CopyButton"; // plasmic-import: u7TII072Seb/component
import MenuButton from "../../components/widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicCmsListItem.module.css"; // plasmic-import: DEllwXrn27Q/css

import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicCmsListItem__VariantMembers = {
  explorations: "idOnHover";
  showWorkspace: "showWorkspace";
  isFirstItem: "isFirstItem";
};
export type PlasmicCmsListItem__VariantsArgs = {
  explorations?: MultiChoiceArg<"idOnHover">;
  showWorkspace?: SingleBooleanChoiceArg<"showWorkspace">;
  isFirstItem?: SingleBooleanChoiceArg<"isFirstItem">;
};
type VariantPropType = keyof PlasmicCmsListItem__VariantsArgs;
export const PlasmicCmsListItem__VariantProps = new Array<VariantPropType>(
  "explorations",
  "showWorkspace",
  "isFirstItem"
);

export type PlasmicCmsListItem__ArgsType = {
  timestamp?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCmsListItem__ArgsType;
export const PlasmicCmsListItem__ArgProps = new Array<ArgPropType>("timestamp");

export type PlasmicCmsListItem__OverridesType = {
  root?: p.Flex<"a">;
  left?: p.Flex<"div">;
  editableName?: p.Flex<typeof EditableResourceName>;
  panelDivider?: p.Flex<typeof PanelDivider>;
  workspace?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
  projectIdCopyButton?: p.Flex<typeof CopyButton>;
  right?: p.Flex<"div">;
  menuButton?: p.Flex<typeof MenuButton>;
  updatedJustNow?: p.Flex<"div">;
};

export interface DefaultCmsListItemProps {
  timestamp?: React.ReactNode;
  explorations?: MultiChoiceArg<"idOnHover">;
  showWorkspace?: SingleBooleanChoiceArg<"showWorkspace">;
  isFirstItem?: SingleBooleanChoiceArg<"isFirstItem">;
  className?: string;
}

const $$ = {};

function PlasmicCmsListItem__RenderFunc(props: {
  variants: PlasmicCmsListItem__VariantsArgs;
  args: PlasmicCmsListItem__ArgsType;
  overrides: PlasmicCmsListItem__OverridesType;
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
        path: "explorations",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.explorations,
      },
      {
        path: "showWorkspace",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showWorkspace,
      },
      {
        path: "isFirstItem",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isFirstItem,
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

  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    "useFocusVisible",
    {
      isTextInput: false,
    }
  );
  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    });
  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    focusVisible_root: isRootFocusVisible,
    focusVisibleWithin_root: isRootFocusVisibleWithin,
    hover_root: isRootHover,
  };

  return (
    <p.Stack
      as={"a"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.root___focusVisible]: triggers.focusVisible_root,
          [sty.rootexplorations_idOnHover]: hasVariant(
            $state,
            "explorations",
            "idOnHover"
          ),
          [sty.rootisFirstItem]: hasVariant(
            $state,
            "isFirstItem",
            "isFirstItem"
          ),
          [sty.rootshowWorkspace]: hasVariant(
            $state,
            "showWorkspace",
            "showWorkspace"
          ),
        }
      )}
      href={"#"}
      data-plasmic-trigger-props={[
        triggerRootFocusVisibleProps,
        triggerRootFocusVisibleWithinProps,
        triggerRootHoverProps,
      ]}
    >
      <div
        data-plasmic-name={"left"}
        data-plasmic-override={overrides.left}
        className={classNames(projectcss.all, sty.left, {
          [sty.left___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.left___focusVisible]: triggers.focusVisible_root,
          [sty.leftexplorations_idOnHover]: hasVariant(
            $state,
            "explorations",
            "idOnHover"
          ),
          [sty.leftshowWorkspace]: hasVariant(
            $state,
            "showWorkspace",
            "showWorkspace"
          ),
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__tl6E4, {
            [sty.freeBoxshowWorkspace__tl6E4NHlC]: hasVariant(
              $state,
              "showWorkspace",
              "showWorkspace"
            ),
          })}
        >
          <EditableResourceName
            data-plasmic-name={"editableName"}
            data-plasmic-override={overrides.editableName}
            cantEdit={true}
            className={classNames("__wab_instance", sty.editableName, {
              [sty.editableNameshowWorkspace]: hasVariant(
                $state,
                "showWorkspace",
                "showWorkspace"
              ),
            })}
            name={"Untitled"}
            state={triggers.hover_root ? "hover" : undefined}
          />

          <div
            className={classNames(projectcss.all, sty.freeBox__l7Uld, {
              [sty.freeBoxshowWorkspace__l7UldNHlC]: hasVariant(
                $state,
                "showWorkspace",
                "showWorkspace"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "updated 1h ago",
              value: args.timestamp,
              className: classNames(sty.slotTargetTimestamp, {
                [sty.slotTargetTimestamp___focusVisibleWithin]:
                  triggers.focusVisibleWithin_root,
                [sty.slotTargetTimestamp___focusVisible]:
                  triggers.focusVisible_root,
                [sty.slotTargetTimestampexplorations_idOnHover]: hasVariant(
                  $state,
                  "explorations",
                  "idOnHover"
                ),
                [sty.slotTargetTimestampshowWorkspace]: hasVariant(
                  $state,
                  "showWorkspace",
                  "showWorkspace"
                ),
              }),
            })}
            {(
              hasVariant($state, "explorations", "idOnHover") &&
              triggers.hover_root
                ? true
                : hasVariant($state, "showWorkspace", "showWorkspace")
                ? true
                : false
            ) ? (
              <PanelDivider
                data-plasmic-name={"panelDivider"}
                data-plasmic-override={overrides.panelDivider}
                className={classNames("__wab_instance", sty.panelDivider, {
                  [sty.panelDividerexplorations_idOnHover]: hasVariant(
                    $state,
                    "explorations",
                    "idOnHover"
                  ),
                  [sty.panelDividershowWorkspace]: hasVariant(
                    $state,
                    "showWorkspace",
                    "showWorkspace"
                  ),
                })}
              />
            ) : null}
            {(
              hasVariant($state, "showWorkspace", "showWorkspace")
                ? true
                : false
            ) ? (
              <Button
                data-plasmic-name={"workspace"}
                data-plasmic-override={overrides.workspace}
                className={classNames("__wab_instance", sty.workspace, {
                  [sty.workspaceshowWorkspace]: hasVariant(
                    $state,
                    "showWorkspace",
                    "showWorkspace"
                  ),
                })}
                endIcon={
                  <ChevronDownsvgIcon
                    className={classNames(projectcss.all, sty.svg__oN43J)}
                    role={"img"}
                  />
                }
                startIcon={
                  <ArrowRightsvgIcon
                    className={classNames(projectcss.all, sty.svg__qLwj0)}
                    role={"img"}
                  />
                }
                type={
                  hasVariant($state, "showWorkspace", "showWorkspace")
                    ? ["link"]
                    : undefined
                }
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"PlasmicKit"}
                </div>
              </Button>
            ) : null}
            {(
              hasVariant($state, "explorations", "idOnHover") &&
              triggers.hover_root
                ? true
                : false
            ) ? (
              <CopyButton
                data-plasmic-name={"projectIdCopyButton"}
                data-plasmic-override={overrides.projectIdCopyButton}
                className={classNames(
                  "__wab_instance",
                  sty.projectIdCopyButton,
                  {
                    [sty.projectIdCopyButtonexplorations_idOnHover]: hasVariant(
                      $state,
                      "explorations",
                      "idOnHover"
                    ),
                  }
                )}
                version={"ID: ooL7EhXDmFQWnW9sxtchhE"}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div
        data-plasmic-name={"right"}
        data-plasmic-override={overrides.right}
        className={classNames(projectcss.all, sty.right)}
      >
        <MenuButton
          data-plasmic-name={"menuButton"}
          data-plasmic-override={overrides.menuButton}
          className={classNames("__wab_instance", sty.menuButton, {
            [sty.menuButtonexplorations_idOnHover]: hasVariant(
              $state,
              "explorations",
              "idOnHover"
            ),
            [sty.menuButtonshowWorkspace]: hasVariant(
              $state,
              "showWorkspace",
              "showWorkspace"
            ),
          })}
          hoverText={"More…"}
          stepUp={true}
        />
      </div>
      <div
        data-plasmic-name={"updatedJustNow"}
        data-plasmic-override={overrides.updatedJustNow}
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.updatedJustNow
        )}
      >
        {"updated just now"}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "left",
    "editableName",
    "panelDivider",
    "workspace",
    "text",
    "projectIdCopyButton",
    "right",
    "menuButton",
    "updatedJustNow",
  ],
  left: [
    "left",
    "editableName",
    "panelDivider",
    "workspace",
    "text",
    "projectIdCopyButton",
  ],
  editableName: ["editableName"],
  panelDivider: ["panelDivider"],
  workspace: ["workspace", "text"],
  text: ["text"],
  projectIdCopyButton: ["projectIdCopyButton"],
  right: ["right", "menuButton"],
  menuButton: ["menuButton"],
  updatedJustNow: ["updatedJustNow"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  left: "div";
  editableName: typeof EditableResourceName;
  panelDivider: typeof PanelDivider;
  workspace: typeof Button;
  text: "div";
  projectIdCopyButton: typeof CopyButton;
  right: "div";
  menuButton: typeof MenuButton;
  updatedJustNow: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCmsListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCmsListItem__VariantsArgs;
    args?: PlasmicCmsListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCmsListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCmsListItem__ArgsType,
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
          internalArgPropNames: PlasmicCmsListItem__ArgProps,
          internalVariantPropNames: PlasmicCmsListItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCmsListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCmsListItem";
  } else {
    func.displayName = `PlasmicCmsListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicCmsListItem = Object.assign(
  // Top-level PlasmicCmsListItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    left: makeNodeComponent("left"),
    editableName: makeNodeComponent("editableName"),
    panelDivider: makeNodeComponent("panelDivider"),
    workspace: makeNodeComponent("workspace"),
    text: makeNodeComponent("text"),
    projectIdCopyButton: makeNodeComponent("projectIdCopyButton"),
    right: makeNodeComponent("right"),
    menuButton: makeNodeComponent("menuButton"),
    updatedJustNow: makeNodeComponent("updatedJustNow"),

    // Metadata about props expected for PlasmicCmsListItem
    internalVariantProps: PlasmicCmsListItem__VariantProps,
    internalArgProps: PlasmicCmsListItem__ArgProps,
  }
);

export default PlasmicCmsListItem;
/* prettier-ignore-end */
