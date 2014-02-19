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
                var foundStorageItem = false;
                var foundCurtis = false;
                var foundCurtisAddress = false;
                var foundBob = false;
                var foundBobAddress = false;
                var foundPhil = false;
                var foundPhilAddress = false;
                var foundStew = false;
                var foundStewAddress = false;
                var curtisCheck = [];
                var item = JSON.parse(localStorage.getItem("userContacts"));
                $.each(item, function (key, value) {
                    var names = JSON.parse(item.contacts);
                    $.each(names, function (key, value) {
                        //console.log(key + ' = ' + value);
                        var intermed = {name: value.name, contactAddress: value.contactAddress};
                        curtisCheck.push(intermed);

                    });
                });

                for (var i = 0; i < curtisCheck.length; i++) {
                    var userCheck = curtisCheck[i].name;
                    var addressCheck = curtisCheck[i].contactAddress;
                    //I wanted to use 2 switch statements here, but they were acting up. I need to move on to gain a foothold with Collections.

                    if (userCheck.indexOf("Curtis") >= 0) {
                        foundCurtis = true;
                    }

                    if (userCheck.indexOf("Bob") >= 0) {
                        foundBob = true;
                    }

                    if (userCheck.indexOf("Phil") >= 0) {
                        foundPhil = true;
                    }

                    if (userCheck.indexOf("Stew") >= 0) {
                        foundStew = true;
                    }


                    if (addressCheck.indexOf("Bakery")) {
                        foundCurtisAddress = true;
                    }

                    if (addressCheck.indexOf("Main")) {
                        foundBobAddress = true;
                    }

                    if (addressCheck.indexOf("tracing")) {
                        foundPhilAddress = true;
                    }

                    if (addressCheck.indexOf("-76.309931, 22.499657")) {
                        foundStewAddress = true;
                    }


                }


                it("should find the 'userContacts' object in localStorage", function () {
                    checkStorage = localStorage.getItem("userContacts");

                    expect(checkStorage.length).toBeGreaterThan(10);
                    foundStorageItem = true;
                });


                it("should find the 'Curtis' entry", function () {
                    expect(foundCurtis).toBeTruthy();
                });
                it("should find the 'Curtis' contactAddress entry", function () {
                    expect(foundCurtisAddress).toBeTruthy();
                });
                it("should find the 'Bob' entry", function () {
                    expect(foundBob).toBeTruthy();
                });
                it("should find the 'Bob' contactAddress entry", function () {
                    expect(foundBobAddress).toBeTruthy();
                });
                it("should find the 'Phil' entry", function () {
                    expect(foundPhil).toBeTruthy();
                });
                it("should find the 'Phil' contactAddress entry", function () {
                    expect(foundPhilAddress).toBeTruthy();
                });
                it("should find the 'Stew' entry", function () {
                    expect(foundStew).toBeTruthy();
                });
                it("should find the 'Stew' contactAddress entry", function () {
                    expect(foundStewAddress).toBeTruthy();
                });
            });

        })
        ;
    });
});