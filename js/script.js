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
        "Just Monika",
        "Ame my beloved",
        "I love being mentally abused",
        "I learned Japanese just to<br>understand what vtuber's saying",
        "Pls pay me",
        "Lazy butt motherfudger",
        "Remember, don't pay taxes",
        "Oh! You fudging cat!<br>Right in the fudging happy sack!",
        "Jawa!"
    ]
    const random = Math.floor(Math.random() * quotes.length);

    return quotes[random];
}