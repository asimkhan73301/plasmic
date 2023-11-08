// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dyzP6dbCdycwJpqiR2zkwe
// Component: 9vACp1cwGL
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
import DocsPropsTableRow from "../../components/docs/DocsPropsTableRow"; // plasmic-import: MQ5YoyUM0K/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_plasmic_kit_docs_portal.module.css"; // plasmic-import: dyzP6dbCdycwJpqiR2zkwe/projectcss
import sty from "./PlasmicDocsPropsTable.module.css"; // plasmic-import: 9vACp1cwGL/css

export type PlasmicDocsPropsTable__VariantMembers = {
  showControls: "showControls";
};

export type PlasmicDocsPropsTable__VariantsArgs = {
  showControls?: SingleBooleanChoiceArg<"showControls">;
};

type VariantPropType = keyof PlasmicDocsPropsTable__VariantsArgs;
export const PlasmicDocsPropsTable__VariantProps = new Array<VariantPropType>(
  "showControls"
);

export type PlasmicDocsPropsTable__ArgsType = {
  rows?: React.ReactNode;
  rowsWithControl?: React.ReactNode;
};

type ArgPropType = keyof PlasmicDocsPropsTable__ArgsType;
export const PlasmicDocsPropsTable__ArgProps = new Array<ArgPropType>(
  "rows",
  "rowsWithControl"
);

export type PlasmicDocsPropsTable__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  rows?: p.Flex<"div">;
  rowsWithControl?: p.Flex<"div">;
};

export interface DefaultDocsPropsTableProps {
  rows?: React.ReactNode;
  rowsWithControl?: React.ReactNode;
  showControls?: SingleBooleanChoiceArg<"showControls">;
  className?: string;
}

export const defaultDocsPropsTable__Args: Partial<PlasmicDocsPropsTable__ArgsType> =
  {};

function PlasmicDocsPropsTable__RenderFunc(props: {
  variants: PlasmicDocsPropsTable__VariantsArgs;
  args: PlasmicDocsPropsTable__ArgsType;
  overrides: PlasmicDocsPropsTable__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultDocsPropsTable__Args, props.args);
  const $props = args;

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
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxshowControls]: hasVariant(
            variants,
            "showControls",
            "showControls"
          ),
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__stRwP,
            {
              [sty.textshowControls__stRwP6TP3R]: hasVariant(
                variants,
                "showControls",
                "showControls"
              ),
            }
          )}
        >
          {"Property"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__gDsMx,
            {
              [sty.textshowControls__gDsMx6TP3R]: hasVariant(
                variants,
                "showControls",
                "showControls"
              ),
            }
          )}
        >
          {"Description"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__k2Mxo,
            {
              [sty.textshowControls__k2Mxo6TP3R]: hasVariant(
                variants,
                "showControls",
                "showControls"
              ),
            }
          )}
        >
          {"Type"}
        </div>

        {(
          hasVariant(variants, "showControls", "showControls") ? true : true
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yr0Wp,
              {
                [sty.textshowControls__yr0Wp6TP3R]: hasVariant(
                  variants,
                  "showControls",
                  "showControls"
                ),
              }
            )}
          >
            {hasVariant(variants, "showControls", "showControls")
              ? "Controls"
              : "Enter some text"}
          </div>
        ) : null}
      </p.Stack>

      {(hasVariant(variants, "showControls", "showControls") ? true : true) ? (
        <div
          data-plasmic-name={"rows"}
          data-plasmic-override={overrides.rows}
          className={classNames(projectcss.all, sty.rows, {
            [sty.rowsshowControls]: hasVariant(
              variants,
              "showControls",
              "showControls"
            ),
          })}
        >
          {(hasVariant(variants, "showControls", "showControls") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    {true ? (
                      <DocsPropsTableRow
                        className={classNames(
                          "__wab_instance",
                          sty.docsPropsTableRow__iK8Fi
                        )}
                        description={"boolean state"}
                        propName={"boolean"}
                        propType={"boolean"}
                      />
                    ) : null}

                    <DocsPropsTableRow
                      className={classNames(
                        "__wab_instance",
                        sty.docsPropsTableRow__sxb0O
                      )}
                      description={"input text state"}
                      propName={"string"}
                    />

                    <DocsPropsTableRow
                      className={classNames(
                        "__wab_instance",
                        sty.docsPropsTableRow__dP3YW
                      )}
                    />
                  </React.Fragment>
                ),

                value: args.rows,
              })
            : null}
        </div>
      ) : null}
      {(hasVariant(variants, "showControls", "showControls") ? true : false) ? (
        <div
          data-plasmic-name={"rowsWithControl"}
          data-plasmic-override={overrides.rowsWithControl}
          className={classNames(projectcss.all, sty.rowsWithControl, {
            [sty.rowsWithControlshowControls]: hasVariant(
              variants,
              "showControls",
              "showControls"
            ),
          })}
        >
          {(hasVariant(variants, "showControls", "showControls") ? true : true)
            ? p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    {true ? (
                      <DocsPropsTableRow
                        className={classNames(
                          "__wab_instance",
                          sty.docsPropsTableRow___0PtEn
                        )}
                        controlType={"boolean" as const}
                        description={"boolean state"}
                        propName={"boolean"}
                        propType={"boolean"}
                      />
                    ) : null}

                    <DocsPropsTableRow
                      className={classNames(
                        "__wab_instance",
                        sty.docsPropsTableRow__yyw9C
                      )}
                      controlType={"text" as const}
                      description={"input text state"}
                      propName={"string"}
                    />

                    <DocsPropsTableRow
                      className={classNames(
                        "__wab_instance",
                        sty.docsPropsTableRow__c6KSr
                      )}
                      controlType={"choice" as const}
                    />

                    <DocsPropsTableRow
                      className={classNames(
                        "__wab_instance",
                        sty.docsPropsTableRow__rWfwe
                      )}
                      controlType={"renderable" as const}
                    />
                  </React.Fragment>
                ),

                value: args.rowsWithControl,
              })
            : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "rows", "rowsWithControl"],
  freeBox: ["freeBox"],
  rows: ["rows"],
  rowsWithControl: ["rowsWithControl"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  rows: "div";
  rowsWithControl: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocsPropsTable__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicDocsPropsTable__VariantsArgs;
  args?: PlasmicDocsPropsTable__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicDocsPropsTable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicDocsPropsTable__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicDocsPropsTable__ArgProps,
      internalVariantPropNames: PlasmicDocsPropsTable__VariantProps,
    });

    return PlasmicDocsPropsTable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocsPropsTable";
  } else {
    func.displayName = `PlasmicDocsPropsTable.${nodeName}`;
  }
  return func;
}

export const PlasmicDocsPropsTable = Object.assign(
  // Top-level PlasmicDocsPropsTable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    rows: makeNodeComponent("rows"),
    rowsWithControl: makeNodeComponent("rowsWithControl"),

    // Metadata about props expected for PlasmicDocsPropsTable
    internalVariantProps: PlasmicDocsPropsTable__VariantProps,
    internalArgProps: PlasmicDocsPropsTable__ArgProps,
  }
);

export default PlasmicDocsPropsTable;
/* prettier-ignore-end */
