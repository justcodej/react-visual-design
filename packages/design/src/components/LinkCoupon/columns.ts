import type { ColumnsType } from 'antd/es/table';
import { DataType } from './index';
import moment from 'moment';

const columns: ColumnsType<DataType> = [
  {
    title: '优惠券名称',
    dataIndex: 'templateName',
  },
  {
    title: '优惠券有效期',
    dataIndex: 'startTime',
    render(_: string, { startTime, endTime, validTimeType, intervalDays, validDays }: DataType) {
      return validTimeType === 1
        ? `${moment(new Date(startTime)).format('YYYY/MM/DD HH:mm:ss')} - ${moment(
            new Date(endTime),
          ).format('YYYY/MM/DD HH:mm:ss')}`
        : `领取后${intervalDays === 0 ? '即时' : `${intervalDays} '天'`}生效,有效期${validDays}天`;
    },
  },
];

export default columns;
