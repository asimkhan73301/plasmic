import { registerArrayPropType } from "./ArrayPropType";
import { registerBooleanPropType } from "./BooleanPropType";
import { registerCardPickerPropType } from "./CardPickerPropType";
import { registerChoicePropType } from "./ChoicePropType";
import { registerClassPropType } from "./ClassPropType";
import { registerCodePropType } from "./CodePropType";
import { registerColorPropType } from "./ColorPropType";
import { registerCustomPropType } from "./CustomPropType";
import { registerDataSelectorPropType } from "./DataSelectorPropType";
import { registerEventHandlerPropType } from "./EventHandlerPropType";
import { registerFunctionPropType } from "./FunctionPropType";
import { registerGraphQLPropType } from "./GraphQLPropType";
import { registerImageUrlPropType } from "./ImageUrlPropType";
import { registerNumberPropType } from "./NumberPropType";
import { registerObjectPropType } from "./ObjectPropType";
import { registerRichTextPropType } from "./RichTextPropType";
import { registerStringPropType } from "./StringPropType";
import { registerThemeResetClassPropType } from "./ThemeResetClassPropType";
import { registerTplPropType } from "./TplPropType";

export function registerAllPropTypes() {
  registerCodePropType();
  registerStringPropType();
  registerRichTextPropType();
  registerCardPickerPropType();
  registerClassPropType();
  registerColorPropType();
  registerThemeResetClassPropType();
  registerNumberPropType();
  registerChoicePropType();
  registerDataSelectorPropType();
  registerBooleanPropType();
  registerImageUrlPropType();
  registerEventHandlerPropType();
  registerCustomPropType();
  registerGraphQLPropType();
  registerFunctionPropType();
  registerTplPropType();
  registerArrayPropType();
  registerObjectPropType();
}
