/**
 * Created by montgomery on 2/11/14.
 */
var App = App || {};

var contact = Backbone.Model.extend({
    defaults: {
        name: "default name",
        contactAddress: "default contact address"
    }
});

App.Contact = new contact();





