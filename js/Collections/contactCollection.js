/**
 * Created by montgomery on 2/18/14.
 */
var App = App || {};
var contactCollection = Backbone.Collection.extend({
    model: App.Contact,
    url: function () {
        return App.Contact;
    },

    getAllContacts: function (knownItem) {
        var storage = window.localStorage;
        var retrieveContacts;
        if (knownItem) {
            retrieveContacts = storage.getItem(knownItem);
        } else {

            retrieveContacts = _.where(storage, !null);
        }
        if (retrieveContacts) {
            return retrieveContacts;
        }
        else {
            return null;
        }
    },

    getContact: function (contactId) {
        var storage = window.localStorage;
        try {
            var retrieveContact = storage.getItem(contactId) + "";
            console.log("retrieved : " + retrieveContact);
            return retrieveContact;
        } catch (e) {
            return false;
        }
    },
    saveContact: function (contactId, contactData) {
        var storage = window.localStorage;
        try {
            var checkIfNew = storage.getItem(contactId);
            if (checkIfNew) {
                localStorage.removeItem(contactId);
            }
            var stringifiedContact = JSON.stringify(contactData);
            var savecontactItem = storage.setItem(contactId, stringifiedContact);
            return true;
        } catch (e) {
            return null;
        }
    }

});


App.ContactCollection = new contactCollection();
