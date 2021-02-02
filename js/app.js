
//DOM references
let quoteContainer = document.querySelector('#quote-container');
let form = document.querySelector('#search-form')
let textEl = document.querySelector('h2')
let authorEl = document.querySelector('p')

//event listeners
form.addEventListener('submit', findQuote)

// functions
function findQuote(event) {
    event.preventDefault();

    fetch(`https://type.fit/api/quotes`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.log(json);
        clear();
        let quote = json;

        function randomQuote(info) {
            return info[Math.floor(Math.random()*quote.length)];
        }
        var newQuote = randomQuote(quote)
        // console.log(newQuote)
        
        textEl.innerText = newQuote.text
        authorEl.innerText = newQuote.author
    })
}

function clear() {
        // while the post-container still has child divs, remove the first child.
    while(quoteContainer.firstChild) {
         quoteContainer.removeChild(quoteContainer.firstChild)
    }
}