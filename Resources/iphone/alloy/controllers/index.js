function Controller() {
    function signChange(e) {
        var imageView;
        Ti.API.info(e);
        imageView = Ti.UI.createImageView({
            image: e.data
        });
        $.index.add(imageView);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.signView = Alloy.createWidget("jp.co.mountposition.signview", "widget", {
        id: "signView",
        __parentSymbol: $.__views.index
    });
    $.__views.signView.setParent($.__views.index);
    signChange ? $.__views.signView.on("change", signChange) : __defers["$.__views.signView!change!signChange"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    $.signView.destroy();
    exports.destroy = function() {
        $.signView.destroy();
    };
    __defers["$.__views.signView!change!signChange"] && $.__views.signView.on("change", signChange);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;