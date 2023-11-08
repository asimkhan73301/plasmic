// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: sK-iPs7I1Z

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicBill.module.css"; // plasmic-import: sK-iPs7I1Z/css

import MinusIcon from "../plasmic_kit/PlasmicIcon__Minus"; // plasmic-import: dHjXz96374PLA/icon
import PlussvgIcon from "../q_4_icons/icons/PlasmicIcon__Plussvg"; // plasmic-import: sQKgd2GNr/icon

createPlasmicElementProxy;

export type PlasmicBill__VariantMembers = {
  type: "month" | "year";
  hideBasePrice: "hideBasePrice";
  hideSeatPrice: "hideSeatPrice";
};
export type PlasmicBill__VariantsArgs = {
  type?: SingleChoiceArg<"month" | "year">;
  hideBasePrice?: SingleBooleanChoiceArg<"hideBasePrice">;
  hideSeatPrice?: SingleBooleanChoiceArg<"hideSeatPrice">;
};
type VariantPropType = keyof PlasmicBill__VariantsArgs;
export const PlasmicBill__VariantProps = new Array<VariantPropType>(
  "type",
  "hideBasePrice",
  "hideSeatPrice"
);

export type PlasmicBill__ArgsType = {
  seatSubtotal?: React.ReactNode;
  total?: React.ReactNode;
  seatTitle?: React.ReactNode;
  seatDescription?: React.ReactNode;
  numSeats?: React.ReactNode;
  seatNoun?: React.ReactNode;
  baseTitle?: React.ReactNode;
  baseDescription?: React.ReactNode;
  baseSubtotal?: React.ReactNode;
};
type ArgPropType = keyof PlasmicBill__ArgsType;
export const PlasmicBill__ArgProps = new Array<ArgPropType>(
  "seatSubtotal",
  "total",
  "seatTitle",
  "seatDescription",
  "numSeats",
  "seatNoun",
  "baseTitle",
  "baseDescription",
  "baseSubtotal"
);

export type PlasmicBill__OverridesType = {
  root?: p.Flex<"div">;
  lessSeats?: p.Flex<"div">;
  moreSeats?: p.Flex<"button">;
};

export interface DefaultBillProps {
  seatSubtotal?: React.ReactNode;
  total?: React.ReactNode;
  seatTitle?: React.ReactNode;
  seatDescription?: React.ReactNode;
  numSeats?: React.ReactNode;
  seatNoun?: React.ReactNode;
  baseTitle?: React.ReactNode;
  baseDescription?: React.ReactNode;
  baseSubtotal?: React.ReactNode;
  type?: SingleChoiceArg<"month" | "year">;
  hideBasePrice?: SingleBooleanChoiceArg<"hideBasePrice">;
  hideSeatPrice?: SingleBooleanChoiceArg<"hideSeatPrice">;
  className?: string;
}

const $$ = {};

