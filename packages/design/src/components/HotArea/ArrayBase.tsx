import React, { FC, PropsWithChildren, createContext, useContext } from 'react';
import { attachPropertiesToComponent } from '@kp-react-visual-design/utils';
import { ISchema, JSXComponent, useField, useFieldSchema } from '@formily/react';
import { DeleteOutlined } from '@ant-design/icons';
import { ArrayField } from '@formily/core';

type ItemTyps = {
  index: number;
  record: any;
};

type ArrayBaseType = {};

const ArrayBaseContext = createContext<{ schema: ISchema; field: ArrayField } | null>(null);
const ItemContext = createContext<ItemTyps | null>(null);

const ArrayBase: FC<PropsWithChildren<ArrayBaseType>> = ({ children }) => {
  const field = useField<ArrayField>();
  const schema = useFieldSchema();
  return (
    <ArrayBaseContext.Provider value={{ field, schema }}>{children}</ArrayBaseContext.Provider>
  );
};

const Item: FC<PropsWithChildren<ItemTyps>> = ({ children, ...props }) => {
  return <ItemContext.Provider value={props}>{children}</ItemContext.Provider>;
};

const Remove = () => {
  const self = useField();
  const array = useContext(ArrayBaseContext);
  const item = useContext(ItemContext);
  return (
    <DeleteOutlined
      onClick={(e) => {
        if (self?.disabled) return;
        e.stopPropagation();
        array?.field?.remove?.(item!.index);
      }}
    />
  );
};

const Index = () => {
  return <span></span>;
};

const mixin: <T extends JSXComponent>(target: T) => T = (target: any) => {
  target.Index = Index;
  target.Remove = Remove;
  return target;
};

export default attachPropertiesToComponent(ArrayBase, {
  Item,
  mixin,
});
