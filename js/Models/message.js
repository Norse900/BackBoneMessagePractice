var App = App || {};

var secretMessage = Backbone.Model.extend({
    defaults: {
        title: "default title",
        body: "default body text",
        owner: "default owner",
        recipient: "default recipient",
        status: "unsent",
        dateSent: "0/0/0000"
    }


});

App.SecretMessage = new secretMessage();
