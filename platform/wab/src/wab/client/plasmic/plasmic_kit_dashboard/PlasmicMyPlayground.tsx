// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: KVpOSX15wJ

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
import DefaultLayout from "../../components/dashboard/DefaultLayout"; // plasmic-import: nSkQWLjK-B/component
import WorkspaceSection from "../../components/dashboard/WorkspaceSection"; // plasmic-import: 5cdjGaqBQ4/component
import ProjectListItem from "../../components/ProjectListItem"; // plasmic-import: 2FvZipCkyxl/component
import NavTeamSection from "../../components/dashboard/NavTeamSection"; // plasmic-import: VqaN_WL-stA/component
import NavWorkspaceButton from "../../components/dashboard/NavWorkspaceButton"; // plasmic-import: Cma6XahJmS/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicMyPlayground.module.css"; // plasmic-import: KVpOSX15wJ/css

import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: MHEeMLIhlB/icon

createPlasmicElementProxy;

export type PlasmicMyPlayground__VariantMembers = {};
export type PlasmicMyPlayground__VariantsArgs = {};
type VariantPropType = keyof PlasmicMyPlayground__VariantsArgs;
export const PlasmicMyPlayground__VariantProps = new Array<VariantPropType>();

export type PlasmicMyPlayground__ArgsType = {};
type ArgPropType = keyof PlasmicMyPlayground__ArgsType;
export const PlasmicMyPlayground__ArgProps = new Array<ArgPropType>();

export type PlasmicMyPlayground__OverridesType = {
  root?: p.Flex<"div">;
  defaultLayout?: p.Flex<typeof DefaultLayout>;
  workspaceSection?: p.Flex<typeof WorkspaceSection>;
  navTeamSection?: p.Flex<typeof NavTeamSection>;
};

export interface DefaultMyPlaygroundProps {
  className?: string;
}

const $$ = {};

function PlasmicMyPlayground__RenderFunc(props: {
  variants: PlasmicMyPlayground__VariantsArgs;
  args: PlasmicMyPlayground__ArgsType;
  overrides: PlasmicMyPlayground__OverridesType;
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
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          <DefaultLayout
            data-plasmic-name={"defaultLayout"}
            data-plasmic-override={overrides.defaultLayout}
            className={classNames("__wab_instance", sty.defaultLayout)}
            hideNewProjectButton={true}
            navigation={"myProjects"}
            teams={
              <NavTeamSection
                data-plasmic-name={"navTeamSection"}
                data-plasmic-override={overrides.navTeamSection}
                className={classNames("__wab_instance", sty.navTeamSection)}
              />
            }
          >
            <WorkspaceSection
              data-plasmic-name={"workspaceSection"}
              data-plasmic-override={overrides.workspaceSection}
              className={classNames("__wab_instance", sty.workspaceSection)}
              personalWorkspace={true}
            />
          </DefaultLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "defaultLayout", "workspaceSection", "navTeamSection"],
  defaultLayout: ["defaultLayout", "workspaceSection", "navTeamSection"],
  workspaceSection: ["workspaceSection"],
  navTeamSection: ["navTeamSection"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  defaultLayout: typeof DefaultLayout;
  workspaceSection: typeof WorkspaceSection;
  navTeamSection: typeof NavTeamSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMyPlayground__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMyPlayground__VariantsArgs;
    args?: PlasmicMyPlayground__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMyPlayground__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMyPlayground__ArgsType,
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
          internalArgPropNames: PlasmicMyPlayground__ArgProps,
          internalVariantPropNames: PlasmicMyPlayground__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicMyPlayground__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMyPlayground";
  } else {
    func.displayName = `PlasmicMyPlayground.${nodeName}`;
  }
  return func;
}

export const PlasmicMyPlayground = Object.assign(
  // Top-level PlasmicMyPlayground renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    defaultLayout: makeNodeComponent("defaultLayout"),
    workspaceSection: makeNodeComponent("workspaceSection"),
    navTeamSection: makeNodeComponent("navTeamSection"),

    // Metadata about props expected for PlasmicMyPlayground
    internalVariantProps: PlasmicMyPlayground__VariantProps,
    internalArgProps: PlasmicMyPlayground__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: "",
    },
  }
);

export default PlasmicMyPlayground;
/* prettier-ignore-end */
