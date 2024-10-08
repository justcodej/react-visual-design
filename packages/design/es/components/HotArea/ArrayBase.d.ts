import React from 'react';
import { JSXComponent } from '@formily/react';
declare type ItemTyps = {
  index: number;
  record: any;
};
declare const _default: React.FC<{
  children?: React.ReactNode;
}> & {
  Item: React.FC<React.PropsWithChildren<ItemTyps>>;
  mixin: <T extends JSXComponent>(target: T) => T;
};
export default _default;
