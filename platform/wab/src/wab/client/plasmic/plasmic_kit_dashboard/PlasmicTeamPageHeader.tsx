// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: pcPdf_yULU3

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
import EditableResourceName from "../../components/EditableResourceName"; // plasmic-import: UttGK3xVrb/component
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component
import ProjectsFilter from "../../components/dashboard/ProjectsFilter"; // plasmic-import: mdX7wFJOmP/component

import { useScreenVariants as useScreenVariants_2DzYbdw5Xtx } from "../PlasmicGlobalVariant__Screen"; // plasmic-import: 2dzYbdw5Xtx/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicTeamPageHeader.module.css"; // plasmic-import: pcPdf_yULU3/css

import AppssvgIcon from "../q_4_icons/icons/PlasmicIcon__Appssvg"; // plasmic-import: FzrInIPnx/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import GearIcon from "../plasmic_kit/PlasmicIcon__Gear"; // plasmic-import: ZmVZmXEc9f_SR/icon

createPlasmicElementProxy;

export type PlasmicTeamPageHeader__VariantMembers = {
  accessLevel: "cantEdit" | "none";
};
export type PlasmicTeamPageHeader__VariantsArgs = {
  accessLevel?: SingleChoiceArg<"cantEdit" | "none">;
};
type VariantPropType = keyof PlasmicTeamPageHeader__VariantsArgs;
export const PlasmicTeamPageHeader__VariantProps = new Array<VariantPropType>(
  "accessLevel"
);

