<template>
  <div>
    <h2>Theme 主题</h2>
    <p class="tip">Case 1.使用默认的主题样式</p>
    <pre>
      <code class="scss">
        @import 'vxe-table/lib/index.css';
      </code>
    </pre>
    <p class="tip">Case 2.修改主题颜色，并引入所有样式（<a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <code class="scss">
        @import 'vxe-table/styles/variable.scss';

        $vxe-font-color: #666; // 局部修改主题色

        @import './assets/styles/xtable/variable.scss';
        @import 'vxe-table/styles/default.scss';
      </code>
    </pre>
    <p class="tip">Case 3.修改主题颜色，并按需引入样式（<a class="link" href="https://github.com/xuliangzhan/vxe-table/blob/master/styles/variable.scss" target="_blank">查看所有变量</a>）</p>
    <pre>
      <code class="scss">
        @import 'vxe-table/styles/variable.scss';

        $vxe-font-color: #666; // 局部修改主题色

        @import './assets/styles/xtable/variable.scss';
        @import 'vxe-table/styles/icon.scss';
        @import 'vxe-table/styles/table.scss';
        @import 'vxe-table/styles/column.scss';
        @import 'vxe-table/styles/header.scss';
        @import 'vxe-table/styles/body.scss';
        @import 'vxe-table/styles/footer.scss';
        @import 'vxe-table/styles/filter.scss';
        @import 'vxe-table/styles/loading.scss';
        @import 'vxe-table/styles/grid.scss';
        @import 'vxe-table/styles/menu.scss';
        @import 'vxe-table/styles/toolbar.scss';
        @import 'vxe-table/styles/pager.scss';
        @import 'vxe-table/styles/checkbox.scss';
        @import 'vxe-table/styles/radio.scss';
        @import 'vxe-table/styles/input.scss';
        @import 'vxe-table/styles/button.scss';
        @import 'vxe-table/styles/modal.scss';
        @import 'vxe-table/styles/tooltip.scss';
      </code>
    </pre>
    <p>Case 4.如果需要完全重写主题样式，把 vxe-table/styles/** 目录全部复制到项目中自行修改（例如 /assets/styles/xtable 目录下）</p>
    <pre>
      <code class="scss">
        @import './assets/styles/xtable/index.scss';
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
