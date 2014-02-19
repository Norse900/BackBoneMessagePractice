/**
 * Created by montgomery on 2/19/14.
 */
// Include http module.
var http = require("http");
var fs = require('fs');

var sqlite3 = require("sqlite3").verbose();
var sqlOps = require("sqlOps");


// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function (request, response) {
    // Attach listener on end event.
    request.on("end", function () {
        // Second parameter holds header fields in object
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        response.end('Hello HTTP!');
    });
}).listen(8080);

//will be using npm package sqlite3, which can port to mobile devices.

//need to read and write streams
//for read, make sure the file exists. if so, open for reading. If not, emit an error.

//for write, the same, with some twists. If it exists, it could be an update or a new entry. Won't know
//at this point. Better to read the file in, sort using _. and check for a match?