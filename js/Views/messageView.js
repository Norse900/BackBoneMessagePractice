/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var secretMessage = App.SecretMessage;
    var mainMessageView = Backbone.View.extend({
        tagName: 'li',
        el: '#dateSentMessageBodyInfo',
        model: secretMessage,
        //template: _.template($("#messagesContentDisplay").html(),{model : secretMessage}),
        template2: _.template("dateSent : <%= model['dateSent'] %>  Message Body : <%= model['body'] %>"),
        initialize: function () {
            this.render(secretMessage);
            return this;
        },
        render: function (myModel) {

            //console.log("template2 : " + this.template2({model : myModel.attributes}));
            var template = _.template($("#messagesContentDisplay").html(), myModel.toJSON());
            this.$el.html(template);
return this;
        }
    });

    App.MainMessageView = new mainMessageView({model: secretMessage, el: $("#dateSentMessageBodyInfo")});

});
