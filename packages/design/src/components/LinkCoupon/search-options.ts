import { optionsType } from '../TableSearch';

const searchOptions: optionsType[] = [
  {
    componentName: 'Input',
    name: 'condition',
    label: '搜索',
    placeholder: '请输入优惠券名称或批次号',
  },
  {
    componentName: 'Select',
    name: 'validTimeType',
    label: '有效期类型',
    defaultValue: -1,
    options: [
      {
        label: '全部',
        value: -1,
      },
      {
        label: '固定时间段',
        value: 1,
      },
      {
        label: '领取后生效',
        value: 2,
      },
    ],
  },
  {
    componentName: 'RangePicker',
    name: 'date',
    label: '有效期',
  },
];

export default searchOptions;
