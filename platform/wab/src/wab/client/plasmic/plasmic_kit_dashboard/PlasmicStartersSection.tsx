// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: DWsPKkiyzx1

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
import StarterGroup from "../../components/StarterGroup"; // plasmic-import: u6dq5eydCj/component
import StarterProject from "../../components/StarterProject"; // plasmic-import: CCsDeqqYeoM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicStartersSection.module.css"; // plasmic-import: DWsPKkiyzx1/css

import CheckIcon from "../plasmic_kit/PlasmicIcon__Check"; // plasmic-import: pawp1H5YxB_3B/icon
import image3YherfIxkolNxf from "../plasmic_kit_design_system/images/image3.svg"; // plasmic-import: yherfIxkolNXF/picture
import eyesvgZxKyHRa6Q6Pa from "../plasmic_kit_design_system/images/eyesvg.svg"; // plasmic-import: Zx-kyHRa6Q6PA/picture

createPlasmicElementProxy;

export type PlasmicStartersSection__VariantMembers = {};
export type PlasmicStartersSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicStartersSection__VariantsArgs;
export const PlasmicStartersSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicStartersSection__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStartersSection__ArgsType;
export const PlasmicStartersSection__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicStartersSection__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultStartersSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicStartersSection__RenderFunc(props: {
  variants: PlasmicStartersSection__VariantsArgs;
  args: PlasmicStartersSection__ArgsType;
  overrides: PlasmicStartersSection__OverridesType;
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
        sty.root
      )}
    >
      {p.renderPlasmicSlot({
        defaultContents: (
          <React.Fragment>
            <StarterGroup
              className={classNames("__wab_instance", sty.starterGroup__g32NQ)}
              container={
                <React.Fragment>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__hvHeI
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__oJ8Q
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___6U014
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                    withDescrip={true}
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__t5DxM)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__jkll
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___2Tmh8
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__eGzqG
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__jHibf)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__cgKj8
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__lvJoZ
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__w8Krl
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__zZsjC)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__xhWu2
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__koA9T
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___2Cdv5
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__fTm1S)}
                      role={"img"}
                    />
                  </StarterProject>
                </React.Fragment>
              }
              heading={"Subheading"}
            />

            <StarterGroup
              className={classNames("__wab_instance", sty.starterGroup__x0DLr)}
              container={
                <React.Fragment>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject___1GtwY
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___1HdDz
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__thVVe
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg___0Zos5)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__y0PMl
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__cutZp
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___1IG3
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg___070Je)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__qctqe
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__xaDzf
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__f2WkY
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__kEw4)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__nkRgO
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__wmze0
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___9GgMs
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__aKr8I)}
                      role={"img"}
                    />
                  </StarterProject>
                </React.Fragment>
              }
              heading={"Subheading"}
            />

            <StarterGroup
              className={classNames("__wab_instance", sty.starterGroup__njQuU)}
              container={
                <React.Fragment>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject___8JEqo
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__hiMth
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__gk2R
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__cptvr)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__zjdmM
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__p2H9Q
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__kjFld
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__hpn6R)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__akBzo
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__qaj6Z
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__fxH0D
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__x3Dp4)}
                      role={"img"}
                    />
                  </StarterProject>
                  <StarterProject
                    className={classNames(
                      "__wab_instance",
                      sty.starterProject__gl1NI
                    )}
                    image={"withImage"}
                    instruction={"Click to duplicate this project"}
                    name={'Play "Plasmic Levels"'}
                    preview={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img___9PkWj
                        )}
                        src={image3YherfIxkolNxf}
                      />
                    }
                    previewIcon={
                      <img
                        alt={""}
                        className={classNames(
                          projectcss.all,
                          projectcss.img,
                          sty.img__ugUu
                        )}
                        loading={"lazy"}
                        src={eyesvgZxKyHRa6Q6Pa}
                      />
                    }
                  >
                    <CheckIcon
                      className={classNames(projectcss.all, sty.svg__zoKwa)}
                      role={"img"}
                    />
                  </StarterProject>
                </React.Fragment>
              }
              heading={"Subheading"}
            />
          </React.Fragment>
        ),
        value: args.children,
      })}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStartersSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStartersSection__VariantsArgs;
    args?: PlasmicStartersSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStartersSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStartersSection__ArgsType,
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
          internalArgPropNames: PlasmicStartersSection__ArgProps,
          internalVariantPropNames: PlasmicStartersSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStartersSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStartersSection";
  } else {
    func.displayName = `PlasmicStartersSection.${nodeName}`;
  }
  return func;
}

export const PlasmicStartersSection = Object.assign(
  // Top-level PlasmicStartersSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicStartersSection
    internalVariantProps: PlasmicStartersSection__VariantProps,
    internalArgProps: PlasmicStartersSection__ArgProps,
  }
);

export default PlasmicStartersSection;
/* prettier-ignore-end */
