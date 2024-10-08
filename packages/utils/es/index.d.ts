import { ReactElement } from 'react';
export declare function attachPropertiesToComponent<C, P extends Record<string, any>>(
  component: C,
  properties: P,
): C & P;
export declare function reactUnmount(container: Element): boolean;
export declare const renderToBody: (element: ReactElement) => () => void;
export declare const codeMessage: {
  200: string;
  201: string;
  202: string;
  204: string;
  400: string;
  401: string;
  403: string;
  404: string;
  406: string;
  410: string;
  422: string;
  500: string;
  502: string;
  503: string;
  504: string;
};
export { default as request } from './request';
