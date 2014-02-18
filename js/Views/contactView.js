/**
 * Created by montgomery on 2/18/14.
 */
$(function () {
    var contact = App.Contact;
    var contactView = Backbone.View.extend({
        tagName: 'li',
        model: App.Contact,
        template: _.template($("#contactsListDisplay").html()),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    App.ContactView = new contactView({model:contact});
});