/**
 * Created by montgomery on 2/19/14.
 */
function scrapeLocalStorageForObjects(){
    var item = JSON.parse(localStorage.getItem("userContacts"));
    var returnedStorageItems = [];
    $.each(item, function (key, value) {
        var names = JSON.parse(item.contacts);
        $.each(names, function (key, value) {
            //console.log(key + ' = ' + value);
            var intermed = {name: value.name, contactAddress: value.contactAddress};
            returnedStorageItems.push(intermed);

        });
    });
    return returnedStorageItems;
}