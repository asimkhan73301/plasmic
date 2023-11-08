// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: 9I47RGPv62

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
import LeftPaneHeader from "../../components/studio/LeftPaneHeader"; // plasmic-import: XLa52PvduIy/component
import TextWithInfo from "../../../../TextWithInfo"; // plasmic-import: -EsDm7v023/component
import StyleSelect from "../../components/style-controls/StyleSelect"; // plasmic-import: E0bKgamUEin/component
import HiliteTabs from "../../components/widgets/HiliteTabs"; // plasmic-import: a0-WHzk-U8/component
import DefaultStylesPanel from "../../components/sidebar/DefaultStylesPanel"; // plasmic-import: nmt_YiclQJk/component
import ThemeLayoutPanel from "../../components/sidebar/ThemeLayoutPanel"; // plasmic-import: hudLjkQJbU/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicLeftThemesPanel.module.css"; // plasmic-import: 9I47RGPv62/css

createPlasmicElementProxy;

export type PlasmicLeftThemesPanel__VariantMembers = {
  noLayout: "noLayout";
  notOwnedBySite: "notOwnedBySite";
  tab: "styles" | "layout";
  noThemePicker: "noThemePicker";
};
export type PlasmicLeftThemesPanel__VariantsArgs = {
  noLayout?: SingleBooleanChoiceArg<"noLayout">;
  notOwnedBySite?: SingleBooleanChoiceArg<"notOwnedBySite">;
  tab?: SingleChoiceArg<"styles" | "layout">;
  noThemePicker?: SingleBooleanChoiceArg<"noThemePicker">;
};
type VariantPropType = keyof PlasmicLeftThemesPanel__VariantsArgs;
export const PlasmicLeftThemesPanel__VariantProps = new Array<VariantPropType>(
  "noLayout",
  "notOwnedBySite",
  "tab",
  "noThemePicker"
);

export type PlasmicLeftThemesPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftThemesPanel__ArgsType;
export const PlasmicLeftThemesPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftThemesPanel__OverridesType = {
  root?: p.Flex<"div">;
  themeHeader?: p.Flex<typeof LeftPaneHeader>;
  textWithInfo?: p.Flex<typeof TextWithInfo>;
  freeBox?: p.Flex<"div">;
  themeSelector?: p.Flex<typeof StyleSelect>;
  hiliteTabs?: p.Flex<typeof HiliteTabs>;
  defaultStylesPanel?: p.Flex<typeof DefaultStylesPanel>;
  themeLayoutPanel?: p.Flex<typeof ThemeLayoutPanel>;
};

