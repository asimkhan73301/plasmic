// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: 5oz1qmvGBe

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
import LeftSearchPanel from "../../components/studio/LeftSearchPanel"; // plasmic-import: TqAPn0srTq/component
import LeftPaneHeader from "../../components/studio/LeftPaneHeader"; // plasmic-import: XLa52PvduIy/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import TextWithInfo from "../../../../TextWithInfo"; // plasmic-import: -EsDm7v023/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicLeftFontsPanel.module.css"; // plasmic-import: 5oz1qmvGBe/css

import PlusIcon from "./PlasmicIcon__Plus"; // plasmic-import: -k064DlQ8k8-L/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicLeftFontsPanel__VariantMembers = {};
export type PlasmicLeftFontsPanel__VariantsArgs = {};
type VariantPropType = keyof PlasmicLeftFontsPanel__VariantsArgs;
export const PlasmicLeftFontsPanel__VariantProps = new Array<VariantPropType>();

export type PlasmicLeftFontsPanel__ArgsType = {};
type ArgPropType = keyof PlasmicLeftFontsPanel__ArgsType;
export const PlasmicLeftFontsPanel__ArgProps = new Array<ArgPropType>();

export type PlasmicLeftFontsPanel__OverridesType = {
  root?: p.Flex<"div">;
  leftSearchPanel?: p.Flex<typeof LeftSearchPanel>;
  fontsHeader?: p.Flex<typeof LeftPaneHeader>;
  link?: p.Flex<"a">;
  newFontButton?: p.Flex<typeof Button>;
  content?: p.Flex<"div">;
};

export interface DefaultLeftFontsPanelProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLeftFontsPanel__RenderFunc(props: {
  variants: PlasmicLeftFontsPanel__VariantsArgs;
  args: PlasmicLeftFontsPanel__ArgsType;
  overrides: PlasmicLeftFontsPanel__OverridesType;
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
        sty.root
      )}
    >
      <LeftSearchPanel
        data-plasmic-name={"leftSearchPanel"}
        data-plasmic-override={overrides.leftSearchPanel}
        className={classNames("__wab_instance", sty.leftSearchPanel)}
      />

      <LeftPaneHeader
        data-plasmic-name={"fontsHeader"}
        data-plasmic-override={overrides.fontsHeader}
        actions={
          <Button
            data-plasmic-name={"newFontButton"}
            data-plasmic-override={overrides.newFontButton}
            className={classNames("__wab_instance", sty.newFontButton)}
            endIcon={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__l4GU7)}
                role={"img"}
              />
            }
            size={"wide" as const}
            startIcon={
              <PlusIcon
                className={classNames(projectcss.all, sty.svg___4TfS)}
                role={"img"}
              />
            }
            type={["secondary"]}
            withIcons={["startIcon"]}
          >
            {"New font"}
          </Button>
        }
        className={classNames("__wab_instance", sty.fontsHeader)}
        description={
          <a
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            href={"https://docs.plasmic.app/learn/custom-fonts/" as const}
            target={"_blank" as const}
          >
            {"Learn how to add custom fonts."}
          </a>
        }
        title={"Custom fonts"}
      />

      <div
        data-plasmic-name={"content"}
        data-plasmic-override={overrides.content}
        className={classNames(projectcss.all, sty.content)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "leftSearchPanel",
    "fontsHeader",
    "link",
    "newFontButton",
    "content",
  ],
  leftSearchPanel: ["leftSearchPanel"],
  fontsHeader: ["fontsHeader", "link", "newFontButton"],
  link: ["link"],
  newFontButton: ["newFontButton"],
  content: ["content"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  leftSearchPanel: typeof LeftSearchPanel;
  fontsHeader: typeof LeftPaneHeader;
  link: "a";
  newFontButton: typeof Button;
  content: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftFontsPanel__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftFontsPanel__VariantsArgs;
    args?: PlasmicLeftFontsPanel__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftFontsPanel__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftFontsPanel__ArgsType,
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
          internalArgPropNames: PlasmicLeftFontsPanel__ArgProps,
          internalVariantPropNames: PlasmicLeftFontsPanel__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftFontsPanel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftFontsPanel";
  } else {
    func.displayName = `PlasmicLeftFontsPanel.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftFontsPanel = Object.assign(
  // Top-level PlasmicLeftFontsPanel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    leftSearchPanel: makeNodeComponent("leftSearchPanel"),
    fontsHeader: makeNodeComponent("fontsHeader"),
    link: makeNodeComponent("link"),
    newFontButton: makeNodeComponent("newFontButton"),
    content: makeNodeComponent("content"),

    // Metadata about props expected for PlasmicLeftFontsPanel
    internalVariantProps: PlasmicLeftFontsPanel__VariantProps,
    internalArgProps: PlasmicLeftFontsPanel__ArgProps,
  }
);

export default PlasmicLeftFontsPanel;
/* prettier-ignore-end */
