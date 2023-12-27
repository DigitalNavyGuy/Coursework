const {bookText} = require("./book-text");

// ## Prompts

// 1. How many tokens are in `bookText`?
const tokenCount = bookText.length;
console.log(tokenCount);

// 2. What is the total number of characters in `bookText`?
const characterCount = bookText.join('').length;
console.log(characterCount);

// 3. What is the mean length of a token?
function mean(arr) {
    const average = arr.join('').length / arr.length
    console.log(average);
    return average;
  }
  mean(bookText);

// 4. What is the length of the longest token?
function longestToken(arr) {
    return bookText.sort(function(a, b) {
        return b.length - a.length;
    })[0];
}

console.log(longestToken(bookText).length, longestToken(bookText));
// console.log(longestToken(bookText));

// 5. How many tokens are longer than 4 characters?
function moreThanFour(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            count++;
        }
    }
    
    return count;
}
console.log(moreThanFour(bookText));

// 6. How many tokens start with the letter "s" (case-insensitive)?


// 7. Do more tokens start with the letter "s" or "t"?
// 8. What are the 5 most frequent tokens that appear in the text, and how many times do they each appear?
// 9. What are the 5 most frequent characters that appear in the text, and how many times do they each appear?
// 10. How many tokens do not contain any vowels?