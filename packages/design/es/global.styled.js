var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import { createGlobalStyle } from 'styled-components';
export var SettingsAnimationStyled = createGlobalStyle(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  // settings\u7684class\u52A8\u753B.\n  .settings-transition-enter {\n    transform: translateX(500px);\n  }\n  .settings-transition-enter-active {\n    transform: translateX(0);\n    transition: transform ease 300ms;\n  }\n  .settings-transition-exit {\n    transform: translateX(0);\n  }\n  .settings-transition-exit-active {\n    transform: translateX(500px);\n    transition: transform ease 300ms;\n  }\n',
    ])),
);
