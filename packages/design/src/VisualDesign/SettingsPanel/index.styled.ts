import styled, { createGlobalStyle } from 'styled-components';
import { FormLayout } from '@formily/antd';

export const Wrapper = styled.div`
  width: 500px;
  overflow-y: auto;
  background-color: #fff;
  border-left: 1px solid #d9d9d9;
`;

export const Header = styled.div`
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  font-size: 16px;
  line-height: 30px;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;
  .anticon {
    cursor: pointer;
  }
  .anticon:hover {
    color: #333;
  }
`;

export const SettingsGlobalStyled = createGlobalStyle`
  .mb-10 {
    margin-bottom: 10px;
  }
`;

export const FormLayoutStyled = styled(FormLayout)`
  padding: 5px;
`;
