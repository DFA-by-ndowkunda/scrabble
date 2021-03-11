// Write your implementation here
let letterScores = {
      "A": 1,
      "E": 1,
      "I": 1,
      "O": 1,
      "U": 1,
      "L": 1,
      "N": 1,
      "R": 1,
      "S": 1,
      "T": 1,
      "D": 2,
      "G": 2,
      "B": 3,
      "C": 3,
      "M": 3,
      "P": 3,
      "F": 4,
      "H": 4,
      "V": 4,
      "W": 4,
      "Y": 4,
      "K": 5,
      "J": 8,
      "X": 8,
      "Q": 10,
      "Z": 10
};
function isWord(word) {
    return word = word || '0'
};
let checkWord = isWord('quirky');
function sortLetters() {
  let letters = checkWord.toUpperCase().split("");
  return letters
};
let scrabbleWord = sortLetters();
const scrabbleScores = scrabbleWord.map(letter => {
  if (typeof letterScores[letter] === 'number') {
    return letterScores[letter]
  } else {
    return 0 
  }
})
let sum = 0;
scrabbleScores.forEach(score => {
   return sum += parseInt(score);
})
console.log(sum);
