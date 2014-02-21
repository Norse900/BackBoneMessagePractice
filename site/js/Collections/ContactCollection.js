/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
var contactCollection = Backbone.Collection.extend({
    model: App.Contact
    /** delete('api/contacts/:id'
     * put('/contacts/:id'
     * App.get('/contacts
     * App.post('/contacts'*/

});
App.ContactCollection = new contactCollection();