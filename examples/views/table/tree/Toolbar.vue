<template>
  <div>
    <p class="tip">增删改查、工具栏</p>

    <vxe-toolbar :data="tableData" setting>
      <template v-slot:buttons>
        <vxe-button @click="insertEvent">{{ $t('app.body.button.insert') }}</vxe-button>
        <vxe-button @click="removeEvent">移除选中</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      resizable
      ref="xTree"
      :tree-config="treeConfig"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData">
      <vxe-table-column type="checkbox" width="120" tree-node></vxe-table-column>
      <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [],
      removeList: [],
      treeConfig: {
        children: 'children'
      },
      demoCodes: [
        `
        <vxe-toolbar :data="tableData" setting>
          <template v-slot:buttons>
            <vxe-button @click="insertEvent">新增</vxe-button>
            <vxe-button @click="$refs.xTree.removeSelecteds()">移除选中</vxe-button>
            <vxe-button @click="getInsertEvent">获取新增</vxe-button>
            <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
            <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          resizable
          ref="xTree"
          :tree-config="treeConfig"
          :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
          :data="tableData">
          <vxe-table-column type="checkbox" width="120" tree-node></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="size" title="Size" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="type" title="Type" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              ttableData: [],
              removeList: [],
              treeConfig: {
                children: 'children'
              }
            }
          },
          created () {
            this.tableData = window.MOCK_TREE_DATA_LIST.slice(0)
          },
          methods: {
            insertEvent () {
              let xTree = this.$refs.xTree
              xTree.createRow({
                name: '新数据',
                date: this.$utils.toDateString(new Date(), 'yyyy-MM-dd'),
                isNew: true
              }).then(newRow => {
                // 插入到第一行
                this.tableData.unshift(newRow)
                xTree.refreshData().then(() => xTree.setActiveRow(newRow))
              })
            },
            removeEvent () {
              let xTree = this.$refs.xTree
              let removeRecords = xTree.getSelectRecords()
              removeRecords.forEach(row => {
                let matchObj = this.$utils.findTree(this.tableData, item => item === row, this.treeConfig)
                if (matchObj) {
                  let { items, index } = matchObj
                  // 从树节点中移除
                  let restRow = items.splice(index, 1)[0]
                  this.removeList.push(restRow)
                }
              })
              xTree.refreshData()
            },
            getInsertEvent () {
              let insertRecords = this.$utils.filterTree(this.tableData, item => item.isNew, this.treeConfig)
              this.$XModal.alert(insertRecords.length)
            },
            getRemoveEvent () {
              let removeRecords = this.removeList
              this.$XModal.alert(removeRecords.length)
            },
            getUpdateEvent () {
              let updateRecords = this.$refs.xTree.getUpdateRecords()
              this.$XModal.alert(updateRecords.length)
            }
          }
        }
        `
      ]
    }
  },
  created () {
    this.tableData = this.$utils.clone(window.MOCK_TREE_DATA_LIST, true)
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    insertEvent () {
      let xTree = this.$refs.xTree
      xTree.createRow({
        name: '新数据',
        date: this.$utils.toDateString(new Date(), 'yyyy-MM-dd'),
        isNew: true
      }).then(newRow => {
        // 插入到第一行
        this.tableData.unshift(newRow)
        xTree.refreshData().then(() => xTree.setActiveRow(newRow))
      })
    },
    removeEvent () {
      let xTree = this.$refs.xTree
      let removeRecords = xTree.getSelectRecords()
      removeRecords.forEach(row => {
        let matchObj = this.$utils.findTree(this.tableData, item => item === row, this.treeConfig)
        if (matchObj) {
          let { items, index } = matchObj
          // 从树节点中移除
          let restRow = items.splice(index, 1)[0]
          this.removeList.push(restRow)
        }
      })
      xTree.refreshData()
    },
    getInsertEvent () {
      let insertRecords = this.$utils.filterTree(this.tableData, item => item.isNew, this.treeConfig)
      this.$XModal.alert(insertRecords.length)
    },
    getRemoveEvent () {
      let removeRecords = this.removeList
      this.$XModal.alert(removeRecords.length)
    },
    getUpdateEvent () {
      let updateRecords = this.$refs.xTree.getUpdateRecords()
      this.$XModal.alert(updateRecords.length)
    }
  }
}
</script>
