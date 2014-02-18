/**
 * Created by montgomery on 2/11/14.
 */
var App = App || {};

var contact = Backbone.Model.extend({
    defaults: {
        name: "default name",
        contactAddress: "default contact address"
    }
/*
*  "contact4": {
 "name": "Stew_The_Stump_Remover"
 }*/

});

App.Contact = new contact();





