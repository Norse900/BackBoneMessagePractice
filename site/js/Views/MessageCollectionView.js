/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageCollectionView = Backbone.View.extend({
    el: '#messageContainer',

    events:{
      'click #destroy':  'removeMessage',
      'click #createMessage' : 'createMessage'
    },
    initialize: function () {
        console.log('inside initialize - MessageCollection');
        this.collection = App.MessageCollection;
        //this.collection.fetch();
        this.render();

    },
    render: function () {
        console.log("Render - message collection - called");
        if(this.collection.length > 0){
        this.collection.each(function (item) {
            this.renderMessage(item);
        }, this);} else{
            console.log("collection was empty.");

            var item = new App.MessageModel();
            this.renderMessage(item);


        }
        return this;
    },
    renderMessage: function (item) {
        console.log("renderMessage called");

        var messageView = new App.MessageView({
            model: item
        });
        this.$el.append(messageView.render().el);
    },


    createMessage: function () {
        console.log("Add message called");
    },
    removeMessage: function () {
        this.model.removeMessage();
    },
    getAllMessages: function () {
        console.log("Get all messages called");
    },
    updateMessage: function () {
        console.log("update message called");
    }
});