/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.Contact = Backbone.Model.extend({
        defaults:{
            name: 'defaultContactName',
            contactAddress:'defaultContactAddress'
        }
    });