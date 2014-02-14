/**
 * Created by montgomery on 2/11/14.
 */
var MainMessageView = Backbone.View.extend({
    template: _.template('' +
        '<li><label>dateSent : </label><%= dateSent %></li>' +
        '<li><label>Message Body : </label><%= body %></li>'),
    render: function () {
        var html = this.template({
            dateSent: this.model.get('dateSent'),
            body: this.model.get('body')
        });
        $(this.el).html(html);
    }
});

var messageView = new MainMessageView({
    model: myMessage,
    el: $("#dateSentMessageBodyInfo")
});
messageView.render();
