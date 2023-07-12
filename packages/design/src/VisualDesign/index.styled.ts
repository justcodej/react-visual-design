import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalStyled = styled(Modal)`
  top: 0;
  max-width: none;
  padding-bottom: 0;

  .ant-modal-body {
    padding: 0;
  }
`;
