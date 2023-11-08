// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wT5BWZPEc2fYxyqbTLXMt2
// Component: W8tzkAR80P
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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
import ListSectionHeader from "../../components/ListSectionHeader"; // plasmic-import: wNvxk7eOak/component
import TextWithInfo from "../../../../TextWithInfo"; // plasmic-import: -EsDm7v023/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import VariantComboRow from "../../components/variants/VariantComboRow"; // plasmic-import: FskUdXzKp5L/component
import Chip from "../../components/widgets/Chip"; // plasmic-import: jW885tExwE/component
import ListSectionSeparator from "../../components/ListSectionSeparator"; // plasmic-import: uG5_fPM0sK/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_variants.module.css"; // plasmic-import: wT5BWZPEc2fYxyqbTLXMt2/projectcss
import sty from "./PlasmicVariantCombosSection.module.css"; // plasmic-import: W8tzkAR80P/css

import PlusCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__PlusCirclesvg"; // plasmic-import: tPPI666-2/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import VariantGroupIcon from "../plasmic_kit/PlasmicIcon__VariantGroup"; // plasmic-import: pyS6pK4Spx-QF/icon

export type PlasmicVariantCombosSection__VariantMembers = {
  isExpanded: "isExpanded";
};

export type PlasmicVariantCombosSection__VariantsArgs = {
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
};

type VariantPropType = keyof PlasmicVariantCombosSection__VariantsArgs;
export const PlasmicVariantCombosSection__VariantProps =
  new Array<VariantPropType>("isExpanded");

export type PlasmicVariantCombosSection__ArgsType = {
  relevantCombos?: React.ReactNode;
  otherCombos?: React.ReactNode;
};

type ArgPropType = keyof PlasmicVariantCombosSection__ArgsType;
export const PlasmicVariantCombosSection__ArgProps = new Array<ArgPropType>(
  "relevantCombos",
  "otherCombos"
);

export type PlasmicVariantCombosSection__OverridesType = {
  root?: p.Flex<"div">;
  combinationsHeader?: p.Flex<typeof ListSectionHeader>;
  combinationsInfo?: p.Flex<typeof TextWithInfo>;
  text?: p.Flex<"div">;
  iconButton?: p.Flex<typeof IconButton>;
  combosContainer?: p.Flex<"div">;
  listSectionSeparator?: p.Flex<typeof ListSectionSeparator>;
};

export interface DefaultVariantCombosSectionProps {
  relevantCombos?: React.ReactNode;
  otherCombos?: React.ReactNode;
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicVariantCombosSection__RenderFunc(props: {
  variants: PlasmicVariantCombosSection__VariantsArgs;
  args: PlasmicVariantCombosSection__ArgsType;
  overrides: PlasmicVariantCombosSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),

    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isExpanded",
        type: "private",
        variableType: "variant",
        initFunc: true
          ? ($props, $state, $ctx) => $props.isExpanded
          : undefined,
      },
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

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
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <ListSectionHeader
        data-plasmic-name={"combinationsHeader"}
        data-plasmic-override={overrides.combinationsHeader}
        actions={
          <IconButton
            data-plasmic-name={"iconButton"}
            data-plasmic-override={overrides.iconButton}
            children2={
              <ChevronDownsvgIcon
                className={classNames(projectcss.all, sty.svg__gCpMd)}
                role={"img"}
              />
            }
            className={classNames("__wab_instance", sty.iconButton)}
          >
            <PlusCirclesvgIcon
              className={classNames(projectcss.all, sty.svg__ar0Gk)}
              role={"img"}
            />
          </IconButton>
        }
        className={classNames("__wab_instance", sty.combinationsHeader, {
          [sty.combinationsHeaderisExpanded]: hasVariant(
            $state,
            "isExpanded",
            "isExpanded"
          ),
        })}
        collapseState={
          hasVariant($state, "isExpanded", "isExpanded")
            ? ("expanded" as const)
            : ("collapsed" as const)
        }
      >
        <TextWithInfo
          data-plasmic-name={"combinationsInfo"}
          data-plasmic-override={overrides.combinationsInfo}
          className={classNames("__wab_instance", sty.combinationsInfo, {
            [sty.combinationsInfoisExpanded]: hasVariant(
              $state,
              "isExpanded",
              "isExpanded"
            ),
          })}
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
            {"Combinations"}
          </div>
        </TextWithInfo>
      </ListSectionHeader>

