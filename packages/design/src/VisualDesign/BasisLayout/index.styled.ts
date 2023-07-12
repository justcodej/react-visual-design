import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #ecebeb;
  .basis-layout-view {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 54px);
    overflow-x: hidden;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  padding: 0 10px;
  font-size: 20px;
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
`;
