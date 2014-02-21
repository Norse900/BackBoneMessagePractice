/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.ContactCollectionView = Backbone.View.extend({
    el: '#contactListArea',
    initialize: function () {
        this.collection = new App.ContactCollection();
        this.collection.fetch({reset: true});
        this.render();

    },
    events:{
        'click #destroy':  'removeContact',
        'click #createContact' : 'createContact'
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

    createContact:function(){},
    removeContact:function(){
        this.model.removeContact();
    },
    getAllContacts:function(){},
    updateContact:function(){}
});