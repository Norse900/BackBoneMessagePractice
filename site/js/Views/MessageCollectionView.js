/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageCollection = Backbone.View.extend({
    el: '#messageContainer',
    initialize: function () {
        this.collection = new App.Library();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.addMessage);
        this.listenTo(this.collection, 'remove', this.removeMessage);
        this.listenTo(this.collection, 'get', this.getAllMessages);
        this.listenTo(this.collection, 'update', this.updateMessage);
    },

    render:function(){
        this.collection.each(function(item){
            this.renderMessage()(item);
        }, this);
    },
    renderMessage:function(item){
        var messageView = new App.MessageView({
            model:item
        });
        this.$el.append(messageView.render().el);
    },


    addMessage:function(){},
    removeMessage:function(){},
    getAllMessages:function(){},
    updateMessage:function(){}
});