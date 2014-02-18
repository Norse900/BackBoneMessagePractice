/**
 * Created by montgomery on 2/11/14.
 */
describe('BackBoneMessagePracticeTests ContactList Tests', function () {
    var contactItem = App.Contact;
    var contactCollection = App.ContactCollection;


    var userContacts = {
        "contacts": '{' +
            '"contact1":{"name": "Curtis_The_Custard_Cooler","contactAddress": "A Bakery Near You"},' +
            '"contact2":{"name": "Bob_The_HotDog_Fisher","contactAddress": "Corner of Main and Main"},' +
            '"contact3":{"name": "Phil_The_Phone_Phreaker","contactAddress": "Still tracing..."},' +
            '"contact4":{"name": "Stew_The_Stump_Remover","contactAddress": " -76.309931, 22.499657"}' +
            '}'
    }

    var storageKey = "userContacts";
    var storageValue = JSON.stringify(userContacts);
    localStorage.setItem(storageKey, storageValue);
    contactCollection.getAllContacts("userContacts");
    var checkStorage = localStorage.getItem("userContacts");

    //console.log("should have items in the storage : " + checkStorage);
    beforeEach(function () {
        storageKey = "userContacts";
        storageValue = JSON.stringify(userContacts);
        localStorage.setItem(storageKey, storageValue);
        checkStorage = JSON.parse(localStorage.getItem("userContacts"));
        //localStorage.clear();

    });
    afterEach(function () {
        localStorage.clear();
    });
    describe("Contact Tests", function () {
        describe("Contact Object", function () {
            var contactItem = App.Contact;
            it("should have a default name of 'default name'", function () {
                expect(contactItem.attributes.name).toContain("default name");
            });
            it("should have a default contact address of 'default contact address' ", function () {
                expect(contactItem.attributes.contactAddress).toContain("default contact address");
            });

        });
        describe("Contact Collection", function () {
            describe("check for items set at beginning of test run", function () {

                it("should find the 'userContacts' object in localStorage", function () {
                    checkStorage = localStorage.getItem("userContacts");

                    expect(checkStorage.length).toBeGreaterThan(10);
                });
                it("should find the 'Curtis' entry", function () {
                    var curtisCheck = [];
                    var item = JSON.parse(localStorage.getItem("userContacts"));
                    $.each(item, function (key, value) {
                        var names = JSON.parse(item.contacts);
                        $.each(names, function (key, value) {
                            //console.log(key + ' = ' + value);
                            curtisCheck.push(value.name + " " + value.contactAddress);

                        });
                    });

//item.contacts
                   console.log(curtisCheck.length);

                });
            });
        });
    });
});