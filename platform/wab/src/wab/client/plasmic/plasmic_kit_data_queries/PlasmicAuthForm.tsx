// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9csusiyEETC5n9fFKLeYNK
// Component: 1ooaehe0m9
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  SingleChoiceArg,
  StrictProps,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as React from "react";
import KeyValueRow from "../../../../KeyValueRow"; // plasmic-import: udG9wNYCNL/component
import Select from "../../components/widgets/Select"; // plasmic-import: j_4IQyOWK2b/component
import TrashIcon from "../plasmic_kit/PlasmicIcon__Trash"; // plasmic-import: 7bxap5bzcUODa/icon
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import sty from "./PlasmicAuthForm.module.css"; // plasmic-import: 1ooaehe0m9/css
import projectcss from "./plasmic_plasmic_kit_data_queries.module.css"; // plasmic-import: 9csusiyEETC5n9fFKLeYNK/projectcss

export type PlasmicAuthForm__VariantMembers = {
  type: "basicAuth" | "bearerToken" | "apiKey";
};

export type PlasmicAuthForm__VariantsArgs = {
  type?: SingleChoiceArg<"basicAuth" | "bearerToken" | "apiKey">;
};

type VariantPropType = keyof PlasmicAuthForm__VariantsArgs;
export const PlasmicAuthForm__VariantProps = new Array<VariantPropType>("type");

export type PlasmicAuthForm__ArgsType = {};
type ArgPropType = keyof PlasmicAuthForm__ArgsType;
export const PlasmicAuthForm__ArgProps = new Array<ArgPropType>();

export type PlasmicAuthForm__OverridesType = {
  root?: p.Flex<"div">;
  keyValueRow?: p.Flex<typeof KeyValueRow>;
  typeSelect?: p.Flex<typeof Select>;
  usernameRow?: p.Flex<typeof KeyValueRow>;
  passwordRow?: p.Flex<typeof KeyValueRow>;
  keyRow?: p.Flex<typeof KeyValueRow>;
  valueRow?: p.Flex<typeof KeyValueRow>;
  tokenRow?: p.Flex<typeof KeyValueRow>;
};

export interface DefaultAuthFormProps {
  type?: SingleChoiceArg<"basicAuth" | "bearerToken" | "apiKey">;
  className?: string;
}

