import { createContext } from 'react';
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

export type MessageChildDataProps = {
  schema?: ISchema;
  defaultData?: any;
  activeIndex: number;
  widgetName: string;
  selectedList: SelectedItemTypes[];
};

export type SelectedItemTypes = {
  id: string | number;
  data?: any;
  name: string;
};

export type VisualDesignProps = {
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

export type queryApiProps = {
  query: string;
  linktabs: string;
};

export type ReceiveFnTypes =
  | 'onChangeState'
  | 'onDropAddItem'
  | 'onClickEditItem'
  | 'onClickDelete';

export type MessageEventDataProps = Pick<
  VisualDesignStateTypes,
  'activeIndex' | 'widgetName' | 'selectedList' | 'schema' | 'defaultData'
>;

export type MessageEventProps = {
  method: ReceiveFnTypes;
  data: MessageEventDataProps;
};

export type HeaderTypes = { token: string };

export type WidgetTypes = {
  visible: boolean;
  en: string;
  type: string;
  name: string;
  icon: string;
  hoverIcon: string;
  data: any;
  schema: ISchema;
};

export type VisualDesignContextTypes = VisualDesignStateTypes &
  Pick<VisualDesignProps, 'queryApi' | 'appCode'> & {
    onChangeState: (e: Partial<VisualDesignStateTypes>) => void;
    onDropAddItem?: (e: MessageEventDataProps) => void;
    onClickEditItem?: (e: MessageEventDataProps) => void;
    onClickDelete?: (e: MessageEventDataProps) => void;
  };

export const initialState: VisualDesignStateTypes = {
  activeIndex: 0,
  isDragging: false,
  selectedList: [],
  widgetName: '',
  refresh: 0,
  isPreviewing: false,
  initialWidgets: [],
  isOnLoad: false,
};

export default createContext<VisualDesignContextTypes>({
  // Context可能包含props值和state值
  ...initialState,
  onChangeState: () => {},
  queryApi: {
    query: '',
    linktabs: '',
  },
  appCode: 'blm',
});
