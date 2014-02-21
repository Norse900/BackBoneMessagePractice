/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.ContactView = Backbone.View.extend({
    el: '#contactListArea',
    template: _.template($("#contactsListDisplay").html()),
    render: function(){
        console.log("ContactView rendering ");
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },
    removeContact:function(){
        this.model.destroy();
        this.remove();
    }

});