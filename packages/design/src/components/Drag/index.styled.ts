import styled from 'styled-components';
import { WidgetItemStyled } from '../../VisualDesign/CompositePanel/index.styled';

export const Conatainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .drag-box {
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }
  .drag-box:nth-child(3n) {
    ${WidgetItemStyled} {
      border-right: none;
    }
  }
  .drag-box:nth-last-child(-n + 3) {
  }
`;
