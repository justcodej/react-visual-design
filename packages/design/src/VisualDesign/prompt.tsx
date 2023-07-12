import React, { FC, useEffect, useState } from 'react';
import { renderToBody } from '@kp-react-visual-design/utils';
import type { VisualDesignProps, SelectedItemTypes } from './context';
import VisualDesign from './index';

export type VisualDesignValue = {
  type: string;
};

export function prompt(props: VisualDesignProps) {
  return new Promise<SelectedItemTypes[] | null>((resolve) => {
    const Wrapper: FC = () => {
      const [visible, setVisible] = useState(false);

      const reactUnmount = () => {
        setVisible(false);
        unmount();
      };

      useEffect(() => {
        setVisible(true);
        window.addEventListener('popstate', reactUnmount, false);
        return () => {
          window.removeEventListener('popstate', reactUnmount);
        };
      }, []);

      return (
        <VisualDesign
          {...props}
          open={visible}
          onOk={(e: SelectedItemTypes[]) => {
            props?.onOk?.(e);
            setVisible(false);
            resolve(e);
          }}
          afterClose={() => {
            unmount();
            resolve(null);
          }}
          onCancel={() => {
            props?.onCancel?.();
            setVisible(false);
          }}
        />
      );
    };
    const unmount = renderToBody(<Wrapper />);
  });
}
