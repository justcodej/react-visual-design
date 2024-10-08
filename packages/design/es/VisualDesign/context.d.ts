/// <reference types="react" />
import { ISchema } from '@formily/react';
import { Form } from '@formily/core';
export interface VisualDesignStateTypes {
  activeIndex: number;
  schema?: ISchema;
  isDragging: boolean;
  selectedList: SelectedItemTypes[];
  widgetName: string;
  refresh: number;
  isPreviewing: boolean;
  formData?: Form<any>;
  initialWidgets: WidgetTypes[];
  headers?: HeaderTypes;
  isOnLoad: boolean;
  loading?: boolean;
  defaultData?: any;
  record?: any;
}
export declare type MessageChildDataProps = {
  schema?: ISchema;
  defaultData?: any;
  activeIndex: number;
  widgetName: string;
  selectedList: SelectedItemTypes[];
};
export declare type SelectedItemTypes = {
  id: string | number;
  data?: any;
  name: string;
};
export declare type VisualDesignProps = {
  className?: string;
  onOk?: (selectedList: SelectedItemTypes[]) => void;
  onCancel?: () => void;
  afterClose?: () => void;
  open?: boolean;
  template?: SelectedItemTypes[];
  loading?: boolean;
  headers?: HeaderTypes;
  queryApi: queryApiProps;
  appCode: string;
  record?: any;
};
export declare type queryApiProps = {
  query: string;
  linktabs: string;
};
export declare type ReceiveFnTypes =
  | 'onChangeState'
  | 'onDropAddItem'
  | 'onClickEditItem'
  | 'onClickDelete';
export declare type MessageEventDataProps = Pick<
  VisualDesignStateTypes,
  'activeIndex' | 'widgetName' | 'selectedList' | 'schema' | 'defaultData'
>;
export declare type MessageEventProps = {
  method: ReceiveFnTypes;
  data: MessageEventDataProps;
};
export declare type HeaderTypes = {
  token: string;
};
export declare type WidgetTypes = {
  visible: boolean;
  en: string;
  type: string;
  name: string;
  icon: string;
  hoverIcon: string;
  data: any;
  schema: ISchema;
};
export declare type VisualDesignContextTypes = VisualDesignStateTypes &
  Pick<VisualDesignProps, 'queryApi' | 'appCode'> & {
    onChangeState: (e: Partial<VisualDesignStateTypes>) => void;
    onDropAddItem?: (e: MessageEventDataProps) => void;
    onClickEditItem?: (e: MessageEventDataProps) => void;
    onClickDelete?: (e: MessageEventDataProps) => void;
  };
export declare const initialState: VisualDesignStateTypes;
declare const _default: import('react').Context<VisualDesignContextTypes>;
export default _default;
