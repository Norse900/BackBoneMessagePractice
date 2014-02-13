/**
 * Created by montgomery on 2/11/14.
 */
var app = app || {};

app.MessageCollection = Backbone.Collection.extend({
    model: app.SecretMessage,
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

    getCurrentMessages: function (messageId) {
        var storage = window.localStorage;
        var retrieveMessageItem = _.where(storage, "messageId");
        if (retrieveMessageItem) {
            return retrieveMessageItem
        }
        else {
            return null;
        }
    },
    saveCurrentMessage: function (messageId, messageData) {
        var storage = window.localStorage;
        var checkIfNew = _.where(storage, "messageId");
        if (!checkIfNew) {
            var saveMessageItem = storage.setItem(messageId, messageData);
            if (saveMessageItem) {
                return "Success";
            }
            else {
                try {
                    storage.setItem(messageId, messageData);
                } catch (e) {
                    return e.message;
                }

            }
        }
    }

});
