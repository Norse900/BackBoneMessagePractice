/**
 * Created by montgomery on 2/11/14.
 */
var app = app || {};

var MessageList = Backbone.Collection.extend({
    model: app.SecretMessage,
    localStorage: new Backbone.LocalStorage('messages-backbone')
});