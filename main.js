/**
 * Created by montgomery on 2/14/14.
 */
(function ($) {
    //Object declarations go here

    var myMessage;

    var MainMessageView;
    var messageView;

        MainMessageView = Backbone.View.extend({
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

        messageView = new MainMessageView({
            model: myMessage,
            el: $("#dateSentMessageBodyInfo")
        });
        messageView.render();
    });
