"use strict";

const quotes = [
    {"quotation"},
    {"quotations"},
    {"quotationers"},
    {"QUOTATION"},
    {"QuOtAtIoN"}
];
const randomIndex = quotes.length;
const randomQuote = document.getElementById("randomQuote");

function getRandomQuote() {
    if (quotes.length === 0) {
        return 'No quotes available';
    }
    Math.random();
    Math.floor();
}

return quotes[randomIndex];

function displayRandomQuote() {
    getRandomQuote(randomQuote);
    quotes = document.getElementById("quotes");
}

const document.getElementById("displayQuoteBtn").addEventListener("click", () =>);

