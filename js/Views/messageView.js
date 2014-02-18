/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var secretMessage = App.SecretMessage;
    var messageCollection = App.MessageCollection;
    var mainMessageView = Backbone.View.extend({
        tagName: 'li',
        el: '#dateSentMessageBodyInfo',
        model: secretMessage,
        initialize: function () {
            this.collection = messageCollection;
            this.render(secretMessage);
            return this;
        },
        render: function (myModel) {
            var template = _.template($("#messagesContentDisplay").html(), myModel.toJSON());
            this.$el.html(template);
            return this;
        }
    });

    App.MainMessageView = new mainMessageView({model: secretMessage, el: $("#dateSentMessageBodyInfo")});

});
