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