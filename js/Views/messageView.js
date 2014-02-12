/**
 * Created by montgomery on 2/11/14.
 */
var app = app || {};
app.MessageMainView = Backbone.View.extend({
    el: "#MessageArea",
    messageContentTemplate: _.template( $("#messageContentArea").html())

});