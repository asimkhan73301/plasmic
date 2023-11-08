// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oB885NJtg5rwT11s7yCnwW
// Component: i-BferDjrAl
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import ListItem from "../../components/ListItem"; // plasmic-import: v31d9_ANqk/component
import ComponentIcon from "../plasmic_kit/PlasmicIcon__Component"; // plasmic-import: nNWEF4jI3s5DI/icon
import FrameIcon from "../plasmic_kit/PlasmicIcon__Frame"; // plasmic-import: nMkHNFwp_HRuJ/icon
import MixinIcon from "../plasmic_kit/PlasmicIcon__Mixin"; // plasmic-import: XA82Nhrgqj98Z/icon
import ThemeIcon from "../plasmic_kit/PlasmicIcon__Theme"; // plasmic-import: jzPNgxwRto4ES/icon
import TokenIcon from "../plasmic_kit/PlasmicIcon__Token"; // plasmic-import: 2dOodD9TzfBr7/icon
import PageIcon from "../plasmic_kit_design_system/icons/PlasmicIcon__Page"; // plasmic-import: p8KOsO82kk/icon
import PresetsIcon from "../plasmic_kit_design_system/PlasmicIcon__Presets"; // plasmic-import: B_JznpDb3g/icon
import ChevronBottomIcon from "./icons/PlasmicIcon__ChevronBottom"; // plasmic-import: QWzHJOf09S/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: uFvmqTmkO9/icon
import sty from "./PlasmicReferenceItem.module.css"; // plasmic-import: i-BferDjrAl/css
import projectcss from "./plasmic_plasmic_kit_find_references_modal.module.css"; // plasmic-import: oB885NJtg5rwT11s7yCnwW/projectcss

export type PlasmicReferenceItem__VariantMembers = {
  type: "page" | "component" | "token" | "mixin" | "preset" | "theme" | "frame";
  selected: "selected";
};

export type PlasmicReferenceItem__VariantsArgs = {
  type?: SingleChoiceArg<
    "page" | "component" | "token" | "mixin" | "preset" | "theme" | "frame"
  >;

  selected?: SingleBooleanChoiceArg<"selected">;
};

type VariantPropType = keyof PlasmicReferenceItem__VariantsArgs;
export const PlasmicReferenceItem__VariantProps = new Array<VariantPropType>(
  "type",
  "selected"
);

export type PlasmicReferenceItem__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicReferenceItem__ArgsType;
export const PlasmicReferenceItem__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicReferenceItem__OverridesType = {
  root?: p.Flex<"div">;
  listItem?: p.Flex<typeof ListItem>;
};

export interface DefaultReferenceItemProps {
  children?: React.ReactNode;
  type?: SingleChoiceArg<
    "page" | "component" | "token" | "mixin" | "preset" | "theme" | "frame"
  >;

  selected?: SingleBooleanChoiceArg<"selected">;
  className?: string;
}

function PlasmicReferenceItem__RenderFunc(props: {
  variants: PlasmicReferenceItem__VariantsArgs;
  args: PlasmicReferenceItem__ArgsType;
  overrides: PlasmicReferenceItem__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    (hasVariant(variants, "selected", "selected") ? true : true) ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(projectcss.all, projectcss.root_reset, sty.root, {
          [sty.root__selected]: hasVariant(variants, "selected", "selected"),
          [sty.root__type_component]: hasVariant(variants, "type", "component"),
          [sty.root__type_page]: hasVariant(variants, "type", "page"),
        })}
      >
        <ListItem
          data-plasmic-name={"listItem"}
          data-plasmic-override={overrides.listItem}
          className={classNames("__wab_instance", sty.listItem, {
            [sty.listItem__selected]: hasVariant(
              variants,
              "selected",
              "selected"
            ),

            [sty.listItem__type_page]: hasVariant(variants, "type", "page"),
          })}
          icon={
            <React.Fragment>
              {false ? (
                <ChevronBottomIcon
                  className={classNames(projectcss.all, sty.svg__hpcVh)}
                  role={"img"}
                />
              ) : null}
              {false ? (
                <ChevronRightIcon
                  className={classNames(projectcss.all, sty.svg__g3Nlv)}
                  role={"img"}
                />
              ) : null}

              <p.PlasmicIcon
                PlasmicIconType={
                  hasVariant(variants, "type", "frame")
                    ? FrameIcon
                    : hasVariant(variants, "type", "theme")
                    ? ThemeIcon
                    : hasVariant(variants, "type", "preset")
                    ? PresetsIcon
                    : hasVariant(variants, "type", "mixin")
                    ? MixinIcon
                    : hasVariant(variants, "type", "token")
                    ? TokenIcon
                    : hasVariant(variants, "type", "page")
                    ? PageIcon
                    : ComponentIcon
                }
                className={classNames(projectcss.all, sty.svg__yn2Mk, {
                  [sty.svg__type_component__yn2Mkkyowq]: hasVariant(
                    variants,
                    "type",
                    "component"
                  ),

                  [sty.svg__type_frame__yn2MkQy1Ub]: hasVariant(
                    variants,
                    "type",
                    "frame"
                  ),

                  [sty.svg__type_mixin__yn2MkL37]: hasVariant(
                    variants,
                    "type",
                    "mixin"
                  ),

                  [sty.svg__type_page__yn2Mks0Z3C]: hasVariant(
                    variants,
                    "type",
                    "page"
                  ),

                  [sty.svg__type_preset__yn2MkYqyAh]: hasVariant(
                    variants,
                    "type",
                    "preset"
                  ),

                  [sty.svg__type_theme__yn2MkkuTx8]: hasVariant(
                    variants,
                    "type",
                    "theme"
                  ),

                  [sty.svg__type_token__yn2MknHsTc]: hasVariant(
                    variants,
                    "type",
                    "token"
                  ),
                })}
                role={"img"}
              />
            </React.Fragment>
          }
          isSelected={
            hasVariant(variants, "selected", "selected") ? true : undefined
          }
        >
          {p.renderPlasmicSlot({
            defaultContents: "Item name",
            value: args.children,
          })}
        </ListItem>
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "listItem"],
  listItem: ["listItem"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  listItem: typeof ListItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReferenceItem__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicReferenceItem__VariantsArgs;
  args?: PlasmicReferenceItem__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicReferenceItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicReferenceItem__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicReferenceItem__ArgProps,
      internalVariantPropNames: PlasmicReferenceItem__VariantProps,
    });

    return PlasmicReferenceItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReferenceItem";
  } else {
    func.displayName = `PlasmicReferenceItem.${nodeName}`;
  }
  return func;
}

export const PlasmicReferenceItem = Object.assign(
  // Top-level PlasmicReferenceItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    listItem: makeNodeComponent("listItem"),

    // Metadata about props expected for PlasmicReferenceItem
    internalVariantProps: PlasmicReferenceItem__VariantProps,
    internalArgProps: PlasmicReferenceItem__ArgProps,
  }
);

export default PlasmicReferenceItem;
/* prettier-ignore-end */
