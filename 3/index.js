const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.-Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
]
const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
    
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) 
   
   if (usedIndexes.has(randomIdx)) continue
   
   const quote = quotes[randomIdx]
   quoteElement.innerHTML = quote;
   usedIndexes.add(randomIdx)
   break
    }
}