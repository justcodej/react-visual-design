export default {
  ['mall/recommend/findRecommendCateList']: [
    {
      componentName: 'Input',
      name: 'filter',
      label: '搜索',
      placeholder: '请输入推荐名称/编号',
    },
    {
      componentName: 'Select',
      name: 'recommendType',
      label: '推荐类型',
      defaultValue: -1,
      options: [
        {
          label: '全部',
          value: -1,
        },
        {
          label: '精品推荐',
          value: 1,
        },
        {
          label: '爆款好物',
          value: 3,
        },
        {
          label: '商品瀑布流',
          value: 4,
        },
        {
          label: '爆款美食',
          value: 5,
        },
      ],
    },
    {
      componentName: 'RangePicker',
      name: 'date', // name为日期选择时可以不必填，单独处理
      label: '创建时间',
    },
  ],
  ['marketing/cardRecommend/getCardRecommend']: [
    {
      componentName: 'Input',
      name: 'filter',
      label: '搜索',
      placeholder: '请输入推荐名称/编号',
    },
    {
      componentName: 'RangePicker',
      name: 'date', // name为日期选择时可以不必填，单独处理
      label: '创建时间',
    },
  ],
};
