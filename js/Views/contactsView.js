/**
 * Created by montgomery on 2/11/14.
 */
$(function () {
    var contact = App.Contact;
    var contactCollection = App.ContactCollection;
    var contactListView = Backbone.View.extend({
        tagName: 'li',
        model: contact,
        //template: _.template($("#messagesContentDisplay").html(),{model : secretMessage}),
        template2: _.template("dateSent : <%= model['dateSent'] %>  Message Body : <%= model['body'] %>"),
        initialize: function () {
            this.collection = contactCollection.getAllContacts("contactList");
            this.render(contact);
            return this;
        },
        render: function (myModel) {

            //console.log("template2 : " + this.template2({model : myModel.attributes}));
            var template = _.template($("#contactsListDisplay").html(), myModel.toJSON());
            this.$el.html(template);
            return this;
        }
    });

    App.ContactListView = new contactListView({model: contact, el: $("#contactListUL")});

});