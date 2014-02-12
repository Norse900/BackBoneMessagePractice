/**
 * Created by montgomery on 2/11/14.
 */
/**
 * Created by montgomery on 2/11/14.
 */
$("#loadTest").text().content += ("loaded messageSpec");
describe("Message Specs", function () {
    describe("The Message Object", function () {
        var messageObject = new SecretMessage();
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
                expect(messageObject.title.length).toBeGreaterThan(0);
            })
            it("should have a default body content of 'default body text'", function () {
                expect(messageObject.body).toContain("default body text");
            });
        });
        describe("Owner Initialization Tests", function () {
            it("should have an owner", function () {
                expect(messageObject.owner.length).toBeGreaterThan(0);
            })
            it("should have a default owner of 'default owner'", function () {
                expect(messageObject.owner).toContain("default owner");
            });
        });
        describe("Recipient Initialization Tests", function () {
            it("should have a recipient", function () {
                expect(messageObject.recipient.length).toBeGreaterThan(0);
            })
            it("should have a default recipient of 'default recipient'", function () {
                expect(messageObject.recipient).toContain("default recipient");
            });
        });
        describe("Status Initialization Tests", function () {
            it("should have a status", function () {
                expect(messageObject.status.length).toBeGreaterThan(0);
            })
            it("should have a default status of 'unsent'", function () {
                expect(messageObject.status).toContain("unsent");
            });
        });

    });
    describe("Saving a Message", function () {
        describe("Saving a Message To Local Storage", function () {

        });
    });
});
