// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fpbcKyXdMTvY59T4C5fjcC
// Component: Ynwp30ZgYk

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
import WebhookEvent from "../../WebhookEvent"; // plasmic-import: MtBpr4iNob/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../../../../plasmic/PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../../../../plasmic/plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../../../modals/plasmic/plasmic_kit_project_settings/plasmic_plasmic_kit_project_settings.module.css"; // plasmic-import: fpbcKyXdMTvY59T4C5fjcC/projectcss
import sty from "./PlasmicWebhooksHistory.module.css"; // plasmic-import: Ynwp30ZgYk/css

createPlasmicElementProxy;

export type PlasmicWebhooksHistory__VariantMembers = {
  loading: "loading";
};
export type PlasmicWebhooksHistory__VariantsArgs = {
  loading?: SingleBooleanChoiceArg<"loading">;
};
type VariantPropType = keyof PlasmicWebhooksHistory__VariantsArgs;
export const PlasmicWebhooksHistory__VariantProps = new Array<VariantPropType>(
  "loading"
);

export type PlasmicWebhooksHistory__ArgsType = {
  events?: React.ReactNode;
};
type ArgPropType = keyof PlasmicWebhooksHistory__ArgsType;
export const PlasmicWebhooksHistory__ArgProps = new Array<ArgPropType>(
  "events"
);

export type PlasmicWebhooksHistory__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultWebhooksHistoryProps {
  events?: React.ReactNode;
  loading?: SingleBooleanChoiceArg<"loading">;
  className?: string;
}

const $$ = {};

function PlasmicWebhooksHistory__RenderFunc(props: {
  variants: PlasmicWebhooksHistory__VariantsArgs;
  args: PlasmicWebhooksHistory__ArgsType;
  overrides: PlasmicWebhooksHistory__OverridesType;
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
        path: "loading",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.loading,
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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootloading]: hasVariant($state, "loading", "loading") }
      )}
    >
      {(hasVariant($state, "loading", "loading") ? false : true) ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxloading]: hasVariant($state, "loading", "loading"),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <WebhookEvent
                  className={classNames(
                    "__wab_instance",
                    sty.webhookEvent__pJWg
                  )}
                  method={"GET"}
                  url={"https://plasmic.app/"}
                />

                <WebhookEvent
                  className={classNames(
                    "__wab_instance",
                    sty.webhookEvent__uud5D
                  )}
                  status={"404"}
                  url={
                    "https://plasmic.app/this-is-a-really/long/url/to-see-what-happens-when-a-url-needs-to-wrap"
                  }
                />

                <WebhookEvent
                  className={classNames(
                    "__wab_instance",
                    sty.webhookEvent___3NnLk
                  )}
                  expanded={true}
                  method={"OPTIONS"}
                  status={"500"}
                  url={"https://plasmic.app/options/"}
                />

                <WebhookEvent
                  className={classNames(
                    "__wab_instance",
                    sty.webhookEvent___0QbD
                  )}
                  method={"GET"}
                  url={
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yOarX
                      )}
                    >
                      {"https://plasmic.app/"}
                    </div>
                  }
                />
              </React.Fragment>
            ),
            value: args.events,
          })}
        </p.Stack>
      ) : null}
      {(hasVariant($state, "loading", "loading") ? true : false) ? (
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text,
            { [sty.textloading]: hasVariant($state, "loading", "loading") }
          )}
        >
          {hasVariant($state, "loading", "loading")
            ? "Loading\u2026"
            : "Enter some text"}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "text"],
  freeBox: ["freeBox"],
  text: ["text"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWebhooksHistory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWebhooksHistory__VariantsArgs;
    args?: PlasmicWebhooksHistory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWebhooksHistory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWebhooksHistory__ArgsType,
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
          internalArgPropNames: PlasmicWebhooksHistory__ArgProps,
          internalVariantPropNames: PlasmicWebhooksHistory__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicWebhooksHistory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWebhooksHistory";
  } else {
    func.displayName = `PlasmicWebhooksHistory.${nodeName}`;
  }
  return func;
}

export const PlasmicWebhooksHistory = Object.assign(
  // Top-level PlasmicWebhooksHistory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicWebhooksHistory
    internalVariantProps: PlasmicWebhooksHistory__VariantProps,
    internalArgProps: PlasmicWebhooksHistory__ArgProps,
  }
);

export default PlasmicWebhooksHistory;
/* prettier-ignore-end */
