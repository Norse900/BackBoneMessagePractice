/**
 * Created by montgomery on 2/19/14.
 */

(function () {
    var sqlOps = sqlOps || {};
    sqlOps.sqlite3 = require("sqlite3").verbose();
    sqlOps.fs = require("fs");
    sqlOps.contactsFile = "contactsListing.db";
    sqlOps.currentMessageFile = "currentMessageFile.db";
    sqlOps.messagesFile = "userMessages.db";
    var contactListExists = sqlOps.fs.existsSync(contactsFile);
    var currentMessageFileExists = sqlOps.fs.existsSync(currentMessageFile);
    var messagesFileExists = sqlOps.fs.existsSync(messagesFile);

    var dbContactList = sqlOps.sqlite3.Database(sqlOps.contactsFile);
    var dbCurrentMessageFile = sqlOps.sqlite3.Database(sqlOps.currentMessageFile);
    var dbmessagesFile = sqlOps.sqlite3.Database(messagesFileExists);


    dbContactList.serialize(function () {
        if (!contactListExists) {
            dbContactList.run("create table contactList(name text, contactaddress text)");
        }
//execute the initial statement
    });
    dbCurrentMessageFile.serialize(function () {
        if (!currentMessageFileExists) {
            dbCurrentMessageFile.run("create table contactList(messageId text)");
        }
//execute the initial statement
    });
    dbmessagesFile.serialize(function () {
        if (!messagesFileExists) {
            dbmessagesFile.run("create table contactList(messageId text, messageInfoJSON text)");
        }
//execute the initial statement
    });

})();