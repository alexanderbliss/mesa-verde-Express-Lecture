console.log("Server is Serving");

//Axios (HTTP Requests)
//axios allows us to call routes from the client side. i.e. /quotes

function submitForm(event) {
    event.preventDefault();
    console.log('On Click of submitting the form')
    let quote = document.querySelector("#quoteInput").value
    let author = document.querySelector("#authorInput").value
    console.log('Inputs:', quote, author)
    let quoteToAdd = {
        text: quote,
        author: author
    }
    console.log("Quote object:", quoteToAdd)
    axios({
        method: "POST",
        url: "/quotes",
        data: quoteToAdd
    }).then(function(response) {
        console.log('Response POST request:', response)
        getQuotes()
    }).catch(function(error) {
        alert('Request POST /quotes failed.')
    })
}


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
        alert('Request GET /quotes failed.')
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
    console.log('Success' , response);
}).catch((error) =>{
    console.log(error);
    alert('ya dun messed')
})
