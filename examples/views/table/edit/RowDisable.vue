<template>
  <div>
    <p class="tip">设置 <table-api-link prop="edit-config"/> 的 <table-api-link prop="activeMethod"/> 方法判断单元格是否禁用</p>

    <vxe-table
      ref="xTable"
      border
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row', activeMethod: activeRowMethod}"
      @edit-disabled="editDisabledEvent">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p class="tip">配合自定义渲染，第三行name禁止编辑禁 age 小于 26</p>

    <vxe-table
      ref="xTable"
      border
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <vxe-table-column type="index" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <input type="text" v-model="row.name">
        </template>
      </vxe-table-column>
      <vxe-table-column field="age" title="Age" :edit-render="{type: 'default'}">
        <template v-slot:edit="scope">
          <input type="text" v-model="scope.row.age" :disabled="disableMethod(scope)">
        </template>
      </vxe-table-column>
      <vxe-table-column field="date" title="Date" :edit-render="{type: 'default'}">
        <template v-slot:edit="{ row }">
          <input type="date" v-model="row.date">
        </template>
      </vxe-table-column>
    </vxe-table>

    <p class="demo-code">{{ $t('app.body.button.showCode') }}</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [],
      demoCodes: [
        `
        <vxe-table
          ref="xTable"
          border
          show-overflow
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row', activeMethod: activeRowMethod}"
          @edit-disabled="editDisabledEvent">
          <vxe-table-column type="index" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-table-column>
          <vxe-table-column field="date" title="Date" :edit-render="{name: 'input'}"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            this.tableData = window.MOCK_DATA_LIST.slice(0, 6)
          },
          methods: {
            activeRowMethod ({ row, rowIndex }) {
              return rowIndex !== 1
            },
            editDisabledEvent ({ row, column }) {
              this.$XModal.alert('禁止编辑')
            }
          }
        }
        `,
        `
        <vxe-table
          ref="xTable"
          border
          show-overflow
          :data="tableData"
          :edit-config="{trigger: 'click', mode: 'row'}">
          <vxe-table-column type="index" width="60"></vxe-table-column>
          <vxe-table-column field="name" title="Name" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <input type="text" v-model="row.name">
            </template>
          </vxe-table-column>
          <vxe-table-column field="sex" title="Sex" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <input type="sex" v-model="row.sex" :disabled="row.disabled">
            </template>
          </vxe-table-column>
          <vxe-table-column field="date" title="Date" :edit-render="{type: 'default'}">
            <template v-slot:edit="{ row }">
              <input type="date" v-model="row.date">
            </template>
          </vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData: []
            }
          },
          created () {
            let list = window.MOCK_DATA_LIST.slice(0, 6)
            this.tableData = list.map((item, index) => {
              return Object.assign({
                disabled: index === 2
              }, item)
            })
          }
        }
        `
      ]
    }
  },
  created () {
    let list = window.MOCK_DATA_LIST.slice(0, 6)
    this.tableData = list
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  },
  methods: {
    activeRowMethod ({ row, rowIndex }) {
      return rowIndex !== 1
    },
    disableMethod ({ row, column }) {
      return column.property === 'age' && row.age < 26
    },
    editDisabledEvent ({ row, column }) {
      this.$XModal.alert('禁止编辑')
    }
  }
}
</script>
