// Write your implementation here
class Scrabble {
  constructor(word) {
    this.word = word;
    this.letterScores = {
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
    }
  }
  score() {
    this.word = this.word || '0';
    let totalScore = 0;
    let letters = this.word.toUpperCase().split("");
    const scores = letters.map(letter => {
      return typeof this.letterScores[letter] === 'number' ? this.letterScores[letter] : 0;
    })
   scores.forEach(score => {
      totalScore += score;
    })
   return totalScore
  }
  }
module.exports = Scrabble

























/*
  }
let checkWord = isWord();
let scrabbleWord = sortLetters();
let sum = 0;

/*
function isWord(word) {
    return word = word || '0'
};
*/
/*
function sortLetters() {
  let letters = checkWord.toUpperCase().split("");
  return letters
};
  const scores = scrabbleWord.map(letter => {
    if (typeof letterScores[letter] === 'number') {
      return letterScores[letter]
    } else {
      return 0
    }
  });
*/
/*
function score(){
  for (let i = 0; i < scores.length; i++){
    sum += (scores[i]);
  };
  return sum
}
console.log(score());
*/