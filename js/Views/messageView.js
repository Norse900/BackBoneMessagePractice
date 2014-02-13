/**
 * Created by montgomery on 2/11/14.
 */
var app = app || {};
app.MessageMainView = Backbone.View.extend({
    el: "#MessageArea",
    messageContentTemplate: _.template($("#messageContentArea").html()),
    initialize: function () {
        this.listenTo(this.model, 'change', this.render)
    },
    render:function(){
        this.$el.html(' ' +
            '<div id="messageContentArea">' +
            '   <p>Message Area' +
            '       <script id="messagesContentDisplay" type="text/template">' +
            '<li><%= dateSent %></li>'+
            '<li><%= body %></li>' +
            '</script>' +
            '</p>'+
            '</div>');
        return this;
    }
});