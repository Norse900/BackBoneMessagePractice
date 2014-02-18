/**
 * Created by montgomery on 2/11/14.
 */
describe('BackBoneMessagePracticeTests ContactList Tests', function(){
    var contactItem;
    var contactCollection;

    beforeEach(function () {
        contactItem = App.Contact;
        contactCollection = App.ContactCollection;
        var userContacts = {
            "contact1": {
                "name": "Curtis_The_Custard_Cooler"
            },
            "contact2": {
                "name": "Bob_The_HotDog_Fisher"
            },
            "contact3": {
                "name": "Phil_The_Phone_Phreaker"
            },
            "contact4": {
                "name": "Stew_The_Stump_Remover"
            }
        }
        localStorage.setItem('contactList', userContacts);
    });
    afterEach(function () {
            localStorage.clear();
        });
    describe("Contact Tests",function(){
        describe("Contact Object",function(){
            var contactItem = App.Contact;
            it("should have a default name of 'default name'", function(){
                expect(contactItem.attributes.name).toContain("default name");
            });
            it("should have a default contact address of 'default contact address' ", function(){
                expect(contactItem.attributes.contactAddress).toContain("default contact address");
            });

        });
    });
});