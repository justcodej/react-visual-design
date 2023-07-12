import { Col } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const StyledCol = styled(Col)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span.label {
    width: 90px;
    padding-right: 10px;
    text-align: right;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
