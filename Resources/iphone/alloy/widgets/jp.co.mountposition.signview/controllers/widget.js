function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "jp.co.mountposition.signview/" + s : s.substring(0, index) + "/jp.co.mountposition.signview/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("jp.co.mountposition.signview");
    this.__widgetId = "jp.co.mountposition.signview";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.webView = Ti.UI.createWebView({
        id: "webView"
    });
    $.__views.webView && $.addTopLevelView($.__views.webView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.listeners = {};
    $.webView.url = WPATH("templates/index.html");
    $.changeListener = function(e) {
        $.trigger("change", {
            rowData: e.data,
            data: Ti.Utils.base64decode(e.data.replace("data:image/png;base64,", "")),
            clear: e.clear
        });
    };
    Ti.App.addEventListener("jp.co.mountposition.signview:change", $.changeListener);
    exports.destroy = function() {
        Ti.App.removeEventListener("jp.co.mountposition.signview:change", $.changeListener);
        $.changeListener = null;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;