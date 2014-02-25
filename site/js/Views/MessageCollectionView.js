/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageCollectionView = Backbone.View.extend({
    //el: '#messageContainer',
    el: "#messagesListUL",
    url: '/messages',
    events: {
        'click #destroy': 'removeMessage',
        'click #createMessage': 'createMessage'
    },
    initialize: function () {
        this.collection = new App.MessageCollection();
        var self = this;
        var fetchedItems = this.getAllMessages().complete(function () {
            self.render(fetchedItems);
        });
    },
    render: function (fetchedItems) {
        if (this.collection.length > 0) {
            this.collection.each(function (item) {
                this.renderMessage(item);
            }, this);
        } else {
            console.log("collection was empty.");
        }
        return this;
    },
    renderMessage: function (item) {
        //console.log("renderMessage called");
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
        //console.log("Get all messages called");
        var res;
        var fetchedColl = this.collection.fetch({
            error: function (collection, response) {
                console.log('error', response);
                res = response;
            },
            success: function (collection, response) {
                //console.log('success', response);
                res = response;
                return response;
            }
        });
        return fetchedColl;
    },
    updateMessage: function () {
        console.log("update message called");
    }
});