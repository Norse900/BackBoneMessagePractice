/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var secretMessage = App.SecretMessage ;
    var mainMessageView = Backbone.View.extend({
        tagName: 'li',
        model: App.SecretMessage,
        template : _.template($("#messagesContentDisplay").html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    App.MainMessageView = new mainMessageView({model: secretMessage, el: $("#dateSentMessageBodyInfo")});

});
