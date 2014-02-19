/**
 * Created by montgomery on 2/11/14.
 */
/**
 * Created by montgomery on 2/11/14.
 */

describe("BackBoneMessagePracticeTests Message Tests", function () {

    var messageObject = App.SecretMessage;
    var messageCollection = App.MessageCollection;
    var testMessageId; //default title*0/0/0000
    var mainViewObject = App.MainMessageView;

    beforeEach(function () {

        App.SecretMessage = App.SecretMessage || {
            title: "default title",
            body: "default body text",
            owner: "default owner",
            recipient: "default recipient",
            status: "unsent",
            dateSent: "0/0/0000"};
        messageObject = App.SecretMessage || {
            title: "default title",
            body: "default body text",
            owner: "default owner",
            recipient: "default recipient",
            status: "unsent",
            dateSent: "0/0/0000"};
        messageObject.dateSent = "0/0/0000";
        messageObject.title = "default title";

        if (!testMessageId) {
            testMessageId = "" + messageObject.title + "*" + messageObject.dateSent; //default title*0/0/0000
        }
    });
    afterEach(function () {
            localStorage.clear();

        }
    )
    ;
    describe("Setup object verification", function () {
        it("should have created a SecretMessage object", function () {
            expect(messageObject).not.toBeNull();
        });
        it("should have created a Message Collection object", function () {
            expect(messageCollection).not.toBeNull();
        });
        it("should have created the main View object", function () {
            expect(mainViewObject).not.toBeNull();
        });
    });
    describe("Message Specs", function () {
        describe("The Message Object", function () {
            describe("Message Title Initialization Test", function () {
                it("should have a message title", function () {
                    expect(messageObject.title.length).toBeGreaterThan(0);

                });
                it("should have a default title of 'default title'", function () {
                    expect(messageObject.title).toContain("default title");
                });
            });
            describe("Message Body Initialization Tests", function () {
                it("should have a body", function () {
                    expect(messageObject.body.length).toBeGreaterThan(0);
                });
                it("should have a default body content of 'default body text'", function () {
                    expect(messageObject.body).toContain("default body text");
                });
            });
            describe("Owner Initialization Tests", function () {
                it("should have an owner", function () {
                    expect(messageObject.owner.length).toBeGreaterThan(0);
                });
                it("should have a default owner of 'default owner'", function () {
                    expect(messageObject.owner).toContain("default owner");
                });
            });
            describe("Recipient Initialization Tests", function () {
                it("should have a recipient", function () {
                    expect(messageObject.recipient.length).toBeGreaterThan(0);
                });
                it("should have a default recipient of 'default recipient'", function () {
                    expect(messageObject.recipient).toContain("default recipient");
                });
            });
            describe("Status Initialization Tests", function () {
                it("should have a status", function () {
                    expect(messageObject.status.length).toBeGreaterThan(0);
                });
                it("should have a default status of 'unsent'", function () {
                    expect(messageObject.status).toContain("unsent");
                });
            });

        });
        describe("Getting a Message", function () {
            localStorage.setItem("default title*0/0/0000", "messageBodyInsert");
            var itemCollection = App.MessageCollection;
            var itemReturned = itemCollection.getMessage("default title*0/0/0000");
            it("should have a key of 'getItemInsert'", function () {
                expect(itemReturned.indexOf("messageBodyInsert")).toBeGreaterThan(-1);
            });
        });
        describe("Saving a Message", function () {
            describe("Saving a Message To Local Storage", function () {
                describe("After clearing the localStorage of existing items", function () {
                    var messageObject = {
                        title: "default title",
                        body: "default body text",
                        owner: "default owner",
                        recipient: "default recipient",
                        status: "unsent",
                        dateSent: "0/0/0000"};
                    var saveGivenItem = messageCollection.saveCurrentMessage((testMessageId), JSON.stringify(messageObject));
                    var itemReturned = JSON.parse(localStorage.getItem(testMessageId));

                    it("should have a saved an object with an id of 'default title*0/0/0000'", function () {
                        expect(saveGivenItem).toBeTruthy();
                    });
                    it("should be able to retrieve that message from localStorage", function () {

                        var saveGivenItem = messageCollection.saveCurrentMessage((testMessageId), JSON.stringify(messageObject));
                        var itemReturned2 = JSON.parse(localStorage.getItem(testMessageId));
                        var itemReturned = JSON.parse(itemReturned2);
                        //console.log(itemReturned);
                        expect(itemReturned.title.length).toBeGreaterThan(4);
                    });
                });
            });
        });
        describe("Displaying a Message", function () {


        });
        describe("Creating a Meeting", function () {
        });
    });
});
