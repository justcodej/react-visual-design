import React from 'react';
import { VisualDesignStateTypes, MessageEventDataProps, VisualDesignProps } from './context';
declare class VisualDesign extends React.Component<VisualDesignProps, VisualDesignStateTypes> {
  constructor(props: any);
  static defaultProps: {
    record: {};
    open: boolean;
    className: string;
    onOk: () => void;
    onCancel: () => void;
    afterClose: () => void;
    template: never[];
    loading: boolean;
    headers: {};
    queryApi: {
      query: string;
      category: string;
      shop: string;
      commodity: string;
      pindao: string;
    };
    appCode: string;
  };
  componentDidMount(): void;
  /**
   * 设置初始模版、表单数据
   */
  fetchIntialWidgets: () => Promise<any>;
  /**
   * 通过postMessage修改state之后必须调用此函数，不然存在state滞后的问题
   * @param
   * @return viod
   */
  createFormData: () => void;
  onChangeState: (state: Partial<VisualDesignStateTypes>) => Promise<void>;
  onClickEditItem: (dataMessage: MessageEventDataProps) => Promise<void>;
  onClickDelete: (dataMessage: MessageEventDataProps) => void;
  onDropAddItem: (dataMessage: MessageEventDataProps) => Promise<void>;
  handleSubmit: () => Promise<any>;
  render(): JSX.Element;
}
export default VisualDesign;
