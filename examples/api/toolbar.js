const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'id',
        descKey: 'app.api.toolbar.desc.id',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'size',
        descKey: 'app.api.toolbar.desc.size',
        version: '',
        type: 'String',
        enum: 'medium,small,mini',
        defVal: '',
        list: []
      },
      {
        name: 'loading',
        descKey: 'app.api.toolbar.desc.loading',
        version: '',
        type: 'Boolean',
        enum: '',
        defVal: 'false',
        list: []
      },
      {
        name: 'refresh',
        descKey: 'app.api.toolbar.desc.refresh',
        version: '',
        type: 'Boolean,Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'query',
            desc: '查询的方法',
            version: '',
            type: 'Function / Promise',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      },
      {
        name: 'resizable',
        descKey: 'app.api.toolbar.desc.resizable',
        version: '',
        type: 'Boolean,Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将保存列宽拖动的状态保存到本地（需要设置 id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'setting',
        descKey: 'app.api.toolbar.desc.setting',
        version: '',
        type: 'Boolean,Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'trigger',
            desc: '触发方式',
            version: '',
            type: 'String',
            enum: 'manual,click,hover',
            defVal: 'click',
            list: []
          },
          {
            name: 'immediate',
            desc: '列勾选之后是否实时同步',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'storage',
            desc: '是否启用 localStorage 本地保存，会将列的隐藏状态保存到本地（需要设置 id）',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          }
        ]
      },
      {
        name: 'buttons',
        desc: '按钮列表',
        version: '',
        type: 'Array',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'name',
            desc: '按钮名称（支持开启国际化）',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'code',
            desc: '按钮编码',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'visible ',
            desc: '是否可视',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'true',
            list: []
          },
          {
            name: 'disabled ',
            desc: '是否禁用',
            version: '',
            type: 'Boolean',
            enum: '',
            defVal: 'false',
            list: []
          },
          {
            name: 'dropdowns',
            desc: '下拉按钮列表',
            version: '',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          }
        ]
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'buttons',
        desc: '按钮列表',
        version: '',
        type: '',
        enum: '',
        defVal: '{}, h',
        list: []
      },
      {
        name: 'tools',
        desc: '右侧工具列表',
        version: '',
        type: '',
        enum: '',
        defVal: '{}, h',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'button-click',
        desc: '当工具栏的按钮被点击时会后触发该事件',
        version: '',
        type: '',
        enum: '',
        defVal: '{code}, event',
        list: []
      }
    ]
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      // {
      //   name: 'hideColumn(column)',
      //   desc: '隐藏指定列',
      //   type: '',
      //   enum: '',
      //   defVal: 'column',
      //   list: []
      // },
      // {
      //   name: 'showColumn(column)',
      //   desc: '显示指定列',
      //   type: '',
      //   enum: '',
      //   defVal: 'column',
      //   list: []
      // },
      {
        name: 'updateSetting()',
        desc: '手动更新列自定义的操作状态',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'updateResizable()',
        desc: '手动更新列宽拖动的操作状态',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  }
]

export default apis
