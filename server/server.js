//require express - gives us a function
const express = require('express')

//createing an instance of express by calling
// the function returned above - which is an object
const app = express();
const port = 5001

//express static file serving - public is the folder name
app.use(express.static('server/public'))

//allows express to parse through data to json
app.use(express.json());

//starts our server
app.listen(port, () => {
    console.log('listening on port', port);
})
console.log("is server running?");

// 1. npm start - starting the server loading server.js
// 2. go to localhost:5001
// 3. app.use(express.static('server/public'))
// 4. call server, sends folder to browser
// 5. browser reads/compiles folder and displays

//methods

//GET (READ) - retrieve data from the server
//POST (CREATE)- Save New data to the server
//PUT (UPDATE)- Update some data on the server
//Delete - delete some data on the server

// CRUD - CREATE READ UPDATE DELETE

// let quoteList = [
//     { text: 'That\'s one small step for a man, a giant leap for mankind.', author: 'Neil Armstrong' },
//     { text: 'The more you read, the better you\'re going to become as a storyteller.', author: 'Stan Lee' },
//     { text: 'May the force be with you', author: 'Everyone in star wars at some point' }
// ];

let quoteList = require('./modules/quoteList')
// when we visit http://localhost:5001/quotes
//in our browser, express will call this function
app.get('/quotes', function(req,res) {
    console.log('Request for GET /quotes was made');
    //send back the item in res.send()
    //so we can use it in our browser
    res.send(quoteList)
    //res.status(400).send('that request was not valid');
})

app.post('/quotes', function(req, res) {
    console.log('Request for POST /quotes was made')
    console.log('This is the quote object:', req.body)
    let quoteToAdd = req.body
    quoteList.push(quoteToAdd)
    res.sendStatus(201)
})

// all of these are the same - Route = Path = URL
// app.get('/quotes', function(req,res) {
//      ^ is the method         

// app.get('/quotes', function(req,res) {
   //                           ^ is an object with information about the reqest

   //// app.get('/quotes', function(req,res) {
//                                       ^
//whatever we pass to `res.send()` is the response Body


//status codes
//  200 OK: everything about this request worked
//  201 Created: The Server created some new Data for you.
//  400 Bad Reqest: the client sent some bad data
//  404 Not Found: That URL or endpoint is not available
//  500 Server Errror: something bad happend on the server

// by default res.send() uses a 200

//API "Application Programing Interface"
//a way for programs to communicate with each other. 
//In our case were talking about a web server that can send data back and forth to a client

//HTTP
//HTTP is the speciification that describes everything we just talk about. 
//So the fact that a reqest is made of a route and method, this is all descibed in HTTP Spec
