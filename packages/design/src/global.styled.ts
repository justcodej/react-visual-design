import { createGlobalStyle } from 'styled-components';

export const SettingsAnimationStyled = createGlobalStyle`
  // settings的class动画.
  .settings-transition-enter {
    transform: translateX(500px);
  }
  .settings-transition-enter-active {
    transform: translateX(0);
    transition: transform ease 300ms;
  }
  .settings-transition-exit {
    transform: translateX(0);
  }
  .settings-transition-exit-active {
    transform: translateX(500px);
    transition: transform ease 300ms;
  }
`;
