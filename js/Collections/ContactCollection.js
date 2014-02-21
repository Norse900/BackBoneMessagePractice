/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
var contactCollection = Backbone.Collection.extend({
    model: App.Contact

});
App.ContactCollection = new contactCollection();