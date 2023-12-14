// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ieacQ3Z46z4gwo1FnaB5vY
// Component: pLQf-lY112u

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
import InlineEditable from "../../../../InlineEditable"; // plasmic-import: btpz7A3thO/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import MenuButton from "../../components/widgets/MenuButton"; // plasmic-import: h69wHrrKtL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_cms.module.css"; // plasmic-import: ieacQ3Z46z4gwo1FnaB5vY/projectcss
import sty from "./PlasmicCmsModelDetails.module.css"; // plasmic-import: pLQf-lY112u/css

import EditsvgIcon from "../q_4_icons/icons/PlasmicIcon__Editsvg"; // plasmic-import: _Qa2gdunG/icon
import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicCmsModelDetails__VariantMembers = {};
export type PlasmicCmsModelDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicCmsModelDetails__VariantsArgs;
export const PlasmicCmsModelDetails__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCmsModelDetails__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCmsModelDetails__ArgsType;
export const PlasmicCmsModelDetails__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicCmsModelDetails__OverridesType = {
  root?: p.Flex<"div">;
  left?: p.Flex<"div">;
  modelName?: p.Flex<typeof InlineEditable>;
  modelNameValue?: p.Flex<"div">;
  text?: p.Flex<"div">;
  right?: p.Flex<"div">;
  saveButton?: p.Flex<typeof Button>;
  menuButton?: p.Flex<typeof MenuButton>;
};

export interface DefaultCmsModelDetailsProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicCmsModelDetails__RenderFunc(props: {
  variants: PlasmicCmsModelDetails__VariantsArgs;
  args: PlasmicCmsModelDetails__ArgsType;
  overrides: PlasmicCmsModelDetails__OverridesType;
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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___2Vfpj)}>
        <div
          data-plasmic-name={"left"}
          data-plasmic-override={overrides.left}
          className={classNames(projectcss.all, sty.left)}
        >
          <InlineEditable
            data-plasmic-name={"modelName"}
            data-plasmic-override={overrides.modelName}
            className={classNames("__wab_instance", sty.modelName)}
          >
            <div
              data-plasmic-name={"modelNameValue"}
              data-plasmic-override={overrides.modelNameValue}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.modelNameValue
              )}
            >
              {"Enter some text"}
            </div>
          </InlineEditable>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"Model schema"}
          </div>
        </div>
        <p.Stack
          as={"div"}
          data-plasmic-name={"right"}
          data-plasmic-override={overrides.right}
          hasGap={true}
          className={classNames(projectcss.all, sty.right)}
        >
          <Button
            data-plasmic-name={"saveButton"}
            data-plasmic-override={overrides.saveButton}
            className={classNames("__wab_instance", sty.saveButton)}
            size={"wide"}
            type={["primary"]}
          >
            {"Save"}
          </Button>
          <MenuButton
            data-plasmic-name={"menuButton"}
            data-plasmic-override={overrides.menuButton}
            className={classNames("__wab_instance", sty.menuButton)}
          />
        </p.Stack>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__qDko6)}>
        <div className={classNames(projectcss.all, sty.freeBox__lCBih)}>
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children,
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "left",
    "modelName",
    "modelNameValue",
    "text",
    "right",
    "saveButton",
    "menuButton",
  ],
  left: ["left", "modelName", "modelNameValue", "text"],
  modelName: ["modelName", "modelNameValue"],
  modelNameValue: ["modelNameValue"],
  text: ["text"],
  right: ["right", "saveButton", "menuButton"],
  saveButton: ["saveButton"],
  menuButton: ["menuButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  left: "div";
  modelName: typeof InlineEditable;
  modelNameValue: "div";
  text: "div";
  right: "div";
  saveButton: typeof Button;
  menuButton: typeof MenuButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCmsModelDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCmsModelDetails__VariantsArgs;
    args?: PlasmicCmsModelDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCmsModelDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCmsModelDetails__ArgsType,
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCmsModelDetails__ArgProps,
          internalVariantPropNames: PlasmicCmsModelDetails__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCmsModelDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCmsModelDetails";
  } else {
    func.displayName = `PlasmicCmsModelDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicCmsModelDetails = Object.assign(
  // Top-level PlasmicCmsModelDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    left: makeNodeComponent("left"),
    modelName: makeNodeComponent("modelName"),
    modelNameValue: makeNodeComponent("modelNameValue"),
    text: makeNodeComponent("text"),
    right: makeNodeComponent("right"),
    saveButton: makeNodeComponent("saveButton"),
    menuButton: makeNodeComponent("menuButton"),

    // Metadata about props expected for PlasmicCmsModelDetails
    internalVariantProps: PlasmicCmsModelDetails__VariantProps,
    internalArgProps: PlasmicCmsModelDetails__ArgProps,
  }
);

export default PlasmicCmsModelDetails;
/* prettier-ignore-end */
