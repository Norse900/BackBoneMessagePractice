var scraper = function scrapeLocalStorageForObjects(ObjectIn) {
    var item;
    if (!ObjectIn || !ObjectIn.id) {
        item = JSON.parse(localStorage.getItem("userContacts"));
    }
    else {
        item = JSON.arse(localStorage.getItem(ObjectIn.id));
    }
    var returnedStorageItems = [];
    $.each(item, function (key, value) {
        var names = JSON.parse(item.contacts);
        console.log("value type : " + typeof  value);
       if(typeof value=== 'object'){
            console.log("name.value is an object : " + value);
           scrapeLocalStorageForObjects(value);
       }else {
          // console.log("returning values : " +  key + ' = ' + value);
           var intermed = {name: value.name, contactAddress: value.contactAddress};
           returnedStorageItems.push(intermed);

       }


        /*$.each(names, function (key, value) {
            console.log("returning values : " +  key + ' = ' + value);
            var intermed = {name: value.name, contactAddress: value.contactAddress};
            returnedStorageItems.push(intermed);

        });*/
    });
    return returnedStorageItems;
};
