var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
import styled from 'styled-components';
import { Modal } from 'antd';
export var ModalStyled = styled(Modal)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  top: 0;\n  max-width: none;\n  padding-bottom: 0;\n\n  .ant-modal-body {\n    padding: 0;\n  }\n',
    ])),
);
