// イベントリスナ
// change: function(e)
//      e.rowData string  :: キャンバスの生データ
//      e.data    Blob    :: 画像データ
//      e.clear   boolean :: クリアボタンが押されたかどうか

var args = arguments[0] || {};

$.listeners = {};
$.webView.url = WPATH('templates/index.html');

$.changeListener = function(e) {
    $.trigger('change', {rowData: e.data, data: Ti.Utils.base64decode(e.data.replace('data:image/png;base64,', '')), clear: e.clear});
};


Ti.App.addEventListener('jp.co.mountposition.signview:change', $.changeListener);
exports.destroy = function() {
    Ti.App.removeEventListener('jp.co.mountposition.signview:change', $.changeListener);
    $.changeListener = null;
};
