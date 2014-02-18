(function ($) {
    var App = App || {};
    var messageModel = App.SecretMessage;
    var messageCollection = App.MessageCollection;
    App.MessageCollection.add(messageModel);
    var mainMessageView = App.MainMessageView;
})(jQuery);