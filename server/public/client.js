console.log("Server is Serving");


//Axios (HTTP Requests)
//axios allows us to call routes from the client side. i.e. /quotes
function getQuotes(){
    // Get quotes from server with Axios
    axios({
        method:'GET',
        url:'/quotes'
    }).then(function(response) {
        console.log("SUCCESS", response.data);
        console.log('response', response);
        let quotesFromServer = response.data
        renderToDom(quotesFromServer)
        //run function to render list on dom
    }).catch(function(error) {
        alert('Request failed.')
    });
}

function renderToDom(quotesFromServer){
    let contentDiv = document.querySelector('#output')
    contentDiv.innerHTML = ''
    //Loop over array of quotes and append them to the content div
    for(let quote of quotesFromServer) {
        contentDiv.innerHTML += `
        <p>"${quote.text}"  -${quote.author}</p>
        `;
    }
}
getQuotes()

//alternate syntax
axios.get('/quotes').then((response) => {
    console.log('Sucess' , reponse);
}).catch((error) =>{
    console.log(error);
    alert('ya dun messed')
})
