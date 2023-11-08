// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: -wdgoIf8HRT
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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
import Select__Overlay from "../../../../Select__Overlay"; // plasmic-import: qW9BsyKxXhk/component
import Select__Option from "../../../../Select__Option"; // plasmic-import: rOWcW5xKB81/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: -wdgoIf8HRT/css

import ChevronDownsvgIcon from "./icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: srpAq928YuG/icon
import ChevronUpsvgIcon from "./icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: NoAHJAGtsft/icon

export type PlasmicSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  color:
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear";
};

export type PlasmicSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
};

type VariantPropType = keyof PlasmicSelect__VariantsArgs;
export const PlasmicSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export type PlasmicSelect__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: string;
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

type ArgPropType = keyof PlasmicSelect__ArgsType;
export const PlasmicSelect__ArgProps = new Array<ArgPropType>(
  "selectedContent",
  "placeholder",
  "children",
  "value",
  "name",
  "aria-label",
  "aria-labelledby"
);

export type PlasmicSelect__OverridesType = {
  root?: p.Flex<"div">;
  trigger?: p.Flex<"button">;
  contentContainer?: p.Flex<"div">;
  dropdownIcon?: p.Flex<"svg">;
  overlay?: p.Flex<typeof Select__Overlay>;
  optionsContainer?: p.Flex<"div">;
};

export interface DefaultSelectProps extends pp.BaseSelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
}

const PlasmicSelectContext =
  React.createContext<
    | undefined
    | { variants: PlasmicSelect__VariantsArgs; args: PlasmicSelect__ArgsType }
  >(undefined);

