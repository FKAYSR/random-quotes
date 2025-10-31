"use strict";

const quotes = [
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway",
  "If you only do what you can do, you'll never be better than what you are now - Master Shifu",
  "Your mind is like water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, then the answer becomes clear - Master Oogway",
  "*stomach rumbling* My fist hunger for justice - Po",
  "There is no secret ingredient - Po",
];

function getRandomQuote() {
    if (quotes.length === 0) {
        return 'No quotes available';
    }
    const randomIndex = Math.floor(Math.random()*quotes.length);
    return quotes [randomIndex]
}



function displayRandomQuote() {
    const randomQuote = getRandomQuote();
    const quoteElement = document.getElementById("quotes");
    quoteElement.textContent = randomQuote;
}

const button = document.getElementById("displayQuoteBtn");
button.addEventListener("click", displayRandomQuote);


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
