
function signChange(e) {
    var imageView;

    Ti.API.info(e);
    imageView = Ti.UI.createImageView({image: e.data});
    $.index.add(imageView);
}

exports.destroy = function() {
    // コントローラが破棄されるタイミングで SignView Widget の destroy を呼び出してください。
    $.signView.destroy();
};

$.index.open();