export interface DefaultLeftThemesPanelProps {
  noLayout?: SingleBooleanChoiceArg<"noLayout">;
  notOwnedBySite?: SingleBooleanChoiceArg<"notOwnedBySite">;
  tab?: SingleChoiceArg<"styles" | "layout">;
  noThemePicker?: SingleBooleanChoiceArg<"noThemePicker">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLeftThemesPanel__RenderFunc(props: {
  variants: PlasmicLeftThemesPanel__VariantsArgs;
  args: PlasmicLeftThemesPanel__ArgsType;
  overrides: PlasmicLeftThemesPanel__OverridesType;
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
        path: "notOwnedBySite",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.notOwnedBySite,
      },
      {
        path: "hiliteTabs.selectedTabKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          hasVariant($state, "noLayout", "noLayout")
            ? ("styles" as const)
            : $state.tab,
      },
      {
        path: "themeSelector.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
      },
      {
        path: "tab",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          "styles" ?? $props.tab,
      },
      {
        path: "noThemePicker",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noThemePicker,
      },
      {
        path: "noLayout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLayout,
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
        {
          [sty.rootnoLayout]: hasVariant($state, "noLayout", "noLayout"),
          [sty.rootnotOwnedBySite]: hasVariant(
            $state,
            "notOwnedBySite",
            "notOwnedBySite"
          ),
          [sty.roottab_layout]: hasVariant($state, "tab", "layout"),
          [sty.roottab_styles]: hasVariant($state, "tab", "styles"),
        }
      )}
    >
      <LeftPaneHeader
        data-plasmic-name={"themeHeader"}
        data-plasmic-override={overrides.themeHeader}
        actions={
          true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rgfqo
                )}
              >
                {"Active theme"}
              </div>
              <StyleSelect
                data-plasmic-name={"themeSelector"}
                data-plasmic-override={overrides.themeSelector}
                className={classNames("__wab_instance", sty.themeSelector, {
                  [sty.themeSelectornoLayout]: hasVariant(
                    $state,
                    "noLayout",
                    "noLayout"
                  ),
                  [sty.themeSelectortab_styles]: hasVariant(
                    $state,
                    "tab",
                    "styles"
                  ),
                })}
                onChange={(...eventArgs) => {
                  p.generateStateOnChangeProp($state, [
                    "themeSelector",
                    "value",
                  ])(eventArgs[0]);
                }}
                options={[
                  { value: "option1", label: "Option 1" },
                  { value: "option2", label: "Option 2" },
                ]}
                value={p.generateStateValueProp($state, [
                  "themeSelector",
                  "value",
                ])}
                valueSetState={"isSet" as const}
              />
            </p.Stack>
          ) : null
        }
        className={classNames("__wab_instance", sty.themeHeader, {
          [sty.themeHeadernoThemePicker]: hasVariant(
            $state,
            "noThemePicker",
            "noThemePicker"
          ),
        })}
        compactTitle={
          <TextWithInfo
            data-plasmic-name={"textWithInfo"}
            data-plasmic-override={overrides.textWithInfo}
            className={classNames("__wab_instance", sty.textWithInfo)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__sLPev
              )}
            >
              {"Theme"}
            </div>
          </TextWithInfo>
        }
        description={
          "Define the default styles and layout settings across this project."
        }
        noActions={
          hasVariant($state, "noThemePicker", "noThemePicker")
            ? true
            : undefined
        }
        noDescription={true}
        title={"Theme"}
      />

      {(
        hasVariant($state, "notOwnedBySite", "notOwnedBySite")
          ? false
          : hasVariant($state, "noLayout", "noLayout")
          ? true
          : true
      ) ? (
        <HiliteTabs
          data-plasmic-name={"hiliteTabs"}
          data-plasmic-override={overrides.hiliteTabs}
          className={classNames("__wab_instance", sty.hiliteTabs, {
            [sty.hiliteTabsnoLayout]: hasVariant(
              $state,
              "noLayout",
              "noLayout"
            ),
            [sty.hiliteTabsnotOwnedBySite]: hasVariant(
              $state,
              "notOwnedBySite",
              "notOwnedBySite"
            ),
            [sty.hiliteTabstab_layout]: hasVariant($state, "tab", "layout"),
            [sty.hiliteTabstab_styles]: hasVariant($state, "tab", "styles"),
          })}
          onSelectedTabKeyChange={async (...eventArgs: any) => {
            p.generateStateOnChangeProp($state, [
              "hiliteTabs",
              "selectedTabKey",
            ]).apply(null, eventArgs);
            (async (val) => {
              const $steps = {};
              $steps["setTab"] = true
                ? (() => {
                    const actionArgs = {
                      variable: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariable",
                          interactionUuid: "SPxG5rgIX",
                          componentUuid: "9I47RGPv62",
                          argName: "variable",
                        },
                        () => ({
                          objRoot: $state,
                          variablePath: ["tab"],
                        })
                      ),
                      operation: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariable",
                          interactionUuid: "SPxG5rgIX",
                          componentUuid: "9I47RGPv62",
                          argName: "operation",
                        },
                        () => 0
                      ),
                      value: __wrapUserFunction(
                        {
                          type: "InteractionArgLoc",
                          actionName: "updateVariable",
                          interactionUuid: "SPxG5rgIX",
                          componentUuid: "9I47RGPv62",
                          argName: "value",
                        },
                        () => $state.hiliteTabs.selectedTabKey
                      ),
                    };
                    return __wrapUserFunction(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariable",
                        interactionUuid: "SPxG5rgIX",
                        componentUuid: "9I47RGPv62",
                      },
                      () =>
                        (({ variable, value, startIndex, deleteCount }) => {
                          if (!variable) {
                            return;
                          }
                          const { objRoot, variablePath } = variable;

                          p.set(objRoot, variablePath, value);
                          return value;
                        })?.apply(null, [actionArgs]),
                      actionArgs
                    );
                  })()
                : undefined;
              if (
                typeof $steps["setTab"] === "object" &&
                typeof $steps["setTab"].then === "function"
              ) {
                $steps["setTab"] = await __wrapUserPromise(
                  {
                    type: "InteractionLoc",
                    actionName: "updateVariable",
                    interactionUuid: "SPxG5rgIX",
                    componentUuid: "9I47RGPv62",
                  },
                  $steps["setTab"]
                );
              }
            }).apply(null, eventArgs);
          }}
          selectedTabKey={p.generateStateValueProp($state, [
            "hiliteTabs",
            "selectedTabKey",
          ])}
          tabs={[
            { tabKey: "styles", content: "Default styles" },
            { tabKey: "layout", content: "Layout" },
          ]}
        />
      ) : null}
      {(
        hasVariant($state, "tab", "styles")
          ? true
          : hasVariant($state, "notOwnedBySite", "notOwnedBySite")
          ? false
          : hasVariant($state, "noLayout", "noLayout")
          ? true
          : true
      ) ? (
        <DefaultStylesPanel
          data-plasmic-name={"defaultStylesPanel"}
          data-plasmic-override={overrides.defaultStylesPanel}
          className={classNames("__wab_instance", sty.defaultStylesPanel, {
            [sty.defaultStylesPanelnoLayout]: hasVariant(
              $state,
              "noLayout",
              "noLayout"
            ),
            [sty.defaultStylesPanelnotOwnedBySite]: hasVariant(
              $state,
              "notOwnedBySite",
              "notOwnedBySite"
            ),
            [sty.defaultStylesPaneltab_layout]: hasVariant(
              $state,
              "tab",
              "layout"
            ),
            [sty.defaultStylesPaneltab_styles]: hasVariant(
              $state,
              "tab",
              "styles"
            ),
          })}
        />
      ) : null}
      {(
        hasVariant($state, "tab", "layout")
          ? true
          : hasVariant($state, "notOwnedBySite", "notOwnedBySite")
          ? false
          : true
      ) ? (
        <ThemeLayoutPanel
          data-plasmic-name={"themeLayoutPanel"}
          data-plasmic-override={overrides.themeLayoutPanel}
          className={classNames("__wab_instance", sty.themeLayoutPanel, {
            [sty.themeLayoutPanelnotOwnedBySite]: hasVariant(
              $state,
              "notOwnedBySite",
              "notOwnedBySite"
            ),
            [sty.themeLayoutPaneltab_layout]: hasVariant(
              $state,
              "tab",
              "layout"
            ),
          })}
        />
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "themeHeader",
    "textWithInfo",
    "freeBox",
    "themeSelector",
    "hiliteTabs",
    "defaultStylesPanel",
    "themeLayoutPanel",
  ],
  themeHeader: ["themeHeader", "textWithInfo", "freeBox", "themeSelector"],
  textWithInfo: ["textWithInfo"],
  freeBox: ["freeBox", "themeSelector"],
  themeSelector: ["themeSelector"],
  hiliteTabs: ["hiliteTabs"],
  defaultStylesPanel: ["defaultStylesPanel"],
  themeLayoutPanel: ["themeLayoutPanel"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  themeHeader: typeof LeftPaneHeader;
  textWithInfo: typeof TextWithInfo;
  freeBox: "div";
  themeSelector: typeof StyleSelect;
  hiliteTabs: typeof HiliteTabs;
  defaultStylesPanel: typeof DefaultStylesPanel;
  themeLayoutPanel: typeof ThemeLayoutPanel;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftThemesPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftThemesPanel__VariantsArgs;
    args?: PlasmicLeftThemesPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftThemesPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftThemesPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftThemesPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftThemesPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftThemesPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftThemesPanel";
  } else {
    func.displayName = `PlasmicLeftThemesPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftThemesPanel = Object.assign(
  // Top-level PlasmicLeftThemesPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    themeHeader: makeNodeComponent("themeHeader"),
    textWithInfo: makeNodeComponent("textWithInfo"),
    freeBox: makeNodeComponent("freeBox"),
    themeSelector: makeNodeComponent("themeSelector"),
    hiliteTabs: makeNodeComponent("hiliteTabs"),
    defaultStylesPanel: makeNodeComponent("defaultStylesPanel"),
    themeLayoutPanel: makeNodeComponent("themeLayoutPanel"),

    // Metadata about props expected for PlasmicLeftThemesPanel
    internalVariantProps: PlasmicLeftThemesPanel__VariantProps,
    internalArgProps: PlasmicLeftThemesPanel__ArgProps,
  }
);

export default PlasmicLeftThemesPanel;
/* prettier-ignore-end */
