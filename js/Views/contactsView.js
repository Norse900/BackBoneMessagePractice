/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var contactsView = Backbone.View.extend({
        tagName: 'ul',
        render: function () {
            this.collection.each(function (contact) {
                    var contactView = new App.ContactView({model: contact});
                    console.log("inside contactsView");
                    this.$el.append(contactView.render().el);
                },
                this);
            return this;
        }
    });

App.ContactsView = new contactsView({collection: App.ContactCollection.getAllContacts()});


})
;