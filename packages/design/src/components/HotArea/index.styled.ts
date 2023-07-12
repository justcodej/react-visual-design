import styled from 'styled-components';

export const DragContainer = styled.div`
  position: relative;
  overflow: hidden;
  .ant-image {
    width: 100%;
  }
`;

export const DragArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: 1px solid #f0f0f0;
  background-color: rgba(0, 0, 0, 0.2);
  user-select: none;
  .area-container-item {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-weight: bold;
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.6);
    border: 2px solid #1890ff;
    .controls {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
    }
  }
  .area-container-item.dashed {
    border-style: dashed;
  }
`;

export const FormArea = styled.div`
  margin-top: 10px;
  .ant-col {
    .label {
      display: flex;
      align-items: center;
      height: 34px;
    }
  }
`;
