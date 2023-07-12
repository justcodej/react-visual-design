export default {
  'POST /api/v1/pindao/polymerize/link/queryTabLink': {
    code: 0,
    data: [
      {
        name: '频道模版',
        url: 'queryPindaoTemplateLink',
        subLinkTab: null,
      },
      {
        name: '商城',
        url: null,
        subLinkTab: [
          {
            name: '商品详情',
            url: 'queryMallCommodityLink',
            subLinkTab: null,
          },
          {
            name: '商品分类',
            url: 'queryMallCategoryLink',
            subLinkTab: null,
          },
          {
            name: '店铺详情',
            url: 'queryMallShopLink',
            subLinkTab: null,
          },
        ],
      },
      {
        name: '营销活动',
        url: null,
        subLinkTab: [
          {
            name: '九宫格抽奖',
            url: 'queryActivityPage',
            subLinkTab: null,
          },
          {
            name: '天天特惠',
            url: 'queryMallActivityPage',
            subLinkTab: null,
          },
        ],
      },
      {
        name: '卡券',
        url: null,
        subLinkTab: [
          {
            name: '卡券详情',
            url: 'queryCardLinkPage',
            subLinkTab: null,
          },
        ],
      },
      {
        name: '商圈',
        url: null,
        subLinkTab: [
          {
            name: '店铺详情',
            url: 'queryShopPage',
            subLinkTab: null,
          },
        ],
      },
      {
        name: '自定义链接',
        url: '',
        subLinkTab: null,
      },
    ],
    message: '操作成功',
  },
};
