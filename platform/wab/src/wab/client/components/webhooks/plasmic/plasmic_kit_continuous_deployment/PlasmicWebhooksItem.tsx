// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpbcKyXdMTvY59T4C5fjcC
// Component: mSgnlB96I5A

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
import Checkbox from "../../../widgets/Checkbox"; // plasmic-import: W-rO7NZqPjZ/component
import Select from "../../../widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import Select__Option from "../../../widgets/Select__Option"; // plasmic-import: rr-LWdMni2G/component
import Select__OptionGroup from "../../../widgets/Select__OptionGroup"; // plasmic-import: _qMm1mtrqOi/component
import MenuButton from "../../../widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component
import WebhookHeader from "../../WebhookHeader"; // plasmic-import: OkB-fXuJPc/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../../../../plasmic/PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../../../../plasmic/plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../../../modals/plasmic/plasmic_kit_project_settings/plasmic_plasmic_kit_project_settings.module.css"; // plasmic-import: fpbcKyXdMTvY59T4C5fjcC/projectcss
import sty from "./PlasmicWebhooksItem.module.css"; // plasmic-import: mSgnlB96I5A/css

import PlussvgIcon from "../../../../plasmic/q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicWebhooksItem__VariantMembers = {
  expanded: "expanded";
};
export type PlasmicWebhooksItem__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicWebhooksItem__VariantsArgs;
export const PlasmicWebhooksItem__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicWebhooksItem__ArgsType = {
  headers?: React.ReactNode;
};
type ArgPropType = keyof PlasmicWebhooksItem__ArgsType;
export const PlasmicWebhooksItem__ArgProps = new Array<ArgPropType>("headers");

export type PlasmicWebhooksItem__OverridesType = {
  root?: p.Flex<"div">;
  checkbox?: p.Flex<typeof Checkbox>;
  method?: p.Flex<typeof Select>;
  svg?: p.Flex<"svg">;
  url?: p.Flex<"input">;
  menuButton?: p.Flex<typeof MenuButton>;
  text?: p.Flex<"div">;
  payload?: p.Flex<"textarea">;
};

export interface DefaultWebhooksItemProps {
  headers?: React.ReactNode;
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

const $$ = {};

function PlasmicWebhooksItem__RenderFunc(props: {
  variants: PlasmicWebhooksItem__VariantsArgs;
  args: PlasmicWebhooksItem__ArgsType;
  overrides: PlasmicWebhooksItem__OverridesType;
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
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded,
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
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__simNc)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0Jy6H)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ptuDx)}
          >
            <Checkbox
              data-plasmic-name={"checkbox"}
              data-plasmic-override={overrides.checkbox}
              children={null}
              className={classNames("__wab_instance", sty.checkbox)}
            />

            <Select
              data-plasmic-name={"method"}
              data-plasmic-override={overrides.method}
              className={classNames("__wab_instance", sty.method)}
              icon={
                <PlussvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
            />
          </p.Stack>
          <input
            data-plasmic-name={"url"}
            data-plasmic-override={overrides.url}
            className={classNames(projectcss.all, projectcss.input, sty.url)}
            placeholder={"URL…"}
            ref={(ref) => {
              $refs["url"] = ref;
            }}
            size={1}
            type={"text"}
            value={""}
          />

          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton)}
          />
        </p.Stack>
      </p.Stack>
      {(hasVariant($state, "expanded", "expanded") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__bbNTg, {
            [sty.freeBoxexpanded__bbNTgaCjOc]: hasVariant(
              $state,
              "expanded",
              "expanded"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wL5I)}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <WebhookHeader showAdd={true} />

                  <WebhookHeader />
                </React.Fragment>
              ),
              value: args.headers,
            })}
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wihbF, {
              [sty.freeBoxexpanded__wihbFaCjOc]: hasVariant(
                $state,
                "expanded",
                "expanded"
              ),
            })}
          >
            <div
              data-plasmic-name={"text"}
              data-plasmic-override={overrides.text}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text,
                {
                  [sty.textexpanded]: hasVariant(
                    $state,
                    "expanded",
                    "expanded"
                  ),
                }
              )}
            >
              {"Payload"}
            </div>
            <textarea
              data-plasmic-name={"payload"}
              data-plasmic-override={overrides.payload}
              className={classNames(
                projectcss.all,
                projectcss.textarea,
                sty.payload,
                {
                  [sty.payloadexpanded]: hasVariant(
                    $state,
                    "expanded",
                    "expanded"
                  ),
                }
              )}
              placeholder={"Enter payload…"}
              ref={(ref) => {
                $refs["payload"] = ref;
              }}
              rows={5}
              value={""}
            />
          </p.Stack>
        </p.Stack>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__uuv93)} />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "checkbox",
    "method",
    "svg",
    "url",
    "menuButton",
    "text",
    "payload",
  ],
  checkbox: ["checkbox"],
  method: ["method", "svg"],
  svg: ["svg"],
  url: ["url"],
  menuButton: ["menuButton"],
  text: ["text"],
  payload: ["payload"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  checkbox: typeof Checkbox;
  method: typeof Select;
  svg: "svg";
  url: "input";
  menuButton: typeof MenuButton;
  text: "div";
  payload: "textarea";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebhooksItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebhooksItem__VariantsArgs;
    args?: PlasmicWebhooksItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWebhooksItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWebhooksItem__ArgsType,
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
          internalArgPropNames: PlasmicWebhooksItem__ArgProps,
          internalVariantPropNames: PlasmicWebhooksItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicWebhooksItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWebhooksItem";
  } else {
    func.displayName = `PlasmicWebhooksItem.${nodeName}`;
  }
  return func;
}

export const PlasmicWebhooksItem = Object.assign(
  // Top-level PlasmicWebhooksItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    checkbox: makeNodeComponent("checkbox"),
    method: makeNodeComponent("method"),
    svg: makeNodeComponent("svg"),
    url: makeNodeComponent("url"),
    menuButton: makeNodeComponent("menuButton"),
    text: makeNodeComponent("text"),
    payload: makeNodeComponent("payload"),

    // Metadata about props expected for PlasmicWebhooksItem
    internalVariantProps: PlasmicWebhooksItem__VariantProps,
    internalArgProps: PlasmicWebhooksItem__ArgProps,
  }
);

export default PlasmicWebhooksItem;
/* prettier-ignore-end */
