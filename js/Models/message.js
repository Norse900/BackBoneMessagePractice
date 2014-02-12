var app = app || {};

app.SecretMessage = Backbone.Model.extend({
    defaults: {
        title: "default title",
        body: "default body text",
        owner: "default owner",
        recipient: "default recipient",
        status: "unsent",
        dateSent: "0/0/0000"
    },

    setTitle:function(titleNew){
        this.set({title:titleNew});
    },
    setBody:function(bodyNew){
        this.set({body:bodyNew})
    },
    setOwner:function(ownerNew){
        this.set({owner:ownerNew})
    },
    setRecipient:function(recipientNew){
        this.set({recipient:recipientNew})
    },
    setStatus:function(statusNew){
        this.set({status:statusNew})
    },
    setDateSent:function(dateSentNew){
        this.set({dateSent:dateSentNew})
    },
    getTitle:function(){
        return this.title;
    },
    getBody:function(){
        return this.body;
    },
    getOwner:function(){
        return this.owner;
    },
    getRecipient:function(){
        return this.recipient;
    },
    getStatus:function(){
        return this.status;
    },
    getDateSent:function(){
        return this.dateSent;
    }


});
/*
 function SecretMessage() {

 this.title = "default title",
 this.body = "default body text",
 this.owner = "default owner",
 this.recipient = "default recipient",
 this.status = "unsent"
 };
 */