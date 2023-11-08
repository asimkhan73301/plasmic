// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tXkSR39sgCDWSitZxC5xFV
// Component: j_4IQyOWK2b

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

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
import Select__Overlay from "../../components/widgets/Select__Overlay"; // plasmic-import: j2qDLcsq5qB/component
import Select__Option from "../../components/widgets/Select__Option"; // plasmic-import: rr-LWdMni2G/component
import Select__OptionGroup from "../../components/widgets/Select__OptionGroup"; // plasmic-import: _qMm1mtrqOi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicSelect.module.css"; // plasmic-import: j_4IQyOWK2b/css

import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ChevronUpsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronUpsvg"; // plasmic-import: i9D87DzsX/icon

createPlasmicElementProxy;

export type PlasmicSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  type: "hugging" | "seamless" | "bordered" | "wide" | "medium";
  hasIcon: "hasIcon";
  size: "small" | "tiny";
  font: "bold";
};
export type PlasmicSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  type?: SingleChoiceArg<
    "hugging" | "seamless" | "bordered" | "wide" | "medium"
  >;
  hasIcon?: SingleBooleanChoiceArg<"hasIcon">;
  size?: SingleChoiceArg<"small" | "tiny">;
  font?: MultiChoiceArg<"bold">;
};
type VariantPropType = keyof PlasmicSelect__VariantsArgs;
export const PlasmicSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "type",
  "hasIcon",
  "size",
  "font"
);

export type PlasmicSelect__ArgsType = {
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
  value?: "Dynamic options";
  name?: string;
  icon?: React.ReactNode;
  options?: any;
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
  "icon",
  "options",
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
  icon?: React.ReactNode;
  options?: any;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  type?: SingleChoiceArg<
    "hugging" | "seamless" | "bordered" | "wide" | "medium"
  >;
  hasIcon?: SingleBooleanChoiceArg<"hasIcon">;
  size?: SingleChoiceArg<"small" | "tiny">;
  font?: MultiChoiceArg<"bold">;
}

const PlasmicSelectContext = React.createContext<
  | undefined
  | { variants: PlasmicSelect__VariantsArgs; args: PlasmicSelect__ArgsType }
>(undefined);

const $$ = {};

