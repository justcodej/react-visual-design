var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
export var DragContainer = styled.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  position: relative;\n  overflow: hidden;\n  .ant-image {\n    width: 100%;\n  }\n',
    ])),
);
export var DragArea = styled.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  border: 1px solid #f0f0f0;\n  background-color: rgba(0, 0, 0, 0.2);\n  user-select: none;\n  .area-container-item {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #333;\n    font-weight: bold;\n    font-size: 40px;\n    background-color: rgba(255, 255, 255, 0.6);\n    border: 2px solid #1890ff;\n    .controls {\n      position: absolute;\n      top: 0;\n      right: 0;\n      display: flex;\n    }\n  }\n  .area-container-item.dashed {\n    border-style: dashed;\n  }\n',
    ])),
);
export var FormArea = styled.div(
  _templateObject3 ||
    (_templateObject3 = _taggedTemplateLiteral([
      '\n  margin-top: 10px;\n  .ant-col {\n    .label {\n      display: flex;\n      align-items: center;\n      height: 34px;\n    }\n  }\n',
    ])),
);
