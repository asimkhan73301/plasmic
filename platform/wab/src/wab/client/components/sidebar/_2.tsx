// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";
import {
  Default_2Props,
  Plasmic_2,
} from "../../plasmic/plasmic_kit_left_pane/Plasmic_2";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface _2Props extends Omit<Default_2Props, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from Default_2Props altogether and have
// total control over the props for your component.
interface _2Props extends Default_2Props {}

function _2_(props: _2Props, ref: HTMLElementRefOf<"div">) {
  // Use Plasmic_2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all _2Props here, but feel free
  // to do whatever works for you.

  return <Plasmic_2 root={{ ref }} {...props} />;
}

const _2 = React.forwardRef(_2_);
export default _2;
