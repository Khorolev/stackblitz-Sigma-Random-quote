function setQuote() {

    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    const quotes = ["The degree of civilization in a society can be judged by entering its prisons.  - Fyodor Dostoevsky",
    "Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don’t say that you’ve wasted time. I am studying that mystery because I want to be a human being. - Fyodor Dostoevsky"];

    const randomIndex = Math.floor(Math.random()*quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteParts = randomQuote.split(" - ");

    quote.innerHTML = quoteParts[0];
    author.innerHTML = ` - ${quoteParts[1]}`;

}