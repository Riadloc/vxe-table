module.exports = {
  app: {
    header: {
      desc: '一个功能强大的、灵活、可配置、可扩展的 Vue 表格组件'
    },
    aside: {
      nav: {
        start: '开发指南',
        install: '安装',
        use: '快速上手',
        theme: '自定义主题',
        i18n: '国际化',
        advancedFunctions: '高级函数',

        basics: '基础功能',
        base: '基础',
        size: '尺寸',
        ellipsis: '内容显示省略号',
        stripe: '斑马线条纹',
        border: '边框',
        style: '单元格样式',
        hideHead: '隐藏头部',
        resizable: '列宽拖动',
        fluidHeight: '流体高度',
        resize: '响应式宽高',
        height: '固定表头',
        fixed: '固定列',
        fullFixed: '固定表头和列',
        group: '表头分组',
        seq: '序号',
        radio: '单选',
        checkbox: '多选',
        sort: '排序',
        filter: '筛选',
        empty: '空数据',
        loading: '加载中',
        format: '格式化内容',

        more: '更多功能',
        events: '事件绑定',
        template: '自定义模板',
        span: '合并行货列',
        footer: '表尾合计',
        customs: '显示/隐藏列',
        export: '导出 CSV',
        contextMenu: '快捷菜单',
        expandRow: '展开行',
        toolbar: '工具栏',
        search: '全表搜索',
        pager: '分页',

        tree: '树形表格',
        edit: '可编辑',
        crudToolbar: '增删改查 + 工具栏',
        lazy: '懒加载',
        full: '完整功能',

        grid: '高级表格',
        proxy: '数据代理',
        proxyPage: '数据代理 + 分页',
        fullQuery: '完整查询',
        dynamicColumn: '实现可配置动态列',
        baseTree: '基础树',
        crudTreeToolbar: '树 + 增删改查 + 工具栏',

        scroll: '大数据表格',
        bigData: '虚拟滚动',
        big1wRow: '1 万行',
        big10wRow: '10 万行 + 更复杂渲染',
        big1wRow1wCol: '1 万行 1 万列',
        big10wRow1wCol: '10 万行 1 万列 + 更复杂渲染',
        infiniteScroll: '无限滚动',

        editable: '可编辑表格',
        manual: '手动触发',
        click: '点击触发',
        dblclick: '双击触发',
        autoClear: '关闭自动清除',
        insert: '插入数据',
        delete: '删除数据',
        revert: '还原数据',
        status: '编辑状态',
        cellDisable: '禁用编辑 cell',
        rowDisable: '禁用编辑 row',
        cellVaild: '数据校验 call',
        rowVaild: '数据校验 row',
        forceCellValid: '数据校验 cell + 强制锁定',
        forceRowVaild: '数据校验 row + 强制锁定',
        keyboard: '全键盘操作',

        excel: 'Excel 表格',
        cell: '单元格',

        other: '其他渲染',
        elementRender: '使用 element-ui 渲染列',
        iviewRender: '使用 iview 渲染列',
        antd: '使用 ant-design-vue 渲染列',
        sortablejsRender: '使用 sortablejs 拖拽行排序',
        xlsxRender: '使用 xlsx 导出数据',

        plugin: '插件',
        elementPlugin: 'element-ui 适配插件',
        elementPluginMore: 'element-ui 跟多配置',
        iviewPlugin: 'iview 适配插件',
        iviewPluginMore: 'iview 跟多配置',
        antdPlugin: 'ant-design-vue 适配插件',
        antdPluginMore: 'ant-design-vue 跟多配置',

        api: 'API 文档',
        vxeTable: 'vxe-table',
        vxeTableColumn: 'vxe-table-column',
        vxeGrid: 'vxe-grid',
        vxeExcel: 'vxe-excel',
        vxeToolbar: 'vxe-toolbar',
        vxePager: 'vxe-pager',
        vxeRadio: 'vxe-radio',
        vxeCheckbox: 'vxe-checkbox',
        vxeInput: 'vxe-input',
        vxeButton: 'vxe-button',
        vxeMessageBox: 'vxe-message-box',
        vxeTooltip: 'vxe-tooltip'
      }
    },
    body: {
      button: {
        viewCode: '查看代码',
        runDemo: '在线运行',
        showCode: '显示代码'
      }
    },
    api: {
      form: {
        apiSearch: 'API 搜索'
      },
      title: {
        prop: '属性',
        desc: '说明',
        type: '类型 / 返回类型',
        enum: '可选值',
        defVal: '默认值 / 参数',
        props: '参数',
        events: '事件',
        slots: '插槽',
        methods: '方法'
      },
      table: {
        desc: {
          data: '显示的数据',
          customs: '初始化绑定显示/隐藏列；可以通过 visible 动态修改显示或隐藏',
          height: '表格的高度；支持自适应或者固定宽高',
          maxHeight: '表格的最大高度',
          autoResize: '是否自动监听父容器响应式调整表格宽高（如果需要自动跟随父容器的高度变化时可能会用到）',
          resizable: '所有的列是否允许拖动列宽调整大小',
          stripe: '是否带有斑马纹',
          border: '是否带有纵向边框',
          size: '表格的尺寸',
          fit: '所有列的宽度是否自撑开',
          loading: '表格是否显示加载中',
          showHeader: '是否显示表头',
          startIndex: '只对 type=index 的列有效，动态索引的起始值',
          highlightCurrentRow: '是否要高亮当前选中行',
          highlightHoverRow: '鼠标移到行是否要高亮显示',
          rowClassName: '给行附加 className，也可以是函数 Function({seq, row, rowIndex})',
          cellClassName: '给单元格附加 className，也可以是函数 Function({seq, row, rowIndex, column, columnIndex})',
          headerRowClassName: '给表头的行附加 className，也可以是函数 Function({headIndex})',
          headerCellClassName: '给表头的单元格附加 className，也可以是函数 Function({headIndex, column, columnIndex})',
          footerRowClassName: '给表尾的行附加 className，也可以是函数 Function({footIndex})',
          footerCellClassName: '给表尾的单元格附加 className，也可以是函数 Function({footIndex, column, columnIndex})',
          showFooter: '是否显示表尾合计',
          footerMethod: '表尾合计的计算方法 Function({columns, data})',
          spanMethod: '合并行或列，该函数 Function({seq, row, rowIndex, column, columnIndex, data}) 返回计算后的值',
          showAllOverflow: '设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）',
          showHeaderAllOverflow: '设置表头所有内容过长时显示为省略号',
          rowKey: '行数据的 Key，对应行渲染中虚拟 DOM 的 key 属性（非特殊情况下不需要使用）',
          radioConfig: '单选配置项',
          selectConfig: '多选配置项',
          tooltipConfig: 'tooltip 配置项',
          expandConfig: '展开行配置项',
          treeConfig: '树形结构配置项',
          contextMenu: '快捷菜单配置项',
          mouseConfig: '鼠标配置项',
          keyboardConfig: '按键配置项',
          editConfig: '可编辑配置项',
          editRules: '校验规则配置项（默认情况下是非强制性的，无论是否必填都允许编辑其他的单元格）',
          optimization: '优化配置项',

          empty: '空数据时显示的文本内容',

          selectAll: '只对 type=selection 有效，当手动勾选全选时触发的事件',
          selectChange: '只对 type=selection,radio 有效，当手动勾选时触发的事件',
          cellClick: '单元格被点击时会触发该事件',
          cellDblclick: '单元格被双击时会触发该事件',
          headerCellClick: '表头单元格被点击时会触发该事件',
          headerCellDblclick: '表头单元格被双击时会触发该事件',
          footerCellClick: '表尾单元格被点击时会触发该事件',
          footerCellDblclick: '表尾单元格被双击时会触发该事件',
          cellMouseenter: '当单元格 hover 进入时会触发该事件',
          cellMouseleave: '当单元格 hover 退出时会触发该事件',
          sortChange: '当排序条件发生变化时会触发该事件',
          filterChange: '当筛选条件发生变化时会触发该事件',
          toggleExpandChange: '当行展开或收起时会触发该事件',
          toggleTreeChange: '当树节点展开或收起时会触发该事件',
          contextMenuClick: '只对 context-menu 配置时有效，当点击快捷菜单时会触发该事件',
          editClosed: '单元格编辑状态下被关闭时会触发该事件',
          editActived: '单元格被激活编辑时会触发该事件',
          editDisabled: '当点击后单元格如果是禁用状态时会触发该事件',
          validError: '当数据校验不通过时会触发该事件',
          bodyScroll: '内容滚动时会触发该事件',
          footerScroll: '表尾滚动时会触发该事件'
        }
      },
      tableColumn: {
        desc: {
          type: '列的类型',
          prop: '列属性',
          label: '列标题',
          width: '列宽度',
          minWidth: '最小列宽度；会自动将剩余空间按比例分配',
          resizable: '列是否允许拖动列宽调整大小',
          fixed: '将列固定在左侧或者右侧（注意：固定列应该放在左右两侧的位置）',
          align: '列对其方式',
          headerAlign: '表头列的对齐方式',
          showOverflow: '当内容过长时显示为省略号',
          showHeaderOverflow: '当表头内容过长时显示为省略号',
          formatter: '格式化显示内容 Function({cellValue, row, rowIndex, column, columnIndex})',
          indexMethod: '只对 type=index 有效，自定义索引方法 Function({row, rowIndex, column, columnIndex})',
          sortable: '是否允许列排序',
          sortBy: '只对 sortable 有效，自定义排序的属性',
          remoteSort: '是否使用服务端排序，如果设置为 true 则不会对数据进行处理',
          filters: '配置筛选条件',
          filterMultiple: '只对 filters 有效，筛选是否允许多选',
          filterMethod: '只对 filters 有效，自定义筛选方法 Function({value, row, column})',
          remoteFilter: '是否使用服务端筛选，如果设置为 true 则不会对数据进行处理',
          treeNode: '只对 tree-config 配置时有效，指定为树节点',
          columnKey: '列渲染的 key，对应列渲染中虚拟 DOM 的 key 属性（非特殊情况下不需要使用）',
          editRender: '列编辑配置项'
        }
      },
      grid: {
        desc: {
          toolbar: '工具栏配置',
          pagerConfig: '分页配置项',
          proxyConfig: '数据代理配置项'
        }
      },
      toolbar: {
        desc: {
          id: '唯一 ID 标识',
          size: '尺寸',
          data: '与表格的 data 属性同步绑定',
          setting: '显示列个性化设置按钮'
        }
      },
      pager: {
        desc: {
          size: '尺寸',
          layouts: '自定义布局',
          currentPage: '当前页',
          pageSize: '每页大小',
          total: '总条数',
          pagerCount: '显示页码按钮的数量',
          pageSizes: '每页大小选项列表',
          background: '带背景颜色'
        }
      },
      radio: {
        desc: {
          value: '绑定值',
          size: '尺寸',
          disabled: '是否禁用',
          name: '原生 name 属性'
        }
      },
      checkbox: {
        desc: {
          value: '绑定值',
          size: '尺寸',
          disabled: '是否禁用'
        }
      },
      input: {
        desc: {
          value: '绑定值',
          size: '尺寸',
          disabled: '是否禁用'
        }
      },
      button: {
        desc: {
          type: '类型',
          size: '尺寸'
        }
      },
      alert: {
        desc: {
          value: '绑定值',
          title: '提示框的标题',
          message: '提示框的内容',
          lockView: '是否锁住页面，不允许提示框之外的任何操作',
          lockScroll: '是否锁住滚动条，不允许页面滚动',
          mask: '是否显示遮罩层',
          maskClosable: '是否允许点击遮罩层关闭提示框'
        }
      }
    }
  }
}