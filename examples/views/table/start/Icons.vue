<template>
  <div>
    <h2>Custom Icons 自定义图标</h2>
    <p class="tip">如果项目已有适合的图标，例如 <a class="link" href="https://www.npmjs.com/package/font-awesome" target="_black">font-awesome</a> 图标库，可通过配置替换并自行调整相关的样式即可</p>
    <pre>
      <code class="javascript">
        import VXETable from 'vxe-table'

        VXETable.setup({
          icon: {
            sortAsc: 'vxe-icon--caret-top',
            sortDesc: 'vxe-icon--caret-bottom',
            filter: 'vxe-icon--funnel',
            edit: 'vxe-icon--edit-outline',
            tree: 'vxe-icon--caret-right',
            refresh: 'vxe-icon--refresh',
            custom: 'vxe-icon--menu',
            jumpPrev: 'vxe-icon--d-arrow-left',
            jumpNext: 'vxe-icon--d-arrow-right',
            prevPage: 'vxe-icon--arrow-left',
            nextPage: 'vxe-icon--arrow-right',
            zoomIn: 'vxe-icon--zoomin',
            zoomOut: 'vxe-icon--zoomout',
            modalClose: 'vxe-icon--close',
            modalInfo: 'vxe-icon--info',
            modalSuccess: 'vxe-icon--success',
            modalWarning: 'vxe-icon--warning',
            modalError: 'vxe-icon--error',
            modalQuestion: 'vxe-icon--question',
            modalLoading: 'vxe-icon--refresh roll',
            caretBottom: 'vxe-icon--caret-bottom',
            dropdownBottom: 'vxe-icon--arrow-bottom',
            btnLoading: 'vxe-icon--refresh roll'
          }
        })
      </code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
