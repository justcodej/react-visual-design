import { FC, PropsWithChildren } from 'react';
declare type HotAreaProps = {
  value: valueProps[];
};
declare type valueProps = {
  link: string;
  left: number;
  top: number;
  width: number;
  height: number;
};
declare const HotArea: FC<PropsWithChildren<HotAreaProps>>;
export default HotArea;
