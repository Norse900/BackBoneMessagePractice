/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var contactsView = Backbone.View.extend({
        el: "#contactListUL",
        initialize: function () {
            this.collection = App.ContactCollection.getAllContacts();
            this.render();
        },
        render: function () {
            var item = this.collection;

            for (var i = 0; i < item.length; i++) {
                var contactView = App.ContactView({model: item[i]});
                console.log(" contactView : " +  contactView);
                this.$el.append(contactView.render().el);
            }
        }});


    App.ContactsView = new contactsView({collection: App.ContactCollection});

});