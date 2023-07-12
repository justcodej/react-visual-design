import styled from 'styled-components';

export const PickBtn = styled.div`
  width: 360px;
  display: block;
  display: flex;
  align-items: center;
  a {
    display: block;
    max-width: 340px;
    overflow: hidden; //超出的文本隐藏
    white-space: nowrap;
    text-overflow: ellipsis; //不换行
    cursor: pointer;
  }
`;
