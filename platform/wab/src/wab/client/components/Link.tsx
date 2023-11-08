// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  DefaultLinkProps,
  PlasmicLink,
} from "../plasmic/plasmic_kit_dashboard/PlasmicLink";

interface LinkProps extends DefaultLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  hide?: boolean;
}

function Link(props: LinkProps) {
  if (props.hide) {
    return null;
  }

  return (
    <PlasmicLink
      href={props.href}
      target={"_blank"}
      text={props.text}
      icon={props.icon}
    />
  );
}

export default Link;
