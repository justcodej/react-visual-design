/// <reference types="react" />
export declare const Wrapper: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const Header: import('styled-components').StyledComponent<'div', any, {}, never>;
export declare const SettingsGlobalStyled: import('styled-components').GlobalStyleComponent<
  {},
  import('styled-components').DefaultTheme
>;
export declare const FormLayoutStyled: import('styled-components').StyledComponent<
  import('react').FC<
    import('react').PropsWithChildren<import('@formily/antd').IFormLayoutProps>
  > & {
    useFormLayout: () => import('@formily/antd').IFormLayoutContext;
    useFormDeepLayout: () => import('@formily/antd').IFormLayoutContext;
    useFormShallowLayout: () => import('@formily/antd').IFormLayoutContext;
  },
  any,
  {},
  never
>;
