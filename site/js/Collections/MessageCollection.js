/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
//in the example, he sets a var to the collection and then instantiates an object of it below, assigning it to app
App.MessageCollection = Backbone.Collection.extend({
    model: App.MessageModel,
    url: '/messages'

    /** delete('/messages/:id'
     * put('/messages/:id'
     * App.get('/messages
     * App.post('/messages'*/
});
/*
App.MessageCollection.fetch({
    dataType: "json",
    success: function (data) {
        console.log("success fetching data : " + data);
        return data;
    }, error: function (err) {
        console.log("error fetching data : " + err);
    }
});
    */