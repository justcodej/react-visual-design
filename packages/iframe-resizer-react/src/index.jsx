import iframeResize from 'iframe-resizer/js/iframeResizer';
import React, { useEffect, useImperativeHandle, useRef } from 'react';

import filterIframeAttribs from './filter-iframe-attribs';

const IframeResizer = (props) => {
  const { title, forwardRef, ...rest } = props;
  const iframeProps = filterIframeAttribs(rest);
  const iframeRef = useRef(null);

  const onClose = () => {
    return !iframeRef.current;
  };

  // This hook is only run once, as once iframeResizer is bound, it will
  // deal with changes to the element and does not need recalling
  useEffect(() => {
    const iframe = iframeRef.current;

    iframeResize({ ...rest, onClose }, iframe);

    return () => iframe.iFrameResizer && iframe.iFrameResizer.removeListeners();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useImperativeHandle(forwardRef, () => ({
    resize: () => iframeRef.current.iFrameResizer.resize(),
    moveToAnchor: (anchor) => iframeRef.current.iFrameResizer.moveToAnchor(anchor),
    sendMessage: (message, targetOrigin) => {
      iframeRef.current.iFrameResizer.sendMessage(message, targetOrigin);
    },
  }));

  return <iframe title={title} {...iframeProps} ref={iframeRef} />;
};

IframeResizer.defaultProps = {
  title: 'iframe',
};

export default IframeResizer;
