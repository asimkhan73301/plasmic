// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ieacQ3Z46z4gwo1FnaB5vY
// Component: k2vc2stl18

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
import CmsEntryItem from "../../components/cms/CmsEntryItem"; // plasmic-import: girCdMST6R/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_cms.module.css"; // plasmic-import: ieacQ3Z46z4gwo1FnaB5vY/projectcss
import sty from "./PlasmicCmsEntriesList.module.css"; // plasmic-import: k2vc2stl18/css

import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import SearchBox  from '../../components/widgets/Searchbox';
import Searchbox from "../../components/widgets/Searchbox";

createPlasmicElementProxy;

export type PlasmicCmsEntriesList__VariantMembers = {
  isEmpty: "isEmpty";
};
export type PlasmicCmsEntriesList__VariantsArgs = {
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
};
type VariantPropType = keyof PlasmicCmsEntriesList__VariantsArgs;
export const PlasmicCmsEntriesList__VariantProps = new Array<VariantPropType>(
  "isEmpty"
);

export type PlasmicCmsEntriesList__ArgsType = {
  modelName?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCmsEntriesList__ArgsType;
export const PlasmicCmsEntriesList__ArgProps = new Array<ArgPropType>(
  "modelName",
  "children"
);

export type PlasmicCmsEntriesList__OverridesType = {
  root?: p.Flex<"div">;
  addButton?: p.Flex<typeof IconButton>;
  text?: p.Flex<"div">;
  searchInput?:p.Flex<typeof SearchBox>
};

export interface DefaultCmsEntriesListProps {
  modelName?: React.ReactNode;
  children?: React.ReactNode;
  isEmpty?: SingleBooleanChoiceArg<"isEmpty">;
  className?: string;
}

function PlasmicCmsEntriesList__RenderFunc(props: {
  variants: PlasmicCmsEntriesList__VariantsArgs;
  args: PlasmicCmsEntriesList__ArgsType;
  overrides: PlasmicCmsEntriesList__OverridesType;
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
        path: "isEmpty",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isEmpty,
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
        { [sty.rootisEmpty]: hasVariant($state, "isEmpty", "isEmpty") }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___7Bhda)}>
        <div className={classNames(projectcss.all, sty.freeBox___0Ic4Y)}>
          {p.renderPlasmicSlot({
            defaultContents: "FAQs",
            value: args.modelName,
            className: classNames(sty.slotTargetModelName),
          })}
        </div>
        <IconButton
          data-plasmic-name={"addButton"}
          data-plasmic-override={overrides.addButton}
          className={classNames("__wab_instance", sty.addButton)}
          withBackgroundHover={true}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___73Lo)}>
        <Searchbox
          data-plasmic-name={"entrySearchInput"}
          data-plasmic-override={overrides.searchInput}
          className={classNames("__wab_instance", sty.searchInput)}
          placeholder={"Filter..."}
        />
      </div>
      {(hasVariant($state, "isEmpty", "isEmpty") ? false : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zdChF, {
            [sty.freeBoxisEmpty__zdChFgHc56]: hasVariant(
              $state,
              "isEmpty",
              "isEmpty"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <CmsEntryItem
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryItem__gdUiu
                  )}
                />

                <CmsEntryItem
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryItem___08HPe
                  )}
                />
              </React.Fragment>
            ),
            value: args.children,
          })}
        </p.Stack>
      ) : null}
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textisEmpty]: hasVariant($state, "isEmpty", "isEmpty"),
        })}
      >
        {"No entries have been created yet."}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "addButton", "text","searchInput"],
  addButton: ["addButton"],
  text: ["text"],
  searchInput: ["searchInput"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  addButton: typeof IconButton;
  text: "div";
  searchInput: typeof Searchbox;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCmsEntriesList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCmsEntriesList__VariantsArgs;
    args?: PlasmicCmsEntriesList__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCmsEntriesList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCmsEntriesList__ArgsType,
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
          internalArgPropNames: PlasmicCmsEntriesList__ArgProps,
          internalVariantPropNames: PlasmicCmsEntriesList__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicCmsEntriesList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCmsEntriesList";
  } else {
    func.displayName = `PlasmicCmsEntriesList.${nodeName}`;
  }
  return func;
}

export const PlasmicCmsEntriesList = Object.assign(
  // Top-level PlasmicCmsEntriesList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    addButton: makeNodeComponent("addButton"),
    text: makeNodeComponent("text"),
    searchInput: makeNodeComponent("searchInput"),

    // Metadata about props expected for PlasmicCmsEntriesList
    internalVariantProps: PlasmicCmsEntriesList__VariantProps,
    internalArgProps: PlasmicCmsEntriesList__ArgProps,
  }
);

export default PlasmicCmsEntriesList;
/* prettier-ignore-end */
