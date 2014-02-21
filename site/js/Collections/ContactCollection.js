/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
var contactCollection = Backbone.Collection.extend({
    model: App.Contact,
    /** delete('api/contacts/:id'
     * put('/contacts/:id'
     * App.get('/contacts
     * App.post('/contacts'*/
    initialize: function() {
        this.bind('createContact', this.onModelAdded, this );
    },
    onModelAdded: function(model, collection, options) {
        console.log('Added:');
        console.log(model);
        console.log(collection);
        console.log(options);
    }
});
App.ContactCollection = new contactCollection();