function PlasmicBill__RenderFunc(props: {
  variants: PlasmicBill__VariantsArgs;
  args: PlasmicBill__ArgsType;
  overrides: PlasmicBill__OverridesType;
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
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "hideBasePrice",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideBasePrice,
      },
      {
        path: "hideSeatPrice",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.hideSeatPrice,
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
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.roothideSeatPrice]: hasVariant(
            $state,
            "hideSeatPrice",
            "hideSeatPrice"
          ),
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__azp5F)}
      >
        <div
          data-plasmic-name={"lessSeats"}
          data-plasmic-override={overrides.lessSeats}
          className={classNames(projectcss.all, sty.lessSeats, {
            [sty.lessSeatstype_month]: hasVariant($state, "type", "month"),
          })}
        >
          <MinusIcon
            className={classNames(projectcss.all, sty.svg__p1GtK, {
              [sty.svgtype_month__p1GtKEdjdn]: hasVariant(
                $state,
                "type",
                "month"
              ),
            })}
            role={"img"}
          />
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__y5JyR)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___91Tox)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "10",
              value: args.numSeats,
              className: classNames(sty.slotTargetNumSeats),
            })}
            {p.renderPlasmicSlot({
              defaultContents: "seats",
              value: args.seatNoun,
            })}
          </p.Stack>
        </div>
        <button
          data-plasmic-name={"moreSeats"}
          data-plasmic-override={overrides.moreSeats}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.moreSeats
          )}
          ref={(ref) => {
            $refs["moreSeats"] = ref;
          }}
        >
          <PlussvgIcon
            className={classNames(projectcss.all, sty.svg__qGr4R)}
            role={"img"}
          />
        </button>
      </p.Stack>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vvxAi)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__huPEa, {
            [sty.freeBoxhideBasePrice__huPEaeg0JJ]: hasVariant(
              $state,
              "hideBasePrice",
              "hideBasePrice"
            ),
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__gqF13, {
              [sty.freeBoxhideBasePrice__gqF13Eg0JJ]: hasVariant(
                $state,
                "hideBasePrice",
                "hideBasePrice"
              ),
              [sty.freeBoxtype_month__gqF13Edjdn]: hasVariant(
                $state,
                "type",
                "month"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__rl9Jl)}>
              {p.renderPlasmicSlot({
                defaultContents: "1 Basic Team",
                value: args.baseTitle,
              })}
              {p.renderPlasmicSlot({
                defaultContents: "$20 x 1 team",
                value: args.baseDescription,
                className: classNames(sty.slotTargetBaseDescription),
              })}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___5SjCb)}>
              <div className={classNames(projectcss.all, sty.freeBox__bYx0T)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5E8Tn
                  )}
                >
                  {"$"}
                </div>
                {p.renderPlasmicSlot({
                  defaultContents: "20",
                  value: args.baseSubtotal,
                })}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lXggG,
                  {
                    [sty.texttype_year__lXggGtDiat]: hasVariant(
                      $state,
                      "type",
                      "year"
                    ),
                  }
                )}
              >
                {hasVariant($state, "type", "year") ? " / year" : " / month"}
              </div>
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__rWav, {
              [sty.freeBoxhideBasePrice__rWavEg0JJ]: hasVariant(
                $state,
                "hideBasePrice",
                "hideBasePrice"
              ),
              [sty.freeBoxhideSeatPrice__rWavEw2Iu]: hasVariant(
                $state,
                "hideSeatPrice",
                "hideSeatPrice"
              ),
              [sty.freeBoxtype_month__rWavEdjdn]: hasVariant(
                $state,
                "type",
                "month"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox___2IfV0)}>
              {p.renderPlasmicSlot({
                defaultContents: "10 Basic seats",
                value: args.seatTitle,
              })}
              {p.renderPlasmicSlot({
                defaultContents: "$15 x 10 seats",
                value: args.seatDescription,
                className: classNames(sty.slotTargetSeatDescription),
              })}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__pzNjL)}>
              <div className={classNames(projectcss.all, sty.freeBox__gb5TY)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6KagR
                  )}
                >
                  {"$"}
                </div>
                {p.renderPlasmicSlot({
                  defaultContents: "20",
                  value: args.seatSubtotal,
                })}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tFDgn,
                  {
                    [sty.texttype_year__tFDgntDiat]: hasVariant(
                      $state,
                      "type",
                      "year"
                    ),
                  }
                )}
              >
                {hasVariant($state, "type", "year") ? " / year" : " / month"}
              </div>
            </div>
          </div>
        </p.Stack>
        <div className={classNames(projectcss.all, sty.freeBox___2EnbQ)} />

        <div className={classNames(projectcss.all, sty.freeBox___266J7)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pAxv9,
              {
                [sty.texttype_month__pAxv9Edjdn]: hasVariant(
                  $state,
                  "type",
                  "month"
                ),
                [sty.texttype_year__pAxv9TDiat]: hasVariant(
                  $state,
                  "type",
                  "year"
                ),
              }
            )}
          >
            {hasVariant($state, "type", "year")
              ? "New yearly total "
              : hasVariant($state, "type", "month")
              ? "New monthly total "
              : "Total"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox___5MDgk)}>
            <div className={classNames(projectcss.all, sty.freeBox__ixJv)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___8Uqs
                )}
              >
                {"$"}
              </div>
              {p.renderPlasmicSlot({
                defaultContents: "15",
                value: args.total,
                className: classNames(sty.slotTargetTotal),
              })}
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__wgPbp,
                {
                  [sty.texttype_year__wgPbPtDiat]: hasVariant(
                    $state,
                    "type",
                    "year"
                  ),
                }
              )}
            >
              {hasVariant($state, "type", "year") ? " / year" : " / month"}
            </div>
          </div>
        </div>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "lessSeats", "moreSeats"],
  lessSeats: ["lessSeats"],
  moreSeats: ["moreSeats"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  lessSeats: "div";
  moreSeats: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBill__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicBill__VariantsArgs;
    args?: PlasmicBill__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicBill__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicBill__ArgsType,
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
          internalArgPropNames: PlasmicBill__ArgProps,
          internalVariantPropNames: PlasmicBill__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicBill__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBill";
  } else {
    func.displayName = `PlasmicBill.${nodeName}`;
  }
  return func;
}

export const PlasmicBill = Object.assign(
  // Top-level PlasmicBill renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    lessSeats: makeNodeComponent("lessSeats"),
    moreSeats: makeNodeComponent("moreSeats"),

    // Metadata about props expected for PlasmicBill
    internalVariantProps: PlasmicBill__VariantProps,
    internalArgProps: PlasmicBill__ArgProps,
  }
);

export default PlasmicBill;
/* prettier-ignore-end */
