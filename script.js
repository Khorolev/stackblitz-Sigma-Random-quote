function setQuote() {

    const quote = document.getElementById("quote");
    const author = document.getElementById("author");

    const randomQuote = "Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don’t say that you’ve wasted time. I am studying that mystery because I want to be a human being. - Fyodor Dostoevsky";

    const quoteParts = randomQuote.split(" - ");

    quote.innerHTML = quoteParts[0];
    author.innerHTML = " - ${quoteParts[1]}";

}