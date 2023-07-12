export default {
  ['queryShopPage']: [
    {
      title: '店铺编号',
      dataIndex: 'shopCode',
    },
    {
      title: '店铺名称',
      dataIndex: 'shopName',
    },
  ],
  ['queryCardLinkPage']: [
    {
      title: '卡券编号',
      dataIndex: 'id',
    },
    {
      title: '卡券名称',
      dataIndex: 'cardName',
    },
  ],
  ['queryMallActivityPage']: [
    {
      title: '活动名称',
      dataIndex: 'name',
    },
  ],
  ['queryActivityPage']: [
    {
      title: '活动编号',
      dataIndex: 'activityId',
    },
    {
      title: '活动名称',
      dataIndex: 'activityName',
    },
    {
      title: '活动时间',
      dataIndex: 'startAndEndDate',
    },
  ],
  ['queryMallShopLink']: [
    {
      title: '店铺编号',
      dataIndex: 'shopCode',
    },
    {
      title: '店铺名称',
      dataIndex: 'shopName',
    },
  ],
  ['queryMallCommodityLink']: [
    {
      title: '商品编号',
      dataIndex: 'commodityCode',
    },
    {
      title: '商品名称',
      dataIndex: 'commodityName',
    },
  ],
  ['queryPindaoLink']: [
    {
      title: '模版编号',
      dataIndex: 'channelCode',
    },
    {
      title: '模版名称',
      dataIndex: 'channelName',
    },
  ],
  ['queryMallCategoryLink']: [
    {
      title: '名称',
      dataIndex: 'name',
    },
  ],
  ['queryPindaoTemplateLink']: [
    {
      title: '模版编号',
      dataIndex: 'polymerizeCode',
    },
    {
      title: '模版名称',
      dataIndex: 'polymerizeName',
    },
    {
      title: '模版名称',
      dataIndex: 'status',
      render(text: number) {
        return text === 1 ? '待启用' : '已启用';
      },
    },
  ],
};
