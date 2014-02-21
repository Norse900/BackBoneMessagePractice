/**
 * Created by montgomery on 2/21/14.
 */
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths
    mongoose = require('mongoose'); //MongoDB integration

//Create server
var App = express();

//getting cluttered. Want to move the model data out.
var message = new mongoose.Schema({
    title: String,
    body: String,
    owner: String,
    recipient: String,
    status: String,
    dateSent: String
});
var MessageModel = mongoose.model('message', message);
var contact = new mongoose.Schema({
    name:String,
    contactAddress: String
});

var ContactModel = mongoose.model('contact', contact);
var currentMessage = new mongoose.Schema({
    id:String
});

var CurrentMessageModel = new mongoose.model('currentMesage', currentMessage);

var draftMessage = new mongoose.Schema({
    title: String,
    body: String,
    owner: String,
    recipient: String,
    status: String,
    dateSent: String
});
var DraftMessageModel = mongoose.model('draftMessage', draftMessage);

App.get('/api', function (req, res) {
    res.send('Welcome');
});


//eventually, I will need to implement something similar to the Command Pattern
//to get all of the needed model data from the different dbs.
App.get('/messages', function(req,res){
  return  MessageModel.find(function(err, messages){
      if( !err ) {
          return response.send( messages );
      } else {
          return console.log( err );
      }
  });
});

// Configure server
App.configure(function () {
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

//Start server
var port = 4711;
App.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, App.settings.env);
});

mongoose.connect('mongodb://localhost/messageAppDB');

