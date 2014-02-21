/**
 * Created by montgomery on 2/20/14.
 */
var Workspace = Backbone.Router.extend({
    routes: {
        '/': 'index.html',
        '/messages': function (collection) {
            console.log("tried to follow the messages router");
        }



        /*
         * delete('contacts/:id'
         * put('/contacts/:id'
         * App.get('/contacts
         * App.post('/contacts'
         *  * delete('messages/:id'
         * put('/messages/:id'
         * App.get('/messages
         * App.post('/messages'
         * */
    }

});

App.Router = new Workspace();