const quoteTag = document.getElementById("quote")

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "You don't have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "Whether you think you can or think you can\’t, you\’re right. - Henry Ford",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison"
];

const usedIndexes = new Set()

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        console.log(randomIdx)
        if (usedIndexes.has(randomIdx)) {
            continue;
        }

        const quote = quotes[randomIdx]
        quoteTag.innerHTML = quote
        usedIndexes.add(randomIdx)
        break;
    }


}