"use strict";

const quotes = [
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway",
  "If you only do what you can do, you'll never be better than what you are now - Master Shifu",
  "Your mind is like water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, then the answer becomes clear - Master Oogway",
  "*stomach rumbling* My fist hunger for justice - Po",
  "There is no secret ingredient - Po",
];

// Definerer funktionen getRandomQuote. if antal quotes er 0 = "no quotes available". === is the strict equality operator, hvilket betyder det kun viser "true" når begge operander har den samme type og samme værdi. Kort sagt sammenligner type og value, 'type' === 'value'. Modsat er !== (strict inequality).
function getRandomQuote() {
    if (quotes.length === 0) {
        return 'No quotes available';
    }
    // Math.random() = producerer et pseudo-random nummer fra 0-1. 
    // *quotes.lenth = ganger med mængden af citater og skalerer det til 0-mængden af citater(5). 
    // Math.floor = runder ned til nærmeste heltal
    // Resultatet samles i konstanten randomIndex. Som på næste linje bruges til at vælge et tilfældigt element fra quotes arrayet.
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

