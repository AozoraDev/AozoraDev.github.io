(() => {
    // Change the quote every visit
    document.querySelector("#quote").innerHTML = getQuote();
})();

function getQuote() {
    const quotes = [
        "Do ded people pay taxes?",
        "Is Superman circumsized?",
        "I can't actually draw tho",
        "Cold, but, not cruel",
        "I have 187 kids in my basement",
        "727",
        "Nepotism still occurs",
        "Indomie my beloved",
        "Just Monika"
    ]
    const random = Math.floor(Math.random() * quotes.length);

    return quotes[random];
}