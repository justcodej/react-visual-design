import React from 'react';
import styled from 'styled-components';
import { Collapse, CollapseProps } from 'antd';

export const Wrapper = styled.div`
  width: 301px;
  overflow-y: auto;
  background-color: #fff;
  border-right: 1px solid #d9d9d9;
`;

export const WidgetItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  box-shadow: none;
  cursor: grab;
  transition: all 0.2s ease;
  width: 100px;
  height: 88px;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  .icon {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
    -webkit-user-drag: none;
  }
  &:hover {
    color: dodgerblue;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CollapseStyled: React.FC<CollapseProps> = styled(Collapse)`
  border: none;
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
`;

export const PanelStyled = styled(Collapse.Panel)`
  > .ant-collapse-header {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
