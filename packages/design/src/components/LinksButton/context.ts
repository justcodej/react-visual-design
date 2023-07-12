import { createContext } from 'react';
import { TabsProps } from 'antd/es/tabs';
import type { TableRowSelection } from 'antd/es/table/interface';
import type { PayloadTypes } from './index';

type TreeTabsProps = Omit<TabsProps, 'items'> & {
  rowSelection?: TableRowSelection<any>;
  loading?: boolean;
  dataSource?: any[];
  activeKey: string;
  totalCount?: number;
  payload?: PayloadTypes;
  onChangePayload?: (values: any) => void;
  onChange?: (value: string) => void;
  onSearch?: () => void;
  onReset?: () => void;
  onPaginationChange?: (page: number, pageSize: number) => void;
  value?: string;
};

export default createContext<TreeTabsProps>({
  activeKey: 'queryPindaoLink',
});