function PlasmicAuthForm__RenderFunc(props: {
  variants: PlasmicAuthForm__VariantsArgs;
  args: PlasmicAuthForm__ArgsType;
  overrides: PlasmicAuthForm__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

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
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root
      )}
    >
      <KeyValueRow
        data-plasmic-name={"keyValueRow"}
        data-plasmic-override={overrides.keyValueRow}
        className={classNames("__wab_instance", sty.keyValueRow, {
          [sty.keyValueRowtype_apiKey]: hasVariant(variants, "type", "apiKey"),
        })}
        icon={
          <TrashIcon
            className={classNames(projectcss.all, sty.svg__jMMoc)}
            role={"img"}
          />
        }
        keyLabel={"Type"}
        readOnlyKey={true}
        readOnlyValue={true}
        value={
          <Select
            data-plasmic-name={"typeSelect"}
            data-plasmic-override={overrides.typeSelect}
            className={classNames("__wab_instance", sty.typeSelect)}
          />
        }
      />

      {(hasVariant(variants, "type", "basicAuth") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__ci4Kb, {
            [sty.freeBoxtype_apiKey__ci4KbRdmIv]: hasVariant(
              variants,
              "type",
              "apiKey"
            ),

            [sty.freeBoxtype_basicAuth__ci4KBmyDbF]: hasVariant(
              variants,
              "type",
              "basicAuth"
            ),
          })}
        >
          <KeyValueRow
            data-plasmic-name={"usernameRow"}
            data-plasmic-override={overrides.usernameRow}
            className={classNames("__wab_instance", sty.usernameRow)}
            icon={
              <TrashIcon
                className={classNames(projectcss.all, sty.svg__n30J)}
                role={"img"}
              />
            }
            keyLabel={"Username"}
            readOnlyKey={true}
          />

          <KeyValueRow
            data-plasmic-name={"passwordRow"}
            data-plasmic-override={overrides.passwordRow}
            className={classNames("__wab_instance", sty.passwordRow)}
            icon={
              <TrashIcon
                className={classNames(projectcss.all, sty.svg__e5TjH)}
                role={"img"}
              />
            }
            keyLabel={"Password"}
            readOnlyKey={true}
          />
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "type", "apiKey") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uKtff, {
            [sty.freeBoxtype_apiKey__uKtffRdmIv]: hasVariant(
              variants,
              "type",
              "apiKey"
            ),

            [sty.freeBoxtype_basicAuth__uKtffmyDbF]: hasVariant(
              variants,
              "type",
              "basicAuth"
            ),
          })}
        >
          <KeyValueRow
            data-plasmic-name={"keyRow"}
            data-plasmic-override={overrides.keyRow}
            className={classNames("__wab_instance", sty.keyRow)}
            icon={
              <TrashIcon
                className={classNames(projectcss.all, sty.svg__x7PsH)}
                role={"img"}
              />
            }
            keyLabel={"Key"}
            readOnlyKey={true}
          />

          <KeyValueRow
            data-plasmic-name={"valueRow"}
            data-plasmic-override={overrides.valueRow}
            className={classNames("__wab_instance", sty.valueRow, {
              [sty.valueRowtype_apiKey]: hasVariant(variants, "type", "apiKey"),
            })}
            icon={
              <TrashIcon
                className={classNames(projectcss.all, sty.svg__cPaob)}
                role={"img"}
              />
            }
            keyLabel={"Value"}
            readOnlyKey={true}
          />
        </p.Stack>
      ) : null}
      {(hasVariant(variants, "type", "bearerToken") ? true : false) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___5Hc6U, {
            [sty.freeBoxtype_basicAuth___5Hc6UmyDbF]: hasVariant(
              variants,
              "type",
              "basicAuth"
            ),

            [sty.freeBoxtype_bearerToken___5Hc6U9Yuxw]: hasVariant(
              variants,
              "type",
              "bearerToken"
            ),
          })}
        >
          <KeyValueRow
            data-plasmic-name={"tokenRow"}
            data-plasmic-override={overrides.tokenRow}
            className={classNames("__wab_instance", sty.tokenRow, {
              [sty.tokenRowtype_bearerToken]: hasVariant(
                variants,
                "type",
                "bearerToken"
              ),
            })}
            icon={
              <TrashIcon
                className={classNames(projectcss.all, sty.svg__mvjx)}
                role={"img"}
              />
            }
            keyLabel={"Token"}
            readOnlyKey={true}
          />
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "keyValueRow",
    "typeSelect",
    "usernameRow",
    "passwordRow",
    "keyRow",
    "valueRow",
    "tokenRow",
  ],

  keyValueRow: ["keyValueRow", "typeSelect"],
  typeSelect: ["typeSelect"],
  usernameRow: ["usernameRow"],
  passwordRow: ["passwordRow"],
  keyRow: ["keyRow"],
  valueRow: ["valueRow"],
  tokenRow: ["tokenRow"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  keyValueRow: typeof KeyValueRow;
  typeSelect: typeof Select;
  usernameRow: typeof KeyValueRow;
  passwordRow: typeof KeyValueRow;
  keyRow: typeof KeyValueRow;
  valueRow: typeof KeyValueRow;
  tokenRow: typeof KeyValueRow;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthForm__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> = {
  // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicAuthForm__VariantsArgs;
  args?: PlasmicAuthForm__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicAuthForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicAuthForm__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAuthForm__ArgProps,
      internalVariantPropNames: PlasmicAuthForm__VariantProps,
    });

    return PlasmicAuthForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthForm";
  } else {
    func.displayName = `PlasmicAuthForm.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthForm = Object.assign(
  // Top-level PlasmicAuthForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    keyValueRow: makeNodeComponent("keyValueRow"),
    typeSelect: makeNodeComponent("typeSelect"),
    usernameRow: makeNodeComponent("usernameRow"),
    passwordRow: makeNodeComponent("passwordRow"),
    keyRow: makeNodeComponent("keyRow"),
    valueRow: makeNodeComponent("valueRow"),
    tokenRow: makeNodeComponent("tokenRow"),

    // Metadata about props expected for PlasmicAuthForm
    internalVariantProps: PlasmicAuthForm__VariantProps,
    internalArgProps: PlasmicAuthForm__ArgProps,
  }
);

export default PlasmicAuthForm;
/* prettier-ignore-end */
