/**
 * Created by montgomery on 2/20/14.
 */
var Workspace = Backbone.Router.extend({
    routes: {
        '/': 'index.html'
    }

});

App.Router = new Workspace();