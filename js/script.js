"use strict";

const quotes = [
    "quotation",
    "quotations",
    "quotationers",
    "QUOTATION",
    "QuOtAtIoN"
];

function getRandomQuote() {
    if (quotes.length === 0) {
        return 'No quotes available';
    }
}

const randomIndex = Math.floor(Math.random()*quotes.length);
return quotes [randomIndex]

function displayRandomQuote() {
    const randomQuote = getRandomQuote()
    const quoteElement = document.getElementById("displayQuoteBtn");
    quoteElement.textContent = randomQuote;
}

const  button = const document.getElementById("displayQuoteBtn");
button.addEventListener(`click`, displayRandomQuote);


/* // #region 
const randomIndex = quotes.length;
const randomQuote = document.getElementById("randomQuote");

return quotes[randomIndex];

function displayRandomQuote() {
    getRandomQuote(randomQuote);
    quotes = document.getElementById("quotes");
}

const document.getElementById("displayQuoteBtn").addEventListener("click", () =>);
//#endregion */