function PlasmicSelect__RenderFunc(props: {
  variants: PlasmicSelect__VariantsArgs;
  args: PlasmicSelect__ArgsType;
  overrides: PlasmicSelect__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false,
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  };

  return (
    <PlasmicSelectContext.Provider value={{ variants, args }}>
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_tokens,
          plasmic_plasmic_kit_design_system_css.plasmic_tokens,
          plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
          sty.root,
          {
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootcolor_clear]: hasVariant(variants, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant(variants, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant(variants, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant(
              variants,
              "color",
              "softGreen"
            ),
            [sty.rootcolor_softOrange]: hasVariant(
              variants,
              "color",
              "softOrange"
            ),
            [sty.rootcolor_softPink]: hasVariant(variants, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              variants,
              "color",
              "softPurple"
            ),
            [sty.rootcolor_softRed]: hasVariant(variants, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              variants,
              "color",
              "softYellow"
            ),
            [sty.rootisOpen]: hasVariant(variants, "isOpen", "isOpen"),
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggercolor_clear]: hasVariant(variants, "color", "clear"),
              [sty.triggercolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.triggercolor_softCyan]: hasVariant(
                variants,
                "color",
                "softCyan"
              ),
              [sty.triggercolor_softGray]: hasVariant(
                variants,
                "color",
                "softGray"
              ),
              [sty.triggercolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.triggercolor_softOrange]: hasVariant(
                variants,
                "color",
                "softOrange"
              ),
              [sty.triggercolor_softPink]: hasVariant(
                variants,
                "color",
                "softPink"
              ),
              [sty.triggercolor_softPurple]: hasVariant(
                variants,
                "color",
                "softPurple"
              ),
              [sty.triggercolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.triggercolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.triggerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant(variants, "isOpen", "isOpen"),
            }
          )}
          disabled={
            hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
          }
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.contentContainerisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                variants,
                "showPlaceholder",
                "showPlaceholder"
              ),
            })}
          >
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      variants,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      variants,
                      "color",
                      "softGreen"
                    ),
                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      variants,
                      "color",
                      "softOrange"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      variants,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      variants,
                      "color",
                      "softPurple"
                    ),
                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      variants,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      variants,
                      "color",
                      "softYellow"
                    ),
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      variants,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      variants,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                  }),
                })
              : null}
            {(
              hasVariant(variants, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Select…",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      variants,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholdercolor_softCyan_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softCyan"),
                    [sty.slotTargetPlaceholdercolor_softPink_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softPink"),
                    [sty.slotTargetPlaceholdercolor_softPurple_showPlaceholder]:
                      hasVariant(variants, "color", "softPurple") &&
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ),
                    [sty.slotTargetPlaceholdercolor_softYellow_showPlaceholder]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softYellow"),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      variants,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softGreen]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softGreen"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                      hasVariant(
                        variants,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant(variants, "color", "softRed"),
                  }),
                })
              : null}
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant(variants, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              [sty.dropdownIconcolor_softCyan]: hasVariant(
                variants,
                "color",
                "softCyan"
              ),
              [sty.dropdownIconcolor_softGray]: hasVariant(
                variants,
                "color",
                "softGray"
              ),
              [sty.dropdownIconcolor_softGreen]: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              [sty.dropdownIconcolor_softOrange]: hasVariant(
                variants,
                "color",
                "softOrange"
              ),
              [sty.dropdownIconcolor_softPink]: hasVariant(
                variants,
                "color",
                "softPink"
              ),
              [sty.dropdownIconcolor_softPurple]: hasVariant(
                variants,
                "color",
                "softPurple"
              ),
              [sty.dropdownIconcolor_softRed]: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              [sty.dropdownIconcolor_softYellow]: hasVariant(
                variants,
                "color",
                "softYellow"
              ),
              [sty.dropdownIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant(
                variants,
                "isOpen",
                "isOpen"
              ),
            })}
            role={"img"}
          />
        </button>

        {(hasVariant(variants, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant(variants, "isOpen", "isOpen"),
            })}
            relativePlacement={"bottom" as const}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  variants,
                  "isOpen",
                  "isOpen"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Select__Option
                      className={classNames("__wab_instance", sty.option__ozD8)}
                      value={"value1" as const}
                    >
                      {"Option 1"}
                    </Select__Option>

                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__uinJx
                      )}
                      value={"value2" as const}
                    >
                      {"Option 2"}
                    </Select__Option>
                  </React.Fragment>
                ),
                value: args.children,
              })}
            </div>
          </Select__Overlay>
        ) : null}
      </div>
    </PlasmicSelectContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectProps>(
  props: P,
  ref: pp.SelectRef
) {
  if (!("children" in props)) {
    props = {
      ...props,
      children: (
        <React.Fragment>
          <Select__Option
            className={classNames("__wab_instance", sty.option__ozD8)}
            value={"value1" as const}
          >
            {"Option 1"}
          </Select__Option>

          <Select__Option
            className={classNames("__wab_instance", sty.option__uinJx)}
            value={"value2" as const}
          >
            {"Option 2"}
          </Select__Option>
        </React.Fragment>
      ),
    };
  }

  return pp.useSelect(
    PlasmicSelect,
    props,
    {
      isOpenVariant: { group: "isOpen", variant: "isOpen" },
      placeholderVariant: {
        group: "showPlaceholder",
        variant: "showPlaceholder",
      },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      triggerContentSlot: "selectedContent",
      optionsSlot: "children",
      placeholderSlot: "placeholder",
      root: "root",
      trigger: "trigger",
      overlay: "overlay",
      optionsContainer: "optionsContainer",
    },

    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer",
  ],
  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  trigger: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
  overlay: typeof Select__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelect__VariantsArgs;
    args?: PlasmicSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSelect__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSelect__ArgProps,
      internalVariantPropNames: PlasmicSelect__VariantProps,
    });

    return PlasmicSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelect";
  } else {
    func.displayName = `PlasmicSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicSelect = Object.assign(
  // Top-level PlasmicSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicSelect
    internalVariantProps: PlasmicSelect__VariantProps,
    internalArgProps: PlasmicSelect__ArgProps,

    // Context for sub components
    Context: PlasmicSelectContext,

    useBehavior,
  }
);

export default PlasmicSelect;
/* prettier-ignore-end */
