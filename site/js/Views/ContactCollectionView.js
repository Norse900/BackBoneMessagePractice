/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.ContactCollectionView = Backbone.View.extend({
    el: '#contactListArea',
    initialize: function () {
        this.collection = new App.MessageCollection();
        this.collection.fetch({reset: true});
        this.render();

        this.listenTo(this.collection, 'add', this.addContact);
        this.listenTo(this.collection, 'remove', this.removeContact);
        this.listenTo(this.collection, 'get', this.getAllContacts);
        this.listenTo(this.collection, 'update', this.updateContact);
    },

    render:function(){
        this.collection.each(function(item){
            this.renderContact()(item);
        }, this);
    },
    renderContact:function(item){
        var contactView = new App.ContactView({
            model:item
        });
        this.$el.append(contactView.render().el);
    },

    addContact:function(){},
    removeContact:function(){},
    getAllContacts:function(){},
    updateContact:function(){}
});