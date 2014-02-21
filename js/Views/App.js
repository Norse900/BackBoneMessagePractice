/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.AppView = Backbone.View.extend({
    el: '#container',
    initialize: function () {
        this.listenTo(App.ContactCollection, 'add', this.addContact);
        this.listenTo(App.ContactCollection, 'remove', this.removeContact);
        this.listenTo(App.MessageCollection, 'create', this.createMessage);
        //this is a button. See if this is correct. Perhaps single model?
        this.listenTo(App.MessageCollection, 'remove', this.removeMessage);
    },

    render:function(){
        return this;
    },

    addContact: function (contact) {
        var newView = new App.ContactView({model: contact});
        $("#contactListUL").append(newView.render().el);
    },
    removeContact: function (contact) {
        var contactToRemoveById = contact.id;
    },
    createMessage: function(message){
        var newMessage = new App.MessageView({model : message});
        $("#dateSentMessageBodyInfo").html(newMessage.render().el);
    },
    removeMessage:function(message){
        var messageToRemoveById = message.id;
    }
});