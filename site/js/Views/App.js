/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.AppView = Backbone.View.extend({
    el: '#container',
    initialize: function () {

     this.render();
    },
    render:function(){
        return this;
    },
    events:{
        'click #createMessage' : 'createMessage'
    },
    createMessage: function () {
        console.log("Add message called");
        var tryIt = new App.MessageCollectionView();
        console.log(tryIt);

    }
});