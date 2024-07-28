const apiUrl = "https://api.quotable.io/random";
const author = document.getElementById("author");
const quote = document.getElementById("quote");

async function getQuote(url){
    let response = await fetch(url);
    const data = await response.json()
    // console.log(data)
    author.innerHTML = data.author;
    quote.innerHTML = data.content;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "---by " + author.innerHTML, "tweet window", "width=600, height=300")
}