export default {
  ['marketing/cardRecommend/getCardRecommend']: [
    {
      title: '推荐ID',
      dataIndex: 'id',
    },
    {
      title: '推荐名称',
      dataIndex: 'name',
    },
    {
      title: '商品数量',
      dataIndex: 'num',
    },
  ],
  ['mall/recommend/findRecommendCateList']: [
    {
      title: '推荐编号',
      dataIndex: 'recommendCode',
      width: 350,
    },
    {
      title: '推荐名称',
      dataIndex: 'recommendName',
    },
    {
      title: '推荐类型',
      dataIndex: 'recommendType',
      render(text: string) {
        return text === '1'
          ? '精品推荐'
          : text === '3'
          ? '爆款好物'
          : text === '4'
          ? '商品瀑布流'
          : '爆款美食';
      },
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      width: 200,
    },
  ],
};
