"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DomTools = void 0;

var _xeUtils = _interopRequireDefault(require("xe-utils/methods/xe-utils"));

var _utils = _interopRequireDefault(require("./utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browse = _xeUtils.default.browse();

var htmlElem = browse.isDoc ? document.querySelector('html') : 0;
var bodyElem = browse.isDoc ? document.body : 0;

function getClsRE(cls) {
  if (!reClsMap[cls]) {
    reClsMap[cls] = new RegExp("(?:^|\\s)".concat(cls, "(?!\\S)"), 'g');
  }

  return reClsMap[cls];
}

var reClsMap = {};
var DomTools = {
  browse: browse,
  isPx: function isPx(val) {
    return val && /^\d+(px)?$/.test(val);
  },
  isScale: function isScale(val) {
    return val && /^\d+%$/.test(val);
  },
  hasClass: function hasClass(elem, cls) {
    return elem && elem.className && elem.className.match && elem.className.match(getClsRE(cls));
  },
  removeClass: function removeClass(elem, cls) {
    if (elem && DomTools.hasClass(elem, cls)) {
      elem.className = elem.className.replace(getClsRE(cls), '');
    }
  },
  addClass: function addClass(elem, cls) {
    if (elem && !DomTools.hasClass(elem, cls)) {
      DomTools.removeClass(elem, cls);
      elem.className = "".concat(elem.className, " ").concat(cls);
    }
  },
  updateCellTitle: function updateCellTitle(evnt) {
    var cellElem = evnt.currentTarget.querySelector('.vxe-cell');
    var content = cellElem.innerText;

    if (cellElem.getAttribute('title') !== content) {
      cellElem.setAttribute('title', content);
    }
  },
  rowToVisible: function rowToVisible($table, row) {
    var bodyElem = $table.$refs.tableBody.$el;
    var trElem = bodyElem.querySelector("[data-rowid=\"".concat(_utils.default.getRowid($table, row), "\"]"));

    if (trElem) {
      var bodyHeight = bodyElem.clientHeight;
      var bodySrcollTop = bodyElem.scrollTop;
      var trOffsetTop = trElem.offsetTop + (trElem.offsetParent ? trElem.offsetParent.offsetTop : 0);
      var trHeight = trElem.clientHeight; // 检测行是否在可视区中

      if (trOffsetTop < bodySrcollTop || trOffsetTop > bodySrcollTop + bodyHeight) {
        // 向上定位
        return $table.scrollTo(null, trOffsetTop);
      } else if (trOffsetTop + trHeight >= bodyHeight + bodySrcollTop) {
        // 向下定位
        return $table.scrollTo(null, bodySrcollTop + trHeight);
      }
    } else {
      // 如果是虚拟渲染跨行滚动
      if ($table.scrollYLoad) {
        return $table.scrollTo(null, ($table.afterFullData.indexOf(row) - 1) * $table.scrollYStore.rowHeight);
      }
    }

    return Promise.resolve();
  },
  colToVisible: function colToVisible($table, column) {
    var bodyElem = $table.$refs.tableBody.$el;
    var tdElem = bodyElem.querySelector(".".concat(column.id));

    if (tdElem) {
      var bodyWidth = bodyElem.clientWidth;
      var bodySrcollLeft = bodyElem.scrollLeft;
      var tdOffsetLeft = tdElem.offsetLeft + (tdElem.offsetParent ? tdElem.offsetParent.offsetLeft : 0);
      var tdWidth = tdElem.clientWidth; // 检测行是否在可视区中

      if (tdOffsetLeft < bodySrcollLeft || tdOffsetLeft > bodySrcollLeft + bodyWidth) {
        // 向左定位
        return $table.scrollTo(tdOffsetLeft);
      } else if (tdOffsetLeft + tdWidth >= bodyWidth + bodySrcollLeft) {
        // 向右定位
        return $table.scrollTo(bodySrcollLeft + tdWidth);
      }
    } else {
      // 如果是虚拟渲染跨行滚动
      if ($table.scrollXLoad) {
        var visibleColumn = $table.visibleColumn;
        var scrollLeft = 0;

        for (var index = 0; index < visibleColumn.length; index++) {
          if (visibleColumn[index] === column) {
            break;
          }

          scrollLeft += visibleColumn[index].renderWidth;
        }

        return $table.scrollTo(scrollLeft);
      }
    }

    return Promise.resolve();
  },
  getDomNode: function getDomNode() {
    var documentElement = document.documentElement;
    var bodyElem = document.body;
    return {
      scrollTop: documentElement.scrollTop || bodyElem.scrollTop,
      scrollLeft: documentElement.scrollLeft || bodyElem.scrollLeft,
      visibleHeight: documentElement.clientHeight || bodyElem.clientHeight,
      visibleWidth: documentElement.clientWidth || bodyElem.clientWidth
    };
  },

  /**
   * 检查触发源是否属于目标节点
   */
  getEventTargetNode: function getEventTargetNode(evnt, container, queryCls) {
    var targetElem;
    var target = evnt.target;

    while (target && target.nodeType && target !== document) {
      if (queryCls && DomTools.hasClass(target, queryCls)) {
        targetElem = target;
      } else if (target === container) {
        return {
          flag: queryCls ? !!targetElem : true,
          container: container,
          targetElem: targetElem
        };
      }

      target = target.parentNode;
    }

    return {
      flag: false
    };
  },

  /**
   * 获取元素相对于 document 的位置
   */
  getOffsetPos: function getOffsetPos(elem, container) {
    return getNodeOffset(elem, container, {
      left: 0,
      top: 0
    });
  },
  getAbsolutePos: function getAbsolutePos(elem) {
    var bounding = elem.getBoundingClientRect();

    var _DomTools$getDomNode = DomTools.getDomNode(),
        scrollTop = _DomTools$getDomNode.scrollTop,
        scrollLeft = _DomTools$getDomNode.scrollLeft;

    return {
      top: scrollTop + bounding.top,
      left: scrollLeft + bounding.left
    };
  },

  /**
   * 获取单元格节点索引
   */
  getCellNodeIndex: function getCellNodeIndex(cell) {
    var trElem = cell.parentNode;

    var columnIndex = _xeUtils.default.arrayIndexOf(trElem.children, cell);

    var rowIndex = _xeUtils.default.arrayIndexOf(trElem.parentNode.children, trElem);

    return {
      columnIndex: columnIndex,
      rowIndex: rowIndex
    };
  },

  /**
   * 获取选中单元格矩阵范围
   */
  getRowNodes: function getRowNodes(trList, cellNode, targetCellNode) {
    var startColIndex = cellNode.columnIndex;
    var startRowIndex = cellNode.rowIndex;
    var targetColIndex = targetCellNode.columnIndex;
    var targetRowIndex = targetCellNode.rowIndex;
    var rows = [];

    for (var rowIndex = Math.min(startRowIndex, targetRowIndex), rowLen = Math.max(startRowIndex, targetRowIndex); rowIndex <= rowLen; rowIndex++) {
      var cells = [];
      var trElem = trList[rowIndex];

      for (var colIndex = Math.min(startColIndex, targetColIndex), colLen = Math.max(startColIndex, targetColIndex); colIndex <= colLen; colIndex++) {
        var tdElem = trElem.children[colIndex];
        cells.push(tdElem);
      }

      rows.push(cells);
    }

    return rows;
  },
  getCellIndexs: function getCellIndexs(cell) {
    var trElem = cell.parentNode;
    var rowid = trElem.getAttribute('data-rowid');
    var columnIndex = [].indexOf.call(trElem.children, cell);
    var rowIndex = [].indexOf.call(trElem.parentNode.children, trElem);
    return {
      rowid: rowid,
      rowIndex: rowIndex,
      columnIndex: columnIndex
    };
  },
  getCell: function getCell($table, _ref) {
    var row = _ref.row,
        column = _ref.column;

    var rowid = _utils.default.getRowid($table, row);

    return $table.$refs["".concat(column.fixed || 'table', "Body")].$el.querySelector(".vxe-body--row[data-rowid=\"".concat(rowid, "\"] .").concat(column.id));
  }
};
exports.DomTools = DomTools;

function getNodeOffset(elem, container, rest) {
  if (elem) {
    var parentElem = elem.parentNode;
    rest.top += elem.offsetTop;
    rest.left += elem.offsetLeft;

    if (parentElem && parentElem !== htmlElem && parentElem !== bodyElem) {
      rest.top -= parentElem.scrollTop;
      rest.left -= parentElem.scrollLeft;
    }

    if (container && (elem === container || elem.offsetParent === container) ? 0 : elem.offsetParent) {
      return getNodeOffset(elem.offsetParent, container, rest);
    }
  }

  return rest;
}

var _default = DomTools;
exports.default = _default;