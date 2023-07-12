import type { ColumnsType } from 'antd/es/table';
import { DataType } from './index';

const columns: ColumnsType<DataType> = [
  {
    title: '商品编号',
    dataIndex: 'commodityCode',
  },
  {
    title: '商品名称',
    dataIndex: 'commodityName',
  },
];

export default columns;