      {(hasVariant($state, "isExpanded", "isExpanded") ? true : false) ? (
        <div
          data-plasmic-name={"combosContainer"}
          data-plasmic-override={overrides.combosContainer}
          className={classNames(projectcss.all, sty.combosContainer, {
            [sty.combosContainerisExpanded]: hasVariant(
              $state,
              "isExpanded",
              "isExpanded"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <VariantComboRow
                  labelContainer={
                    <React.Fragment>
                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__vUblz
                          )}
                        >
                          {"Type: Bordered"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uFQs7
                          )}
                        >
                          {"Color: Primary"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ol1E4
                          )}
                        >
                          {"Hover"}
                        </div>
                      </Chip>
                    </React.Fragment>
                  }
                />

                <VariantComboRow
                  className={classNames(
                    "__wab_instance",
                    sty.variantComboRow__gdMvC
                  )}
                  isIndicated={true}
                  labelContainer={
                    <React.Fragment>
                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ztVlN
                          )}
                        >
                          {"Type: Bordered"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___4O00
                          )}
                        >
                          {"Color: Primary"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__b5Neo
                          )}
                        >
                          {"Hover"}
                        </div>
                      </Chip>
                    </React.Fragment>
                  }
                />
              </React.Fragment>
            ),

            value: args.relevantCombos,
          })}

          <ListSectionSeparator
            data-plasmic-name={"listSectionSeparator"}
            data-plasmic-override={overrides.listSectionSeparator}
            className={classNames("__wab_instance", sty.listSectionSeparator)}
          />

          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <VariantComboRow
                  labelContainer={
                    <React.Fragment>
                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__s3HzD
                          )}
                        >
                          {"Type: Bordered"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__ewoCo
                          )}
                        >
                          {"Color: Primary"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__krVeL
                          )}
                        >
                          {"Hover"}
                        </div>
                      </Chip>
                    </React.Fragment>
                  }
                />

                <VariantComboRow
                  className={classNames(
                    "__wab_instance",
                    sty.variantComboRow__cxIov
                  )}
                  isIndicated={true}
                  labelContainer={
                    <React.Fragment>
                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__dZand
                          )}
                        >
                          {"Type: Bordered"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___2WFku
                          )}
                        >
                          {"Color: Primary"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bimy7
                          )}
                        >
                          {"Hover"}
                        </div>
                      </Chip>
                    </React.Fragment>
                  }
                />

                <VariantComboRow
                  className={classNames(
                    "__wab_instance",
                    sty.variantComboRow__lBUs
                  )}
                  labelContainer={
                    <React.Fragment>
                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mgYWf
                          )}
                        >
                          {"Type: Bordered"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bxPlJ
                          )}
                        >
                          {"Color: Primary"}
                        </div>
                      </Chip>

                      <Chip>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__znAos
                          )}
                        >
                          {"Hover"}
                        </div>
                      </Chip>
                    </React.Fragment>
                  }
                />
              </React.Fragment>
            ),

            value: args.otherCombos,
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "combinationsHeader",
    "combinationsInfo",
    "text",
    "iconButton",
    "combosContainer",
    "listSectionSeparator",
  ],

  combinationsHeader: [
    "combinationsHeader",
    "combinationsInfo",
    "text",
    "iconButton",
  ],

  combinationsInfo: ["combinationsInfo", "text"],
  text: ["text"],
  iconButton: ["iconButton"],
  combosContainer: ["combosContainer", "listSectionSeparator"],
  listSectionSeparator: ["listSectionSeparator"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  combinationsHeader: typeof ListSectionHeader;
  combinationsInfo: typeof TextWithInfo;
  text: "div";
  iconButton: typeof IconButton;
  combosContainer: "div";
  listSectionSeparator: typeof ListSectionSeparator;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicVariantCombosSection__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicVariantCombosSection__VariantsArgs;
  args?: PlasmicVariantCombosSection__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicVariantCombosSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicVariantCombosSection__ArgsType, ReservedPropsType> &
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
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicVariantCombosSection__ArgProps,
          internalVariantPropNames: PlasmicVariantCombosSection__VariantProps,
        }),

      [props, nodeName]
    );

    return PlasmicVariantCombosSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicVariantCombosSection";
  } else {
    func.displayName = `PlasmicVariantCombosSection.${nodeName}`;
  }
  return func;
}

export const PlasmicVariantCombosSection = Object.assign(
  // Top-level PlasmicVariantCombosSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    combinationsHeader: makeNodeComponent("combinationsHeader"),
    combinationsInfo: makeNodeComponent("combinationsInfo"),
    text: makeNodeComponent("text"),
    iconButton: makeNodeComponent("iconButton"),
    combosContainer: makeNodeComponent("combosContainer"),
    listSectionSeparator: makeNodeComponent("listSectionSeparator"),

    // Metadata about props expected for PlasmicVariantCombosSection
    internalVariantProps: PlasmicVariantCombosSection__VariantProps,
    internalArgProps: PlasmicVariantCombosSection__ArgProps,
  }
);

export default PlasmicVariantCombosSection;
/* prettier-ignore-end */
