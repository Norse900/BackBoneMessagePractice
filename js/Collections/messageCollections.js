/**
 * Created by montgomery on 2/11/14.
 */
var App = App || {};
var messageToAdd = App.SecretMessage;
var messageCollection = Backbone.Collection.extend({
    model: App.SecretMessage,
    url: function () {
        return App.SecretMessage;
    },
    getAllMessages: function (messageId) {
        var storage = window.localStorage;
        var retrieveMessages = _.where(storage, !null);
        if (retrieveMessages) {
            return retrieveMessages
        }
        else {
            return null;
        }
    },

    getMessage: function (messageId) {
        var storage = window.localStorage;
        try {
            var retrieveMessageItem = storage.getItem(messageId) + "";
            //console.log("retrieved : " + retrieveMessageItem);
            return retrieveMessageItem;
        } catch (e) {
            return false;
        }
    },
    saveCurrentMessage: function (messageId, messageData) {
        var storage = window.localStorage;
        try {
            var checkIfNew = storage.getItem(messageId);
            if (checkIfNew) {
                localStorage.removeItem(checkIfNew);
            }
            var stringifiedMessage = JSON.stringify(messageData);
            var saveMessageItem = storage.setItem(messageId, stringifiedMessage);
            return true;
        } catch (e) {
            return null;
        }
    }

});


App.MessageCollection = new messageCollection();
