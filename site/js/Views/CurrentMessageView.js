/**
 * Created by montgomery on 2/25/14.
 */
var App = App || {};
App.CurrentMessageView = Backbone.View.extend({
    el: '#messagesListArea',
    template: _.template($("#messagesContentDisplay").html()),
    render: function () {
        console.log("CurrentMessageView rendering ");
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    },

    removeMessage: function () {
        this.model.destroy();
        this.remove();
    }

});