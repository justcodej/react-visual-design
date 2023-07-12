import React, { FC, PropsWithChildren, ReactNode, DragEvent } from 'react';
import { Conatainer } from './index.styled';

type DragTypes = {
  initialList: any[];
  render: ({ item, index }: { item: any; index: number }) => ReactNode;
  onDragStart?: (e: DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: DragEvent<HTMLDivElement>) => void;
};

const Drag: FC<PropsWithChildren<DragTypes>> = ({
  initialList,
  render,
  onDragStart,
  onDragEnd,
}) => {
  const handleDragStart = (widgetName: string, e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('widgetName', widgetName);
    onDragStart?.(e);
  };

  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = 'none';
    e.dataTransfer.clearData();
    onDragEnd?.(e);
  };

  return (
    <Conatainer>
      {initialList.map((item, index) => (
        <div
          className="drag-box"
          draggable
          key={index}
          onDragStart={(e: DragEvent<HTMLDivElement>) => handleDragStart(item.en, e)}
          onDragEnd={(e: DragEvent<HTMLDivElement>) => handleDragEnd(e)}
        >
          {render({ item, index })}
        </div>
      ))}
    </Conatainer>
  );
};

export default Drag;
