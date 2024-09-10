//require express - gives us a function
const express = require('express')

//createing an instance of express by calling
// the function returned above - which is an object
const app = express();
const port = 5001

//express static file serving - public is the folder name
app.use(express.static('server/public'))

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

let quoteList = [
    { text: 'That\'s one small step for a man, a giant leap for mankind.', author: 'Neil Armstrong' },
    { text: 'The more you read, the better you\'re going to become as a storyteller.', author: 'Stan Lee' },
    { text: 'May the force be with you', author: 'Everyone in star wars at some point' }
];

// when we visit http://localhost:5001/quotes
//in our browser, express will call this function
app.get('/quotes', function(req,res) {
    console.log('Request for /quotes was made');
    //send back the item in res.send()
    //so we can use it in our browser
    res.send(quoteList)
})

// all of these are the same - Route = Path = URL
// app.get('/quotes', function(req,res) {
//      ^ is the method         ^ is an object with information about the reqest