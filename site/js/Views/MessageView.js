/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageView = Backbone.View.extend({
    el: '#messageArea',
    template: _.template($("#messagesContentDisplay").html())

});