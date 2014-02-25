/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageModel = Backbone.Model.extend({
    defaults:{
        title: "default title",
        body: "default body text",
        owner: "default owner",
        recipient: "default recipient",
        status: "unsent",
        dateSent: "0/0/0000"
},
    url:"http://localhost:4711/messages"
});