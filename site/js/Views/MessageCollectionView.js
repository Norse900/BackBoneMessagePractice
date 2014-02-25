/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageCollectionView = Backbone.View.extend({
    el: '#messageContainer',
    url: '/messages',
    events: {
        'click #destroy': 'removeMessage',
        'click #createMessage': 'createMessage'
    },
    initialize: function () {
        console.log('inside initialize - MessageCollection');
        this.collection = new App.MessageCollection();
        var self = this;
        var fetchedItems = this.getAllMessages().complete(function () {
            console.log("what type : " + typeof fetchedItems);
            self.render(fetchedItems);
        });
        //this.render(fetchedItems);

    },
    render: function (fetchedItems) {
        console.log("Render - message collection - called");
        console.log("collection length : " + fetchedItems.length);
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
        var res;
        var fetchedColl = this.collection.fetch({
            error: function (collection, response) {
                console.log('error', response);
                res = response;
            },
            success: function (collection, response) {
                console.log('success', response);
                res = response;
                return response;
            }
        });
        //console.log(fetchedColl.toSource());
        console.log('returning collection');
        return fetchedColl;
    },
    updateMessage: function () {
        console.log("update message called");
    }
});