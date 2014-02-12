/**
 * Created by montgomery on 2/11/14.
 */
/**
 * Created by montgomery on 2/11/14.
 */
$("#loadTest").text().content += ("loaded messageSpec");
describe("Message Specs", function () {
    describe("The Message Object", function () {
        var messageObject = new app.SecretMessage();
        describe("Message Title Initialization Test", function () {
            it("should have a message title", function () {
                expect(messageObject.attributes.title.length).toBeGreaterThan(0);

            });
            it("should have a default title of 'default title'", function () {
                expect(messageObject.attributes.title).toContain("default title");
            });
        });
        describe("Message Body Initialization Tests", function () {
            it("should have a body", function () {
                expect(messageObject.attributes.body.length).toBeGreaterThan(0);
            })
            it("should have a default body content of 'default body text'", function () {
                expect(messageObject.attributes.body).toContain("default body text");
            });
        });
        describe("Owner Initialization Tests", function () {
            it("should have an owner", function () {
                expect(messageObject.attributes.owner.length).toBeGreaterThan(0);
            })
            it("should have a default owner of 'default owner'", function () {
                expect(messageObject.attributes.owner).toContain("default owner");
            });
        });
        describe("Recipient Initialization Tests", function () {
            it("should have a recipient", function () {
                expect(messageObject.attributes.recipient.length).toBeGreaterThan(0);
            })
            it("should have a default recipient of 'default recipient'", function () {
                expect(messageObject.attributes.recipient).toContain("default recipient");
            });
        });
        describe("Status Initialization Tests", function () {
            it("should have a status", function () {
                expect(messageObject.attributes.status.length).toBeGreaterThan(0);
            })
            it("should have a default status of 'unsent'", function () {
                expect(messageObject.attributes.status).toContain("unsent");
            });
        });

    });
    describe("Saving a Message", function () {
        describe("Saving a Message To Local Storage", function () {

        });
    });
    describe("Displaying a Message",function(){

    });
    describe("Creating a Meeting", function(){});
});
