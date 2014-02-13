/**
 * Created by montgomery on 2/12/14.var app = app || {};
 app.MessageMainView = Backbone.View.extend({
    el: "#MessageArea",
    messageContentTemplate: _.template( $("#messageContentArea").html())

});
 *
 */
var app = app || {};
app.ContactsListView = Backbone.View.extend({
    el: "#contactListArea",
    contactListAreaTemplate: _.template($("#contactListArea").html()),
    initialize: function () {
        this.listenTo(this.model, 'change', this.render)
    },
    render:function(){
        this.$el.html(' ' +
            '<div id="contactListContentArea">' +
            '    <p>Contacts List' +
            '       <ul id="contactListUL">' +
            '           <script id="contactsList" type="text/template">' +
            '               <li><%= name %></li>'+
            '           </script>' +
            '       </ul>' +
            '   </p>'+
            '</div>');
        return this;
    }
});