function PlasmicSelect__RenderFunc(props: {
  variants: PlasmicSelect__VariantsArgs;
  args: PlasmicSelect__ArgsType;
  overrides: PlasmicSelect__OverridesType;
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
        path: "showPlaceholder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showPlaceholder,
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen,
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled,
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "hasIcon",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hasIcon,
      },
      {
        path: "size",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.size,
      },
      {
        path: "font",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.font,
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
        onChangeProp: "onChange",
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
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
          sty.root,
          {
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.roothasIcon]: hasVariant($state, "hasIcon", "hasIcon"),
            [sty.roothasIcon_isOpen]:
              hasVariant($state, "isOpen", "isOpen") &&
              hasVariant($state, "hasIcon", "hasIcon"),
            [sty.rootisDisabled]: hasVariant(
              $state,
              "isDisabled",
              "isDisabled"
            ),
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen"),
            [sty.rootshowPlaceholder]: hasVariant(
              $state,
              "showPlaceholder",
              "showPlaceholder"
            ),
            [sty.roottype_bordered]: hasVariant($state, "type", "bordered"),
            [sty.roottype_hugging]: hasVariant($state, "type", "hugging"),
            [sty.roottype_seamless]: hasVariant($state, "type", "seamless"),
            [sty.roottype_wide]: hasVariant($state, "type", "wide"),
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
              [sty.triggerfont_bold]: hasVariant($state, "font", "bold"),
              [sty.triggerhasIcon]: hasVariant($state, "hasIcon", "hasIcon"),
              [sty.triggerhasIcon_isOpen]:
                hasVariant($state, "isOpen", "isOpen") &&
                hasVariant($state, "hasIcon", "hasIcon"),
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.triggershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
              [sty.triggersize_small]: hasVariant($state, "size", "small"),
              [sty.triggersize_tiny]: hasVariant($state, "size", "tiny"),
              [sty.triggertype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.triggertype_hugging]: hasVariant($state, "type", "hugging"),
              [sty.triggertype_medium]: hasVariant($state, "type", "medium"),
              [sty.triggertype_seamless]: hasVariant(
                $state,
                "type",
                "seamless"
              ),
              [sty.triggertype_wide]: hasVariant($state, "type", "wide"),
            }
          )}
          ref={(ref) => {
            $refs["trigger"] = ref;
          }}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            hasGap={true}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainerhasIcon]: hasVariant(
                $state,
                "hasIcon",
                "hasIcon"
              ),
              [sty.contentContainerisOpen]: hasVariant(
                $state,
                "isOpen",
                "isOpen"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
            })}
          >
            {(hasVariant($state, "hasIcon", "hasIcon") ? true : false)
              ? p.renderPlasmicSlot({
                  defaultContents: (
                    <PlussvgIcon
                      className={classNames(projectcss.all, sty.svg__dx11)}
                      role={"img"}
                    />
                  ),

                  value: args.icon,
                  className: classNames(sty.slotTargetIcon, {
                    [sty.slotTargetIconhasIcon]: hasVariant(
                      $state,
                      "hasIcon",
                      "hasIcon"
                    ),
                    [sty.slotTargetIconhasIcon_isOpen]:
                      hasVariant($state, "isOpen", "isOpen") &&
                      hasVariant($state, "hasIcon", "hasIcon"),
                  }),
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentfont_bold]: hasVariant(
                      $state,
                      "font",
                      "bold"
                    ),
                    [sty.slotTargetSelectedContenthasIcon]: hasVariant(
                      $state,
                      "hasIcon",
                      "hasIcon"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetSelectedContenttype_hugging]: hasVariant(
                      $state,
                      "type",
                      "hugging"
                    ),
                    [sty.slotTargetSelectedContenttype_seamless]: hasVariant(
                      $state,
                      "type",
                      "seamless"
                    ),
                  }),
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : false
            )
              ? p.renderPlasmicSlot({
                  defaultContents: "Select...",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholderfont_bold]: hasVariant(
                      $state,
                      "font",
                      "bold"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                  }),
                })
              : null}
          </p.Stack>
          <p.PlasmicIcon
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant($state, "isOpen", "isOpen")
                ? ChevronUpsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen"),
              [sty.dropdownIconshowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              ),
              [sty.dropdownIcontype_bordered]: hasVariant(
                $state,
                "type",
                "bordered"
              ),
              [sty.dropdownIcontype_hugging]: hasVariant(
                $state,
                "type",
                "hugging"
              ),
              [sty.dropdownIcontype_medium]: hasVariant(
                $state,
                "type",
                "medium"
              ),
            })}
            role={"img"}
          />
        </button>
        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <Select__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen"),
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                ),
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__l4KlY
                      )}
                      value={"value1"}
                    >
                      {"Option 1"}
                    </Select__Option>
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__b77UA
                      )}
                      value={"value2"}
                    >
                      {"Option 2"}
                    </Select__Option>
                    <Select__OptionGroup
                      className={classNames(
                        "__wab_instance",
                        sty.optionGroup__seLyx
                      )}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option___8WxB9
                        )}
                        value={"option a"}
                      >
                        {"Option A"}
                      </Select__Option>
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option___9KRws
                        )}
                        value={"option b"}
                      >
                        {"Option B"}
                      </Select__Option>
                    </Select__OptionGroup>
                    <Select__OptionGroup
                      className={classNames(
                        "__wab_instance",
                        sty.optionGroup__xAYx9
                      )}
                      title={"Other Group"}
                    >
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option__dvKOl
                        )}
                        value={"option c"}
                      >
                        {"Option C"}
                      </Select__Option>
                      <Select__Option
                        className={classNames(
                          "__wab_instance",
                          sty.option___1IiGb
                        )}
                        value={"option d"}
                      >
                        {"Option D"}
                      </Select__Option>
                    </Select__OptionGroup>
                    <Select__Option
                      className={classNames(
                        "__wab_instance",
                        sty.option__gEUdG
                      )}
                      value={"value3"}
                    >
                      {"Option 3"}
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
  if (!("options" in props)) {
    if (!("children" in props)) {
      props = {
        ...props,
        children: (
          <React.Fragment>
            <Select__Option
              className={classNames("__wab_instance", sty.option__l4KlY)}
              value={"value1"}
            >
              {"Option 1"}
            </Select__Option>
            <Select__Option
              className={classNames("__wab_instance", sty.option__b77UA)}
              value={"value2"}
            >
              {"Option 2"}
            </Select__Option>
            <Select__OptionGroup
              className={classNames("__wab_instance", sty.optionGroup__seLyx)}
            >
              <Select__Option
                className={classNames("__wab_instance", sty.option___8WxB9)}
                value={"option a"}
              >
                {"Option A"}
              </Select__Option>
              <Select__Option
                className={classNames("__wab_instance", sty.option___9KRws)}
                value={"option b"}
              >
                {"Option B"}
              </Select__Option>
            </Select__OptionGroup>
            <Select__OptionGroup
              className={classNames("__wab_instance", sty.optionGroup__xAYx9)}
              title={"Other Group"}
            >
              <Select__Option
                className={classNames("__wab_instance", sty.option__dvKOl)}
                value={"option c"}
              >
                {"Option C"}
              </Select__Option>
              <Select__Option
                className={classNames("__wab_instance", sty.option___1IiGb)}
                value={"option d"}
              >
                {"Option D"}
              </Select__Option>
            </Select__OptionGroup>
            <Select__Option
              className={classNames("__wab_instance", sty.option__gEUdG)}
              value={"value3"}
            >
              {"Option 3"}
            </Select__Option>
          </React.Fragment>
        ),
      };
    }
  }
  return pp.useSelect(
    PlasmicSelect,
    props,
    {
      ...{
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
      OptionComponent: Select__Option,
      OptionGroupComponent: Select__OptionGroup,
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
  (typeof PlasmicDescendants)[T][number];
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
    /* Specify args directly as props*/ Omit<
      PlasmicSelect__ArgsType,
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
          internalArgPropNames: PlasmicSelect__ArgProps,
          internalVariantPropNames: PlasmicSelect__VariantProps,
        }),
      [props, nodeName]
    );
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