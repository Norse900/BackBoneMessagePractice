/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
//in the example, he sets a var to the collection and then instantiates an object of it below, assigning it to app
var messageCollection = Backbone.Collection.extend({
    model: App.MessageModel,
    url:'/messages',

/** delete('/messages/:id'
 * put('/messages/:id'
 * App.get('/messages
 * App.post('/messages'*/
});
App.MessageCollection = new messageCollection();