/**
 * Created by montgomery on 2/21/14.
 */
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths
    mongoose = require('mongoose'); //MongoDB integration

var Schema = mongoose.Schema;
var messageSchema = new Schema({
    title: String,
    body: String,
    owner: String,
    recipient: String,
    status: String,
    dateSent: String
});

var MessageModel = mongoose.model('MessageModel', messageSchema);


mongoose.connect('mongodb://localhost/messageAppDB', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
});

var App = express();

// Configure server
App.configure(function () {
    App.use(express.json());
    App.use(express.urlencoded());
    //parses request body and populates request.body
    App.use(express.bodyParser());

    //checks request.body for HTTP method overrides
    App.use(express.methodOverride());

    //perform route lookup based on url and HTTP method
    App.use(App.router);

    //Where to serve static content
    App.use(express.static(path.join(application_root, 'site')));

    //Show all errors in development
    App.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

});

App.get('/messages', function (req, res) {
    //console.log('inside messsages - GET ');
    MessageModel.find(function (err, messages) {
        if (!err) {
            console.log("messages : " + messages);
            res.contentType('application/json');
            res.setHeader("Access-Control-Allow-Origin", "*");
            return res.json(messages);
        } else {
            console.log(err);
            return err;
        }
    });
   // console.log("empty find : " + getThem.length);

});

App.post('/messages/', function (req, res) {
    console.log("updating message without an id. req is :");
    //console.dir(req);
    var reqItem = req;
    console.log("req is : " + reqItem.body.title);
    var message = new MessageModel({
        body: req.body.body,
        owner: req.body.owner,
        recipient: req.body.recipient,
        status: req.body.status,
        dateSent: req.body.dateSent
    });

    message.save(function (err) {
        if (!err) {
            console.log('message created');
            console.log("message : " + message);
            return message;

        } else {
            console.log("errored saving : " + err.message);
            return err.message;
        }

    });
    res.send(message);
});

App.put('/messages/:id', function (req, res) {
    console.log("updating message with the id : " + req.params.id);
    return MessageModel.findById(req.param.id, function (err, message) {
        message.body = req.body.body;
        message.owner = req.body.owner;
        message.recipient = req.body.recipient;
        message.status = req.body.status;
        message.dateSent = req.body.dateSent;

        return message.save(function (err) {
            if (!err) {
                console.log('message updated');
            } else {
                console.log(err);
            }
            return res.send(message);
        });
    });
});

App.delete('messages:id', function (err, messages) {
    console.log("deleting message : " + req.params.id);
    return MessageModel.findById(req.params.id, function (err, message) {
        return message.remove(function (err) {
            if (!err) {
                console.log('message removed');
                return res.send('');
            } else {
                console.log(err);
            }
        });
    });

});

App.post('/contacts', function (req, res) {
    var contact = new ContactModel({
        name: req.body.name,
        contactAddress: req.body.contactAddress
    });
    contact.save(function (err) {
        if (!err) {
            console.log('message updated');
        } else {
            console.log(err);
        }
        return res.send(message);

    });
});
App.get('/contacts', function (req, res) {
    return  ContactModel.find(function (err, contact) {
        if (!err) {
            return res.send(contact);
        } else {
            return console.log(err);
        }
    });
});
App.put('/contacts/:id', function (req, res) {
    console.log("updating contact with the id : " + req.params.id);
    return ContactModel.findById(req.param.id, function (err, contact) {
        contact.body = req.body.body;
        contact.owner = req.body.owner;
        contact.recipient = req.body.recipient;
        contact.status = req.body.status;
        contact.dateSent = req.body.dateSent;

        return contact.save(function (err) {
            if (!err) {
                console.log('contact updated');
            } else {
                console.log(err);
            }
            return res.send(contact);
        });
    });
});
App.delete('contacts/:id', function (err, contacts) {
    console.log("deleting contact : " + req.params.id);
    return ContactModel.findById(req.params.id, function (err, contact) {
        return contact.remove(function (err) {
            if (!err) {
                console.log('contact removed');
                return res.send('');
            } else {
                console.log(err);
                return;
            }
        });
    });

});


//Start server
var port = 4711;
App.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, App.settings.env);
});



