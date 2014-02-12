/**
 * Created by montgomery on 2/12/14.var app = app || {};
 app.MessageMainView = Backbone.View.extend({
    el: "#MessageArea",
    messageContentTemplate: _.template( $("#messageContentArea").html())

});
 *
 */
var app = app || {};
app.contactSideView = Backbone.View.extend({
    el:"#contactListArea",
    contactsSideTemplate: _.template($("#contactListUL").html())

});