export type PlasmicTeamPageHeader__ArgsType = {
  numMembers?: React.ReactNode;
  numProjects?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTeamPageHeader__ArgsType;
export const PlasmicTeamPageHeader__ArgProps = new Array<ArgPropType>(
  "numMembers",
  "numProjects"
);

export type PlasmicTeamPageHeader__OverridesType = {
  root?: p.Flex<"div">;
  editableName?: p.Flex<typeof EditableResourceName>;
  newWorkspaceButton?: p.Flex<typeof Button>;
  settingsButton?: p.Flex<typeof Button>;
  filter?: p.Flex<typeof ProjectsFilter>;
};

export interface DefaultTeamPageHeaderProps {
  numMembers?: React.ReactNode;
  numProjects?: React.ReactNode;
  accessLevel?: SingleChoiceArg<"cantEdit" | "none">;
  className?: string;
}

const $$ = {};

function PlasmicTeamPageHeader__RenderFunc(props: {
  variants: PlasmicTeamPageHeader__VariantsArgs;
  args: PlasmicTeamPageHeader__ArgsType;
  overrides: PlasmicTeamPageHeader__OverridesType;
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
        path: "accessLevel",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.accessLevel,
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_2DzYbdw5Xtx(),
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
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootaccessLevel_none]: hasVariant($state, "accessLevel", "none"),
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__nhPk)}>
        <EditableResourceName
          data-plasmic-name={"editableName"}
          data-plasmic-override={overrides.editableName}
          cantEdit={
            hasVariant($state, "accessLevel", "none")
              ? true
              : hasVariant($state, "accessLevel", "cantEdit")
              ? true
              : undefined
          }
          className={classNames("__wab_instance", sty.editableName, {
            [sty.editableNameaccessLevel_cantEdit]: hasVariant(
              $state,
              "accessLevel",
              "cantEdit"
            ),
            [sty.editableNameaccessLevel_none]: hasVariant(
              $state,
              "accessLevel",
              "none"
            ),
          })}
          name={"Untitled organization"}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__k3C1, {
            [sty.freeBoxaccessLevel_none__k3C1WoEqv]: hasVariant(
              $state,
              "accessLevel",
              "none"
            ),
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__onsFf,
              {
                [sty.textaccessLevel_none__onsFfwoEqv]: hasVariant(
                  $state,
                  "accessLevel",
                  "none"
                ),
              }
            )}
          >
            {"Organization"}
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wGb9A
            )}
          >
            {"\u2022"}
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox___7MQa1, {
              [sty.freeBoxaccessLevel_none___7MQa1WoEqv]: hasVariant(
                $state,
                "accessLevel",
                "none"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "6",
              value: args.numMembers,
              className: classNames(sty.slotTargetNumMembers),
            })}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__pZMa1,
                {
                  [sty.textaccessLevel_none__pZMa1WoEqv]: hasVariant(
                    $state,
                    "accessLevel",
                    "none"
                  ),
                }
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#706F6C" }}
                >
                  {"members"}
                </span>
              </React.Fragment>
            </div>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__btKYk
            )}
          >
            {"\u2022"}
          </div>
          <div
            className={classNames(projectcss.all, sty.freeBox__amFi8, {
              [sty.freeBoxaccessLevel_none__amFi8WoEqv]: hasVariant(
                $state,
                "accessLevel",
                "none"
              ),
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "4",
              value: args.numProjects,
              className: classNames(sty.slotTargetNumProjects),
            })}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vivl7
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#706F6C" }}
                >
                  {"projects"}
                </span>
              </React.Fragment>
            </div>
          </div>
        </p.Stack>
      </div>
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hp5G2)}
      >
        <Button
          data-plasmic-name={"newWorkspaceButton"}
          data-plasmic-override={overrides.newWorkspaceButton}
          className={classNames("__wab_instance", sty.newWorkspaceButton, {
            [sty.newWorkspaceButtonaccessLevel_cantEdit]: hasVariant(
              $state,
              "accessLevel",
              "cantEdit"
            ),
            [sty.newWorkspaceButtonaccessLevel_none]: hasVariant(
              $state,
              "accessLevel",
              "none"
            ),
          })}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__lPle9)}
              role={"img"}
            />
          }
          font={"bold"}
          startIcon={
            <AppssvgIcon
              className={classNames(projectcss.all, sty.svg___0Naz)}
              role={"img"}
            />
          }
          type={["clear"]}
          withIcons={["startIcon"]}
        >
          {"New workspace"}
        </Button>
        <Button
          data-plasmic-name={"settingsButton"}
          data-plasmic-override={overrides.settingsButton}
          className={classNames("__wab_instance", sty.settingsButton, {
            [sty.settingsButtonaccessLevel_cantEdit]: hasVariant(
              $state,
              "accessLevel",
              "cantEdit"
            ),
            [sty.settingsButtonaccessLevel_none]: hasVariant(
              $state,
              "accessLevel",
              "none"
            ),
          })}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__pt2Ru)}
              role={"img"}
            />
          }
          font={"bold"}
          startIcon={
            <GearIcon
              className={classNames(projectcss.all, sty.svg__ptiqv)}
              role={"img"}
            />
          }
          type={["clear"]}
          withIcons={["startIcon"]}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__c3Zy,
              {
                [sty.textaccessLevel_cantEdit__c3Zy2LLy]: hasVariant(
                  $state,
                  "accessLevel",
                  "cantEdit"
                ),
              }
            )}
          >
            {"Manage organization"}
          </div>
        </Button>
        <ProjectsFilter
          data-plasmic-name={"filter"}
          data-plasmic-override={overrides.filter}
          className={classNames("__wab_instance", sty.filter, {
            [sty.filteraccessLevel_cantEdit]: hasVariant(
              $state,
              "accessLevel",
              "cantEdit"
            ),
            [sty.filteraccessLevel_none]: hasVariant(
              $state,
              "accessLevel",
              "none"
            ),
          })}
        />
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "editableName",
    "newWorkspaceButton",
    "settingsButton",
    "filter",
  ],
  editableName: ["editableName"],
  newWorkspaceButton: ["newWorkspaceButton"],
  settingsButton: ["settingsButton"],
  filter: ["filter"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  editableName: typeof EditableResourceName;
  newWorkspaceButton: typeof Button;
  settingsButton: typeof Button;
  filter: typeof ProjectsFilter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeamPageHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeamPageHeader__VariantsArgs;
    args?: PlasmicTeamPageHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeamPageHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeamPageHeader__ArgsType,
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
          internalArgPropNames: PlasmicTeamPageHeader__ArgProps,
          internalVariantPropNames: PlasmicTeamPageHeader__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicTeamPageHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeamPageHeader";
  } else {
    func.displayName = `PlasmicTeamPageHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicTeamPageHeader = Object.assign(
  // Top-level PlasmicTeamPageHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    editableName: makeNodeComponent("editableName"),
    newWorkspaceButton: makeNodeComponent("newWorkspaceButton"),
    settingsButton: makeNodeComponent("settingsButton"),
    filter: makeNodeComponent("filter"),

    // Metadata about props expected for PlasmicTeamPageHeader
    internalVariantProps: PlasmicTeamPageHeader__VariantProps,
    internalArgProps: PlasmicTeamPageHeader__ArgProps,
  }
);

export default PlasmicTeamPageHeader;
/* prettier-ignore-end */
