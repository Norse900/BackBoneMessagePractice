/**
 * Created by montgomery on 2/20/14.
 */
var App = App || {};
App.MessageView = Backbone.View.extend({
    el: '#messagesListArea',
    template: _.template($("#messagesList").html()),
    render: function () {
        //console.log("MessageView rendering ");
        this.$el.append(this.template(this.model.toJSON()));
        return this;
    },

    removeMessage: function () {
        this.model.destroy();
        this.remove();
    }

});