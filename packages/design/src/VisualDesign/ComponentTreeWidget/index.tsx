import React, { FC, useContext, useEffect, useRef } from 'react';
import IframeResizer, { IFrameObject } from '@kp-react-visual-design/iframe-resizer-react';
import VisualDesignContext, { MessageEventProps } from '../context';
import { iframeURL } from '../../consts';
import { Wrapper } from './index.styled';
import { useDeepEffect } from '../../custom-hooks';

export type ComponentTreeWidgetProps = {};

const ComponentTreeWidget: FC<ComponentTreeWidgetProps> = () => {
  const {
    selectedList,
    isDragging,
    activeIndex,
    refresh,
    isPreviewing,
    initialWidgets,
    appCode,
    isOnLoad,
    loading,
    ...rest
  } = useContext(VisualDesignContext);

  const iframeRef = useRef<IFrameObject | null>(null);

  const onMessage = (dataMessage: { iframe: HTMLIFrameElement; message: MessageEventProps }) => {
    rest[dataMessage.message.method]?.(dataMessage.message.data);
  };

  useDeepEffect(() => {
    if (!isOnLoad) return;
    const postMessageData = {
      selectedList,
      isDragging,
      activeIndex,
      isPreviewing,
      initialWidgets,
      appCode,
    };
    iframeRef?.current?.sendMessage(postMessageData);
  }, [selectedList, isDragging, activeIndex, isPreviewing, initialWidgets, appCode, isOnLoad]);

  useEffect(() => {
    const iframeDOM = document.querySelector('iframe');
    iframeDOM?.addEventListener('load', () => rest.onChangeState({ isOnLoad: true }), false);
    return () => {
      iframeDOM?.removeEventListener('load', () => rest.onChangeState({ isOnLoad: false }));
    };
  }, []);

  return (
    <Wrapper>
      <IframeResizer
        forwardRef={iframeRef}
        heightCalculationMethod="bodyScroll"
        checkOrigin={false}
        src={iframeURL}
        width={375}
        frameBorder="0"
        minHeight={667}
        onMessage={onMessage}
      />
    </Wrapper>
  );
};

export default ComponentTreeWidget;
