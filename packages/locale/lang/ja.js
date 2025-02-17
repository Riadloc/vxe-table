export default {
  vxe: {
    error: {
      groupFixed: 'Grouping headersが使われている場合、fixed columnsは左右になくてはなりません',
      notResizable: 'Horizontal virtual scrollingはresizableをサポートしていません',
      cellEditRender: 'Rendererはcell-renderとedit-renderを同時に仕様できません',
      scrollOriginal: 'Virtual scrollingはsource dataのみエクスポートできます、original=trueを設定してください',
      treeFixedExpand: '樹木構造の固定柱は展開された行と矛盾する。',
      scrollYHeight: 'Virtual scrollingを有効にするにはheightかmax-heightを設定してください',
      unableInsert: '指定された位置に挿入できない',

      barUnableLink: 'ツールバーはフォームを関連付けることができない',
      toolbarId: 'ツールバーはユニークidを設定する必要がある',

      reqModule: '{{0}}モジュールが必要',
      emptyProp: '{{0}} propertyはemptyが許可されていません',
      notFunc: '{{0}} methodがありません',
      noTree: 'Tree structureは {{0}} をサポートしていません',
      delFunc: '{{0}} functionは非推奨です、{{1}}を使用してください',
      delProp: '{{0}} propertyは非推奨です、{{1}}を使用してください'
    },
    table: {
      emptyText: 'データがありません',
      confirmFilter: '完了',
      resetFilter: 'リセット',
      allFilter: '全て'
    },
    grid: {
      selectOneRecord: '少なくとも1つのレコードを選択してください',
      deleteSelectRecord: 'レコードを削除してもよろしいですか？',
      removeSelectRecord: 'レコードを削除してもよろしいですか？',
      dataUnchanged: 'データは変更されませんでした',
      saveSuccess: '保存しました'
    },
    pager: {
      goto: '移動',
      pagesize: '件/ページ',
      total: '全 {{total}} 件',
      pageClassifier: ''
    },
    alert: {
      title: 'メッセージ'
    },
    button: {
      confirm: '完了',
      cancel: 'キャンセル'
    }
  }
}
