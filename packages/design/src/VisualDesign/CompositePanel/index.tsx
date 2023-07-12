import React, { FC, useContext, useMemo } from 'react';
import { Empty } from 'antd';
import VisualDesignContext, { WidgetTypes } from '../context';
import { Drag } from '../../components';
import { Wrapper, WidgetItemStyled, CollapseStyled, PanelStyled } from './index.styled';

export type CompositePanelProps = {};

const CompositePanel: FC<CompositePanelProps> = () => {
  const { onChangeState, initialWidgets, isOnLoad, loading } = useContext(VisualDesignContext);

  const businessWidgets = useMemo(
    () => initialWidgets.filter((item: WidgetTypes) => item.type === 'business'),
    [initialWidgets.length],
  );
  const sceneWidgets = useMemo(
    () => initialWidgets.filter((item: WidgetTypes) => item.type === 'scene'),
    [initialWidgets.length],
  );
  const functionsWidgets = useMemo(
    () => initialWidgets.filter((item: WidgetTypes) => item.type === 'functions'),
    [initialWidgets.length],
  );

  return (
    <Wrapper>
      <CollapseStyled defaultActiveKey={['1', '2', '3']}>
        <PanelStyled header="业务类" key="1">
          {!!businessWidgets.length ? (
            <Drag
              initialList={businessWidgets}
              render={({ item }: { item: WidgetTypes }) => {
                return item.visible ? (
                  <WidgetItemStyled>
                    <img className="icon" src={item.icon} alt="" />
                    <div className="name">{item.name}</div>
                  </WidgetItemStyled>
                ) : null;
              }}
              onDragStart={() => isOnLoad && !loading && onChangeState({ isDragging: true })}
              onDragEnd={() => isOnLoad && !loading && onChangeState({ isDragging: false })}
            ></Drag>
          ) : (
            <Empty description="暂无数据" />
          )}
        </PanelStyled>
        <PanelStyled header="场景类" key="2">
          {!!sceneWidgets.length ? (
            <Drag
              initialList={sceneWidgets}
              render={({ item }: { item: WidgetTypes }) => {
                return (
                  <WidgetItemStyled>
                    <img className="icon" src={item.icon} alt="" />
                    <div className="name">{item.name}</div>
                  </WidgetItemStyled>
                );
              }}
              onDragStart={() => isOnLoad && !loading && onChangeState({ isDragging: true })}
              onDragEnd={() => isOnLoad && !loading && onChangeState({ isDragging: false })}
            ></Drag>
          ) : (
            <Empty description="暂无数据" />
          )}
        </PanelStyled>
        <PanelStyled header="功能类" key="3">
          {!!functionsWidgets.length ? (
            <Drag
              initialList={functionsWidgets}
              render={({ item }: { item: WidgetTypes }) => {
                return (
                  <WidgetItemStyled>
                    <img className="icon" src={item.icon} alt="" />
                    <div className="name">{item.name}</div>
                  </WidgetItemStyled>
                );
              }}
              onDragStart={() => isOnLoad && !loading && onChangeState({ isDragging: true })}
              onDragEnd={() => isOnLoad && !loading && onChangeState({ isDragging: false })}
            ></Drag>
          ) : (
            <Empty description="暂无数据" />
          )}
        </PanelStyled>
      </CollapseStyled>
    </Wrapper>
  );
};

export default CompositePanel;
