import { FC, PropsWithChildren, ReactNode, DragEvent } from 'react';
declare type DragTypes = {
  initialList: any[];
  render: ({ item, index }: { item: any; index: number }) => ReactNode;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: DragEvent<HTMLDivElement>) => void;
};
declare const Drag: FC<PropsWithChildren<DragTypes>>;
export default Drag;
