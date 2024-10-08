var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
import { WidgetItemStyled } from '../../VisualDesign/CompositePanel/index.styled';
export var Conatainer = styled.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  flex-wrap: wrap;\n  .drag-box {\n    box-sizing: border-box;\n    cursor: pointer;\n    user-select: none;\n  }\n  .drag-box:nth-child(3n) {\n    ',
      ' {\n      border-right: none;\n    }\n  }\n  .drag-box:nth-last-child(-n + 3) {\n  }\n',
    ])),
  WidgetItemStyled,
);
