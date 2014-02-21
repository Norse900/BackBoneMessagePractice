/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.ContactView = Backbone.View.extend({
    el: '#contactListArea',
    template: _.template($("#contactsListDisplay").html())

});