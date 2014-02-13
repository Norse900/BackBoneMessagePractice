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

    getMessage: function (messageId) {
        var storage = window.localStorage;
        try {
            var retrieveMessageItem = storage.getItem(messageId);
            //_.where(storage, messageId);
            return retrieveMessageItem[0];
        } catch (e) {
            return false;
        }
    },
    saveCurrentMessage: function (messageId, messageData) {
        var storage = window.localStorage;
        try {
            var checkIfNew = _.where(storage, "messageId");
            //console.log("zero element : " + checkIfNew[0]);
            if (checkIfNew.length < 1) {
                //console.log("saving message to localStorage");
                var saveMessageItem = storage.setItem(messageId, messageData);
                if (saveMessageItem) {
                    return "Success";
                }
                else {
                    try {
                        storage.setItem(messageId, messageData);
                    } catch (e) {
                        return;
                    }

                }
            }
        } catch (e) {
            return;

        }
    }

});
