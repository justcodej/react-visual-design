export default {
  'POST /api/v1/pindao/polymerize/default/queryPolymerizeDefault': {
    code: 0,
    data: {
      components: [
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  image: {
                    'x-component': 'FileManage',
                    'x-decorator': 'FormItem',
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    type: 'string',
                    title: '图片',
                  },
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                maxItems: 8,
                'x-component': 'HotArea',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    link: {
                      'x-component': 'LinksButton',
                      'x-decorator': 'FormItem',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                          required: true,
                        },
                      ],
                      type: 'string',
                    },
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              image: '',
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110548%E7%83%AD%E5%8C%BA2.png?path=0,392,698',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110547%E7%83%AD%E5%8C%BA1.png?path=0,392,697',
          name: '热区',
          en: 'HotArea',
          type: 'functions',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    type: 'object',
                    properties: {
                      code: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 32,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测代码',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '页面全局配置',
                },
                type: 'object',
                properties: {
                  topImage: {
                    default:
                      'https://bosscdn.otosaas.com/test/20220812/20220812113301top-bg.png?path=0,478',
                    'x-decorator': 'FormItem',
                    'x-component': 'FileManage',
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onBlur',
                      },
                    ],
                    'x-index': 1,
                    type: 'string',
                    title: '顶部背景图',
                  },
                  city: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Cascader',
                    'x-reactions': [
                      "{{useAsyncCitys('https://fa.otosaas.com/json/allCity.json')}}",
                    ],
                    'x-component-props': {
                      multiple: true,
                      showCheckedStrategy: 'SHOW_CHILD',
                      placeholder: '请选择城市',
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                      },
                    ],
                    'x-index': 2,
                    type: 'string',
                    title: '城市选择',
                  },
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入页面标题',
                      maxLength: 8,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 0,
                    type: 'string',
                    title: '页面标题',
                  },
                  bodyStyle: {
                    'x-index': 3,
                    type: 'object',
                    properties: {
                      backgroundColor: {
                        default: '#F9FAFB',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                          placeholder: '请输入页面背景色',
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                          },
                        ],
                        type: 'string',
                        title: '页面背景色',
                      },
                    },
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                code: '',
                is: false,
              },
            },
            dataSource: {
              topImage:
                'https://bosscdn.otosaas.com/test/20220812/20220812113301top-bg.png?path=0,478',
              name: '页面名称',
              bodyStyle: {
                backgroundColor: '#F9FAFB',
              },
              pathUrl: '',
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192459%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A72%E5%A4%87%E4%BB%BD.png?path=0,392,424',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192454%E9%A1%B5%E9%9D%A2%E5%B1%9E%E6%80%A71%E5%A4%87%E4%BB%BD.png?path=0,392,423',
          name: '页面全局配置',
          en: 'Header',
          type: 'functions',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
            },
          },
          orderType: 'weizhang',
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                monitorName: '',
                is: false,
              },
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110534%E8%BD%A6%E4%B8%BB2.png?path=0,392,691',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110531%E8%BD%A6%E4%B8%BB1.png?path=0,392,690',
          name: '车主',
          en: 'Owner',
          type: 'scene',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
            },
          },
          orderType: 'shopcloud',
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                monitorName: '',
                is: false,
              },
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192345%E9%99%84%E8%BF%91%E5%BA%97%E9%93%BA2%E5%A4%87%E4%BB%BD.png?path=0,392,410',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192340%E9%99%84%E8%BF%91%E5%BA%97%E9%93%BA1%E5%A4%87%E4%BB%BD.png?path=0,392,409',
          name: '附近商圈',
          en: 'LocalShopping',
          type: 'scene',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  relationStyle: {
                    default: 1,
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-display': "{{$self.value === 3 ? 'visible' : 'hidden'}}",
                        },
                      },
                      target: '*(dataSource.pathUrl, dataSource.imgUrl)',
                    },
                    'x-index': 0,
                    type: 'number',
                    title: '组件样式',
                    enum: [
                      {
                        label: '单搜索',
                        value: 4,
                      },
                      {
                        label: '单定位',
                        value: 1,
                      },
                      {
                        label: '定位 + 搜索',
                        value: 2,
                      },
                      {
                        label: '定位 + 搜索 + 跳转',
                        value: 3,
                      },
                    ],
                  },
                  monitor: {
                    'x-index': 1,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  title: '搜索配置',
                },
                type: 'object',
                properties: {
                  imgUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'FileManage',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    type: 'string',
                    title: '图片',
                    'x-index': 1,
                  },
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-display':
                            "{{ $values.basicAttribute.relationStyle === 1 ? 'hidden' : 'visible' }}",
                        },
                      },
                    },
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入搜索栏引导文案',
                      maxLength: 10,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    title: '引导文案',
                    'x-index': 0,
                  },
                  pathUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'LinksButton',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onInput',
                        required: true,
                      },
                    ],
                    type: 'string',
                    title: '跳转链接',
                    'x-index': 2,
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              relationStyle: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: {
              imgUrl: '',
              name: '',
              pathUrl: '',
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192449%E5%95%86%E5%93%81%E6%90%9C%E7%B4%A22%E5%A4%87%E4%BB%BD.png?path=0,392,422',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192445%E5%95%86%E5%93%81%E6%90%9C%E7%B4%A21%E5%A4%87%E4%BB%BD.png?path=0,392,421',
          name: '定位',
          en: 'SearchInput',
          sort: 1,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                maxItems: 8,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    imgUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'FileManage',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        upload: '/api/v1/material/material/upload',
                        query: '/api/v1/material/material/query',
                        save: '/api/v1/material/material/save',
                        update: '/api/v1/material/material/update',
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 4,
                      type: 'string',
                      title: '图片',
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入图片名称',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 3,
                      type: 'string',
                      title: '图片名称',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinksButton',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                        },
                      ],
                      'x-index': 5,
                      type: 'string',
                      title: '跳转链接',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 7 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192408%E8%BD%AE%E6%92%AD%E5%9B%BE2%E5%A4%87%E4%BB%BD.png?path=0,392,414',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192402%E8%BD%AE%E6%92%AD%E5%9B%BE1%E5%A4%87%E4%BB%BD.png?path=0,392,413',
          name: '轮播',
          en: 'Carousel',
          sort: 2,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                'x-index': 0,
                type: 'object',
                properties: {
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-display': "{{$self.value === 1 ? 'visible' : 'hidden'}}",
                        },
                      },
                      target: 'dataSource.searchInput',
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    'x-index': 0,
                    type: 'number',
                    title: '显示样式',
                    enum: [
                      {
                        label: '显示搜索',
                        value: 1,
                      },
                      {
                        label: '不显示搜索',
                        value: 0,
                      },
                    ],
                  },
                  monitor: {
                    'x-index': 1,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-index': 1,
                type: 'object',
                properties: {
                  searchInput: {
                    'x-decorator': 'Card',
                    'x-decorator-props': {
                      className: 'mb-10',
                      title: '搜索配置',
                    },
                    'x-index': 0,
                    type: 'object',
                    properties: {
                      basicAttribute: {
                        'x-index': 0,
                        type: 'object',
                        properties: {
                          relationStyle: {
                            default: 1,
                            'x-decorator': 'FormItem',
                            'x-component': 'Select',
                            'x-reactions': {
                              fulfill: {
                                schema: {
                                  'x-display': "{{$self.value === 3 ? 'visible' : 'hidden'}}",
                                },
                              },
                              target:
                                '*(dataSource.searchInput.dataSource.pathUrl, dataSource.searchInput.dataSource.imgUrl)',
                            },
                            'x-index': 0,
                            type: 'number',
                            title: '组件样式',
                            enum: [
                              {
                                label: '单搜索',
                                value: 4,
                              },
                              {
                                label: '单定位',
                                value: 1,
                              },
                              {
                                label: '定位 + 搜索',
                                value: 2,
                              },
                              {
                                label: '定位 + 搜索 + 跳转',
                                value: 3,
                              },
                            ],
                          },
                        },
                      },
                      dataSource: {
                        'x-index': 1,
                        type: 'object',
                        properties: {
                          imgUrl: {
                            default: '',
                            'x-decorator': 'FormItem',
                            'x-component': 'FileManage',
                            'x-decorator-props': {
                              wrapperCol: 18,
                              labelCol: 6,
                            },
                            'x-component-props': {
                              upload: '/api/v1/material/material/upload',
                              query: '/api/v1/material/material/query',
                              save: '/api/v1/material/material/save',
                              update: '/api/v1/material/material/update',
                            },
                            'x-validator': [
                              {
                                format: 'url',
                                triggerType: 'onBlur',
                                required: true,
                              },
                            ],
                            'x-index': 1,
                            type: 'string',
                            title: '图片',
                          },
                          name: {
                            'x-decorator': 'FormItem',
                            'x-component': 'Input',
                            'x-reactions': {
                              fulfill: {
                                schema: {
                                  'x-display':
                                    "{{ $values.dataSource.searchInput.basicAttribute.relationStyle === 1 ? 'hidden' : 'visible' }}",
                                },
                              },
                            },
                            'x-component-props': {
                              showCount: true,
                              placeholder: '请输入搜索栏引导文案',
                              maxLength: 10,
                            },
                            'x-validator': [
                              {
                                triggerType: 'onBlur',
                                required: true,
                              },
                            ],
                            'x-index': 0,
                            title: '引导文案',
                          },
                          pathUrl: {
                            'x-decorator': 'FormItem',
                            'x-component': 'LinksButton',
                            'x-decorator-props': {
                              wrapperCol: 18,
                              labelCol: 6,
                            },
                            'x-validator': [
                              {
                                format: 'url',
                                triggerType: 'onInput',
                                required: true,
                              },
                            ],
                            'x-index': 2,
                            type: 'string',
                            title: '跳转链接',
                          },
                        },
                      },
                    },
                  },
                  swiper: {
                    maxItems: 8,
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayCards',
                    'x-component-props': {
                      title: '轮播列表',
                    },
                    'x-index': 1,
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        imgUrl: {
                          'x-decorator': 'FormItem',
                          'x-component': 'FileManage',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            upload: '/api/v1/material/material/upload',
                            query: '/api/v1/material/material/query',
                            save: '/api/v1/material/material/save',
                            update: '/api/v1/material/material/update',
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '图片',
                        },
                        name: {
                          'x-decorator': 'FormItem',
                          'x-component': 'Input',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            showCount: true,
                            placeholder: '请输入图片名称',
                            maxLength: 6,
                          },
                          'x-validator': [
                            {
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '图片名称',
                        },
                        index: {
                          'x-component': 'ArrayCards.Index',
                          type: 'void',
                        },
                        pathUrl: {
                          'x-decorator': 'FormItem',
                          'x-component': 'LinksButton',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onInput',
                            },
                          ],
                          type: 'string',
                          title: '跳转链接',
                        },
                        moveDown: {
                          'x-component': 'ArrayCards.MoveDown',
                          type: 'void',
                          'x-index': 2,
                        },
                        remove: {
                          'x-component': 'ArrayCards.Remove',
                          type: 'void',
                          'x-index': 0,
                        },
                        moveUp: {
                          'x-component': 'ArrayCards.MoveUp',
                          type: 'void',
                          'x-index': 1,
                        },
                      },
                    },
                    required: true,
                    properties: {
                      addition: {
                        'x-component': 'ArrayCards.Addition',
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-disabled': '{{ $values.dataSource.length > 7 }}',
                            },
                          },
                        },
                        type: 'void',
                        title: '添加条目',
                      },
                    },
                  },
                  icons: {
                    minItems: 4,
                    maxItems: 5,
                    'x-decorator': 'FormItem',
                    'x-component': 'ArrayCards',
                    'x-component-props': {
                      title: '图标列表',
                    },
                    'x-index': 2,
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        iconLabel: {
                          'x-decorator': 'FormItem',
                          'x-component': 'Input',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            showCount: true,
                            placeholder: '请输入icon标签',
                            maxLength: 6,
                          },
                          'x-validator': [
                            {
                              triggerType: 'onBlur',
                            },
                          ],
                          type: 'string',
                          title: 'icon标签',
                        },
                        imgUrl: {
                          'x-decorator': 'FormItem',
                          'x-component': 'FileManage',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            upload: '/api/v1/material/material/upload',
                            query: '/api/v1/material/material/query',
                            save: '/api/v1/material/material/save',
                            update: '/api/v1/material/material/update',
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '图片',
                        },
                        name: {
                          'x-decorator': 'FormItem',
                          'x-component': 'Input',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            showCount: true,
                            placeholder: '请输入icon名称',
                            maxLength: 6,
                          },
                          'x-validator': [
                            {
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: 'icon名称',
                        },
                        index: {
                          'x-component': 'ArrayCards.Index',
                          type: 'void',
                        },
                        pathUrl: {
                          'x-decorator': 'FormItem',
                          'x-component': 'LinksButton',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onInput',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '跳转链接',
                        },
                        moveDown: {
                          'x-component': 'ArrayCards.MoveDown',
                          type: 'void',
                          'x-index': 2,
                        },
                        remove: {
                          'x-component': 'ArrayCards.Remove',
                          type: 'void',
                          'x-index': 0,
                        },
                        moveUp: {
                          'x-component': 'ArrayCards.MoveUp',
                          type: 'void',
                          'x-index': 1,
                        },
                      },
                    },
                    required: true,
                    properties: {
                      addition: {
                        'x-component': 'ArrayCards.Addition',
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-disabled': '{{ $values.dataSource.length > 4 }}',
                            },
                          },
                        },
                        type: 'void',
                        title: '添加条目',
                      },
                    },
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              relationStyle: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: {
              searchInput: {
                name: '',
                basicAttribute: {
                  relationStyle: 2,
                },
                dataSource: {
                  imgUrl: '',
                  pathUrl: '',
                },
              },
              swiper: [],
              icons: [],
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192419%E8%BD%AE%E6%92%AD%E7%BB%84%E5%90%882%E5%A4%87%E4%BB%BD.png?path=0,392,416',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192415%E8%BD%AE%E6%92%AD%E7%BB%84%E5%90%881%E5%A4%87%E4%BB%BD.png?path=0,392,415',
          name: '景深轮播',
          en: 'SearchInputAndIconsAndCarousel',
          sort: 3,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-display': "{{$self.value === 1 ? 'visible' : 'hidden'}}",
                        },
                      },
                      target: 'dataSource.searchInput',
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    title: '标题样式',
                    enum: [
                      {
                        label: '显示图标',
                        value: 1,
                      },
                      {
                        label: '不显示图标',
                        value: 0,
                      },
                    ],
                  },
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  title: '属性配置',
                },
                type: 'object',
                properties: {
                  imgUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'FileManage',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-visible': '{{ $values.basicAttribute.relationStyle === 1 }}',
                        },
                      },
                    },
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 0,
                    type: 'string',
                    title: '图片',
                  },
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input.TextArea',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入公告内容',
                      maxLength: 100,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 2,
                    title: '内容',
                    type: 'string',
                  },
                  pathUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'LinksButton',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onInput',
                      },
                    ],
                    'x-index': 1,
                    type: 'string',
                    title: '跳转链接',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              relationStyle: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: {
              imgUrl: '',
              name: '',
              pathUrl: '',
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110545%E5%85%AC%E5%91%8A2.png?path=0,392,696',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110543%E5%85%AC%E5%91%8A1.png?path=0,392,695',
          name: '公告',
          en: 'BusinessNotice',
          sort: 4,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  backgroundColor: {
                    default: '#FFFFFF',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      placeholder: '请输入背景色',
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 4,
                    type: 'string',
                    title: '背景色',
                  },
                  color: {
                    default: '#111A34',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      placeholder: '请输入文字颜色',
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 5,
                    type: 'string',
                    title: '文字颜色',
                  },
                  rowStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    'x-index': 0,
                    type: 'number',
                    title: 'icon样式',
                    enum: [
                      {
                        label: '单行5个',
                        value: 1,
                      },
                      {
                        label: '单行6个',
                        value: 2,
                      },
                    ],
                  },
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    'x-index': 1,
                    type: 'number',
                    title: 'icon尺寸',
                    enum: [
                      {
                        label: '56 X 56',
                        value: 1,
                      },
                      {
                        label: '88 X 88',
                        value: 2,
                      },
                      {
                        label: '100 X 100',
                        value: 3,
                      },
                    ],
                  },
                  visibleName: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    'x-index': 2,
                    type: 'number',
                    title: 'icon名称',
                    enum: [
                      {
                        label: '展示',
                        value: 1,
                      },
                      {
                        label: '不展示',
                        value: 2,
                      },
                    ],
                  },
                  colStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    'x-index': 3,
                    type: 'number',
                    title: '展示类型',
                    enum: [
                      {
                        label: '两行展示',
                        value: 1,
                      },
                      {
                        label: '三行展示',
                        value: 2,
                      },
                    ],
                  },
                  monitor: {
                    'x-index': 6,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                minItems: 5,
                maxItems: 100,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    imgUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'FileManage',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        upload: '/api/v1/material/material/upload',
                        query: '/api/v1/material/material/query',
                        save: '/api/v1/material/material/save',
                        update: '/api/v1/material/material/update',
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 5,
                      type: 'string',
                      title: '图片',
                    },
                    iconLabel: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入icon标签',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                        },
                      ],
                      'x-index': 4,
                      type: 'string',
                      title: 'icon标签',
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-visible': '{{ $values.basicAttribute.visibleName === 1 }}',
                          },
                        },
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入icon名称',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 3,
                      type: 'string',
                      title: 'icon名称',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinksButton',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                          required: true,
                        },
                      ],
                      'x-index': 6,
                      type: 'string',
                      title: '跳转链接',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 99 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              backgroundColor: '#FFFFFF',
              color: '#111A34',
              rowStyle: 1,
              relationStyle: 2,
              visibleName: 1,
              colStyle: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192355%E9%87%91%E5%88%9A%E5%8C%BA2%E5%A4%87%E4%BB%BD.png?path=0,392,412',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192350%E9%87%91%E5%88%9A%E5%8C%BA1%E5%A4%87%E4%BB%BD.png?path=0,392,411',
          name: 'icon',
          en: 'BrandGroup',
          sort: 5,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  title: '属性配置',
                },
                type: 'object',
                properties: {
                  iconLabel: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入副标题文案',
                      maxLength: 8,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                      },
                    ],
                    'x-index': 1,
                    title: '副标题文案',
                  },
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入标题文案',
                      maxLength: 6,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 0,
                    title: '标题文案',
                  },
                  pathUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'LinksButton',
                    'x-validator': [
                      {
                        triggerType: 'onInput',
                      },
                    ],
                    'x-index': 3,
                    title: '跳转链接',
                  },
                  style: {
                    'x-index': 2,
                    type: 'object',
                    properties: {
                      color: {
                        default: '#111A34',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                          placeholder: '请输入文字颜色',
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '文字颜色',
                      },
                    },
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: {
              iconLabel: '',
              name: '',
              pathUrl: '',
              style: {
                color: '#111A34',
              },
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192324%E6%A0%87%E9%A2%98%E6%96%87%E6%9C%AC2%E5%A4%87%E4%BB%BD.png?path=0,392,406',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192316%E6%A0%87%E9%A2%98%E6%96%87%E6%9C%AC1%E5%A4%87%E4%BB%BD.png?path=0,392,405',
          name: '标题',
          en: 'Heading',
          sort: 6,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  couponNumber: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-index': 1,
                    type: 'number',
                    title: '展示券数量',
                    enum: [
                      {
                        label: '2',
                        value: 2,
                      },
                      {
                        label: '4',
                        value: 4,
                      },
                      {
                        label: '6',
                        value: 6,
                      },
                      {
                        label: '8',
                        value: 8,
                      },
                      {
                        label: '10',
                        value: 10,
                      },
                    ],
                  },
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入标题文案',
                      maxLength: 6,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    'x-index': 0,
                    type: 'string',
                    title: '标题文案',
                  },
                  monitor: {
                    'x-index': 2,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                minItems: 2,
                maxItems: 100,
                'x-component': 'ArrayCards',
                'x-decorator': 'FormItem',
                type: 'array',
                items: {
                  'x-component': 'Space',
                  'x-component-props': {
                    align: 'start',
                  },
                  type: 'void',
                  properties: {
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-component': 'LinkCoupon',
                      'x-decorator': 'FormItem',
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      type: 'string',
                      title: '优惠券',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  add: {
                    'x-component': 'ArrayItems.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 99 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              couponNumber: 2,
              name: '',
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110552%E4%BC%98%E6%83%A0%E5%88%B82.png?path=0,392,700',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110550%E4%BC%98%E6%83%A0%E5%88%B81.png?path=0,392,699',
          name: '优惠券',
          en: 'BusinessCoupon',
          sort: 7,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-decorator-props': {
                      className: 'mb-10',
                      title: '组件样式',
                    },
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          minItems:
                            '{{$self.value === 1 ? 2 : ($self.value  === 2 || $self.value === 3) ? 3 : 4}}',
                          maxItems:
                            '{{$self.value === 1 ? 2 : ($self.value  === 2 || $self.value === 3) ? 3 : 4}}',
                        },
                      },
                      target: 'dataSource',
                    },
                    'x-index': 0,
                    type: 'number',
                    title: '样式',
                    enum: [
                      {
                        label: '一行两个',
                        value: 1,
                      },
                      {
                        label: '一行三个',
                        value: 2,
                      },
                      {
                        label: '左一右二',
                        value: 3,
                      },
                      {
                        label: '左一右三',
                        value: 5,
                      },
                      {
                        label: '一行四个',
                        value: 4,
                      },
                    ],
                  },
                  monitor: {
                    'x-index': 1,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                minItems: 2,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    imgUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'FileManage',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        upload: '/api/v1/material/material/upload',
                        query: '/api/v1/material/material/query',
                        save: '/api/v1/material/material/save',
                        update: '/api/v1/material/material/update',
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 4,
                      type: 'string',
                      title: '图片',
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入图片名称',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 3,
                      type: 'string',
                      title: '图片名称',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinksButton',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                        },
                      ],
                      'x-index': 5,
                      type: 'string',
                      title: '跳转链接',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-disabled': '{{ $values.dataSource.length < 2 }}',
                          },
                        },
                      },
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-disabled': '{{ $values.dataSource.length < 2 }}',
                          },
                        },
                      },
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-disabled': '{{ $values.dataSource.length < 2 }}',
                          },
                        },
                      },
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled':
                            '{{($values.basicAttribute.relationStyle === 1 && $values.dataSource.length > 1) || (($values.basicAttribute.relationStyle === 2 || $values.basicAttribute.relationStyle === 3) && $values.dataSource.length > 2) || (($values.basicAttribute.relationStyle === 4 || $values.basicAttribute.relationStyle === 5) && $values.dataSource.length > 3)}}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              relationStyle: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192511%E8%90%A5%E9%94%80%E4%BD%8D2%E5%A4%87%E4%BB%BD.png?path=0,392,426',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192505%E8%90%A5%E9%94%80%E4%BD%8D1%E5%A4%87%E4%BB%BD.png?path=0,392,425',
          name: '营销位',
          en: 'Marketing',
          sort: 8,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  imgUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'FileManage',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-display':
                            "{{ $values.basicAttribute.showImgUrl === 1 ? 'visible' : 'hidden' }}",
                        },
                      },
                    },
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        format: 'url',
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    type: 'string',
                    'x-index': 2,
                    title: '图片',
                  },
                  showMoreBtn: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    'x-index': 3,
                    title: '查看更多',
                    enum: [
                      {
                        label: '展示',
                        value: 1,
                      },
                      {
                        label: '不展示',
                        value: 0,
                      },
                    ],
                  },
                  num: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Select',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    type: 'number',
                    'x-index': 4,
                    title: '展示商品数',
                    enum: [
                      {
                        label: '2',
                        value: 2,
                      },
                      {
                        label: '4',
                        value: 4,
                      },
                      {
                        label: '6',
                        value: 6,
                      },
                      {
                        label: '8',
                        value: 8,
                      },
                      {
                        label: '10',
                        value: 10,
                      },
                    ],
                  },
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    title: '专题推荐样式',
                    'x-index': 0,
                    enum: [
                      {
                        label: '平铺',
                        value: 1,
                      },
                      {
                        label: '滑动',
                        value: 2,
                      },
                      {
                        label: '列表',
                        value: 3,
                      },
                    ],
                  },
                  priceType: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      extra: '现金价格商品适用',
                      labelCol: 6,
                    },
                    'x-reactions': '{{usePriceTypeReaction}}',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    'x-index': 6,
                    title: '商品价格类型',
                  },
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                  tag: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      showCount: true,
                      maxLength: 4,
                    },
                    type: 'string',
                    'x-index': 5,
                    title: '活动标签',
                  },
                  showImgUrl: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    'x-index': 1,
                    title: '专题图片',
                    enum: [
                      {
                        label: '展示',
                        value: 1,
                      },
                      {
                        label: '不展示',
                        value: 0,
                      },
                    ],
                  },
                  saleTipText: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      showCount: true,
                      placeholder: '如：折扣价/特惠价',
                      maxLength: 3,
                    },
                    type: 'string',
                    'x-index': 7,
                    title: '售价提示文案',
                  },
                },
              },
              dataSource: {
                minItems: 2,
                maxItems: 100,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                'x-decorator-props': {
                  title: '商品配置',
                },
                type: 'array',
                items: {
                  type: 'void',
                  properties: {
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinkGoods',
                      'x-validator': [
                        {
                          triggerType: 'onInput',
                          required: true,
                        },
                      ],
                      type: 'string',
                      title: '选择商品',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  add: {
                    'x-component': 'ArrayItems.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 99 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          orderType: 'mall',
          visible: true,
          data: {
            basicAttribute: {
              imgUrl: '',
              showMoreBtn: 0,
              num: 2,
              relationStyle: 1,
              priceType: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
              tag: '',
              showImgUrl: 0,
              saleTipText: '',
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110556%E4%B8%93%E9%A2%98%E6%8E%A8%E8%8D%902.png?path=0,392,702',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110554%E4%B8%93%E9%A2%98%E6%8E%A8%E8%8D%901.png?path=0,392,701',
          name: '专题推荐',
          en: 'TypeRecommendation',
          sort: 9,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  relationStyle: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    title: '组件样式',
                    enum: [
                      {
                        label: '推荐数量3',
                        value: 1,
                      },
                      {
                        label: '推荐数量4',
                        value: 2,
                      },
                      {
                        label: '滑动',
                        value: 3,
                      },
                    ],
                  },
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '每日特惠配置',
                },
                type: 'object',
                properties: {
                  name: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入标题内容',
                      maxLength: 6,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                      },
                    ],
                    title: '标题内容',
                  },
                },
              },
            },
          },
          orderType: 'mall',
          visible: true,
          data: {
            basicAttribute: {
              relationStyle: 2,
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: {
              name: '',
            },
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192429%E6%AF%8F%E6%97%A5%E7%89%B9%E6%83%A02%E5%A4%87%E4%BB%BD.png?path=0,392,418',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192425%E6%AF%8F%E6%97%A5%E7%89%B9%E6%83%A01%E5%A4%87%E4%BB%BD.png?path=0,392,417',
          name: '每日特惠',
          en: 'DailyDiscount',
          sort: 10,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  monitor: {
                    'x-index': 1,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                  title: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      showCount: true,
                      placeholder: '请输入组件标题',
                      maxLength: 8,
                    },
                    'x-index': 0,
                    type: 'string',
                    title: '组件标题',
                  },
                },
              },
              dataSource: {
                maxItems: 30,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    imgUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'FileManage',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        upload: '/api/v1/material/material/upload',
                        query: '/api/v1/material/material/query',
                        save: '/api/v1/material/material/save',
                        update: '/api/v1/material/material/update',
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 4,
                      type: 'string',
                      title: '图片',
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入icon名称',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 3,
                      type: 'string',
                      title: 'icon名称',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinksButton',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                          required: true,
                        },
                      ],
                      'x-index': 5,
                      type: 'string',
                      title: '跳转链接',
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 29 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              monitor: {
                monitorName: '',
                is: false,
              },
              title: '',
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20221117/20221117110538%E5%88%86%E7%B1%BB2.png?path=0,392,693',
          icon: 'https://bosscdn.otosaas.com/test/20221117/20221117110536%E5%88%86%E7%B1%BB1.png?path=0,392,692',
          name: '分类推荐',
          en: 'CategoryRecommendation',
          sort: 11,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                properties: {
                  color: {
                    default: '#858B9C',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        placeholder: '请输入未选中文字颜色',
                        required: true,
                      },
                    ],
                    'x-index': 1,
                    type: 'string',
                    title: '未选中文字颜色',
                  },
                  activeColor: {
                    default: '#F93A4A',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        placeholder: '请输入选中文字颜色',
                        required: true,
                      },
                    ],
                    'x-index': 0,
                    type: 'string',
                    title: '选中文字颜色',
                  },
                  backgroundImage: {
                    'x-decorator': 'FormItem',
                    'x-component': 'FileManage',
                    'x-decorator-props': {
                      className: 'mb-10',
                      title: '组件样式',
                    },
                    'x-component-props': {
                      upload: '/api/v1/material/material/upload',
                      query: '/api/v1/material/material/query',
                      save: '/api/v1/material/material/save',
                      update: '/api/v1/material/material/update',
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                      },
                    ],
                    'x-index': 3,
                    type: 'string',
                    title: '背景图',
                  },
                  monitor: {
                    'x-index': 4,
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                },
              },
              dataSource: {
                maxItems: 5,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    activeStyle: {
                      'x-index': 4,
                      type: 'object',
                      properties: {
                        backgroundImage: {
                          'x-decorator': 'FormItem',
                          'x-component': 'FileManage',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            upload: '/api/v1/material/material/upload',
                            query: '/api/v1/material/material/query',
                            save: '/api/v1/material/material/save',
                            update: '/api/v1/material/material/update',
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '选中图片',
                        },
                      },
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入导航名称',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 3,
                      type: 'string',
                      title: '导航名称',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    pathUrl: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinksButton',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-validator': [
                        {
                          format: 'url',
                          triggerType: 'onInput',
                        },
                      ],
                      'x-index': 6,
                      type: 'string',
                      title: '跳转链接',
                    },
                    style: {
                      'x-index': 5,
                      type: 'object',
                      properties: {
                        backgroundImage: {
                          'x-decorator': 'FormItem',
                          'x-component': 'FileManage',
                          'x-decorator-props': {
                            wrapperCol: 18,
                            labelCol: 6,
                          },
                          'x-component-props': {
                            upload: '/api/v1/material/material/upload',
                            query: '/api/v1/material/material/query',
                            save: '/api/v1/material/material/save',
                            update: '/api/v1/material/material/update',
                          },
                          'x-validator': [
                            {
                              format: 'url',
                              triggerType: 'onBlur',
                              required: true,
                            },
                          ],
                          type: 'string',
                          title: '未选中图片',
                        },
                      },
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 4 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              color: '#858B9C',
              activeColor: '#F93A4A',
              backgroundImage: '',
              monitor: {
                monitorName: '',
                is: false,
              },
            },
            dataSource: [],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192334%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA2%E5%A4%87%E4%BB%BD.png?path=0,392,408',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192329%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA1%E5%A4%87%E4%BB%BD.png?path=0,392,407',
          name: '底部导航',
          en: 'FooterNav',
          sort: 12,
          type: 'business',
        },
        {
          schema: {
            type: 'object',
            properties: {
              basicAttribute: {
                'x-decorator': 'Card',
                'x-decorator-props': {
                  className: 'mb-10',
                  title: '基础属性',
                },
                type: 'object',
                'x-index': 0,
                properties: {
                  color: {
                    default: '#41485D',
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-component-props': {
                      placeholder: '请输入未选文字颜色',
                    },
                    'x-validator': [
                      {
                        triggerType: 'onBlur',
                        required: true,
                      },
                    ],
                    type: 'string',
                    title: '未选文字颜色',
                    'x-index': 2,
                  },
                  activeLineStyle: {
                    type: 'object',
                    'x-index': 3,
                    properties: {
                      backgroundColor: {
                        default: '#F93A4A',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                          placeholder: '请输入选中效果颜色',
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '选中效果颜色',
                      },
                    },
                  },
                  activeStyle: {
                    type: 'object',
                    'x-index': 1,
                    properties: {
                      color: {
                        default: '#F93A4A',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                          placeholder: '请输入已选文字颜色',
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '已选文字颜色',
                      },
                    },
                  },
                  relationStyle: {
                    default: 2,
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          maxItems: '{{$self.value === 0 ? 1 : 100}}',
                        },
                      },
                      target: 'dataSource',
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    title: '标题样式',
                    'x-index': 0,
                    enum: [
                      {
                        label: '单标题',
                        value: 1,
                      },
                      {
                        label: '标题+副标题',
                        value: 2,
                      },
                      {
                        label: '无标题单瀑布流',
                        value: 0,
                      },
                    ],
                  },
                  priceType: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Radio.Group',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      extra: '现金价格商品适用',
                      labelCol: 6,
                    },
                    'x-component-props': {
                      optionType: 'button',
                      buttonStyle: 'solid',
                    },
                    type: 'number',
                    'x-index': 5,
                    title: '商品价格类型',
                    enum: [
                      {
                        label: '样式一',
                        value: 1,
                      },
                      {
                        label: '样式二',
                        value: 2,
                      },
                      {
                        label: '样式三',
                        value: 3,
                      },
                    ],
                  },
                  monitor: {
                    type: 'object',
                    properties: {
                      monitorName: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        'x-reactions': {
                          fulfill: {
                            schema: {
                              'x-display':
                                "{{ $values.basicAttribute.monitor.is ? 'visible' : 'hidden' }}",
                            },
                          },
                        },
                        'x-component-props': {
                          showCount: true,
                          placeholder: '请输入监测名称',
                          maxLength: 10,
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '监测名称',
                        'x-index': 1,
                      },
                      is: {
                        'x-decorator': 'FormItem',
                        'x-component': 'Switch',
                        'x-decorator-props': {
                          wrapperCol: 18,
                          labelCol: 6,
                        },
                        type: 'boolean',
                        title: '点击监测',
                        'x-index': 0,
                      },
                    },
                  },
                  stickyStyle: {
                    type: 'object',
                    'x-index': 4,
                    properties: {
                      backgroundColor: {
                        default: '#FFFFFF',
                        'x-decorator': 'FormItem',
                        'x-component': 'Input',
                        'x-component-props': {
                          placeholder: '请输入吸顶底部颜色',
                        },
                        'x-validator': [
                          {
                            triggerType: 'onBlur',
                            required: true,
                          },
                        ],
                        type: 'string',
                        title: '吸顶底部颜色',
                      },
                    },
                  },
                  saleTipText: {
                    'x-decorator': 'FormItem',
                    'x-component': 'Input',
                    'x-decorator-props': {
                      wrapperCol: 18,
                      labelCol: 6,
                    },
                    'x-component-props': {
                      showCount: true,
                      placeholder: '如：折扣价/特惠价',
                      maxLength: 3,
                    },
                    type: 'string',
                    'x-index': 6,
                    title: '售价提示文案',
                  },
                },
              },
              dataSource: {
                maxItems: 100,
                'x-decorator': 'FormItem',
                'x-component': 'ArrayCards',
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    filter: {
                      default: 1,
                      'x-decorator': 'FormItem',
                      'x-component': 'Radio.Group',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        optionType: 'button',
                        buttonStyle: 'solid',
                      },
                      'x-index': 3,
                      type: 'number',
                      title: '筛选条件',
                      enum: [
                        {
                          label: '展示筛选条件',
                          value: 1,
                        },
                        {
                          label: '不展示筛选条件',
                          value: 0,
                        },
                      ],
                    },
                    subtitle: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-visible': '{{ $values.basicAttribute.relationStyle === 2 }}',
                          },
                        },
                      },
                      'x-component-props': {
                        placeholder: '请输入瀑布流副标题',
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 5,
                      title: '瀑布流副标题',
                      type: 'string',
                    },
                    name: {
                      'x-decorator': 'FormItem',
                      'x-component': 'Input',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-visible': '{{ $values.basicAttribute.relationStyle !== 0 }}',
                          },
                        },
                      },
                      'x-component-props': {
                        showCount: true,
                        placeholder: '请输入瀑布流标题',
                        maxLength: 6,
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 4,
                      title: '瀑布流标题',
                      type: 'string',
                    },
                    index: {
                      'x-component': 'ArrayCards.Index',
                      type: 'void',
                    },
                    recommendType: {
                      default: 4,
                      'x-decorator': 'FormItem',
                      'x-component': 'Select',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-component-props': {
                        placeholder: '请选择推荐类型',
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 6,
                      type: 'number',
                      title: '推荐类型',
                      enum: [
                        {
                          label: '商品瀑布流',
                          value: 4,
                        },
                        {
                          label: '卡券瀑布流',
                          value: 5,
                        },
                        {
                          label: '景点瀑布流',
                          value: 6,
                        },
                        {
                          label: '商圈瀑布流',
                          value: 7,
                        },
                      ],
                    },
                    sort: {
                      default: 1,
                      'x-decorator': 'FormItem',
                      'x-component': 'Select',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-visible': '{{$deps[0] === 4}}',
                          },
                        },
                        dependencies: ['.recommendType'],
                      },
                      'x-component-props': {
                        placeholder: '请选择瀑布流排序',
                      },
                      'x-validator': [
                        {
                          triggerType: 'onBlur',
                          required: true,
                        },
                      ],
                      'x-index': 8,
                      type: 'number',
                      title: '瀑布流排序',
                      enum: [
                        {
                          label: '新品',
                          value: 1,
                        },
                        {
                          label: '销量降序',
                          value: 2,
                        },
                        {
                          label: '销量正序',
                          value: 3,
                        },
                        {
                          label: '价格降序',
                          value: 4,
                        },
                        {
                          label: '价格正序',
                          value: 5,
                        },
                        {
                          label: '商品推荐排序',
                          value: 6,
                        },
                      ],
                    },
                    moveDown: {
                      'x-component': 'ArrayCards.MoveDown',
                      type: 'void',
                      'x-index': 2,
                    },
                    recommendCode: {
                      'x-decorator': 'FormItem',
                      'x-component': 'LinkRecommendId',
                      'x-decorator-props': {
                        wrapperCol: 18,
                        labelCol: 6,
                      },
                      'x-reactions': {
                        fulfill: {
                          schema: {
                            'x-visible': '{{$deps[0] === 4 || $deps[0] === 5}}',
                          },
                        },
                        dependencies: ['.recommendType'],
                      },
                      'x-validator': [
                        {
                          triggerType: 'onInput',
                          required: true,
                        },
                      ],
                      'x-index': 7,
                      type: 'string',
                      title: '推荐ID',
                    },
                    remove: {
                      'x-component': 'ArrayCards.Remove',
                      type: 'void',
                      'x-index': 0,
                    },
                    moveUp: {
                      'x-component': 'ArrayCards.MoveUp',
                      type: 'void',
                      'x-index': 1,
                    },
                  },
                },
                required: true,
                properties: {
                  addition: {
                    'x-component': 'ArrayCards.Addition',
                    'x-reactions': {
                      fulfill: {
                        schema: {
                          'x-disabled': '{{ $values.dataSource.length > 99 }}',
                        },
                      },
                    },
                    type: 'void',
                    title: '添加条目',
                  },
                },
              },
            },
          },
          visible: true,
          data: {
            basicAttribute: {
              color: '#41485D',
              activeLineStyle: {
                backgroundColor: '#F93A4A',
              },
              activeStyle: {
                color: '#F93A4A',
              },
              relationStyle: 2,
              priceType: 1,
              monitor: {
                monitorName: '',
                is: false,
              },
              stickyStyle: {
                backgroundColor: '#FFFFFF',
              },
              saleTipText: '',
            },
            dataSource: [
              {
                filter: 0,
                subtitle: '',
                name: '',
                recommendType: 4,
                sort: '',
                recommendCode: {
                  recommendCode: '',
                },
              },
            ],
          },
          hoverIcon:
            'https://bosscdn.otosaas.com/test/20220727/20220727192439%E7%80%91%E5%B8%83%E6%B5%812%E5%A4%87%E4%BB%BD.png?path=0,392,420',
          icon: 'https://bosscdn.otosaas.com/test/20220727/20220727192434%E7%80%91%E5%B8%83%E6%B5%811%E5%A4%87%E4%BB%BD.png?path=0,392,419',
          name: '瀑布流',
          en: 'MasonryLayouts',
          type: 'business',
        },
      ],
      link: [
        {
          label: '频道模板',
          value: 'pindao',
        },
        {
          orderType: 'mall',
          label: '商城',
          value: 'mall',
        },
        {
          orderType: 'kaquan',
          label: '卡券',
          value: 'kaquan',
        },
        {
          orderType: 'shopcloud',
          label: '商圈',
          value: 'shopcloud',
        },
        {
          orderType: 'mall',
          label: '营销活动',
          value: 'activity',
        },
        {
          label: '自定义链接',
          value: 'customize',
        },
      ],
    },
    message: '操作成功',
  },
};
