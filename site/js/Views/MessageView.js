/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageView = Backbone.View.extend({
    el: '#messageArea',
    template: _.template($("#messagesContentDisplay").html()),
    render: function () {
        console.log("MessageView rendering ");
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeMessage: function () {
        this.model.destroy();
        this.remove();
    }

});