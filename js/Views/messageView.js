/**
 * Created by montgomery on 2/11/14.
 */
var app = app || {};

app.MainMessageView = Backbone.View.extend({
    initialize: function (options) {
        this.model = app.SecretMessage,
            this.render = function () {
                this.model.bind('change', this.render);
                this.render();
            } //missing the change event name here, probably a result of changing the active message.
    },
    render: function () {
        var variables = {dateSent: SecretMessage.dateSent, body:secretMessage.body};
        var messageTemplate = _.template($("#messagesListUL").html(),variables);
        this.el.html(messageTemplate);
        return this;
    }

});


