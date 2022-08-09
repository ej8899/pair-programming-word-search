const wordSearch = (letters, word) => {
  
  for (let i = 0; i < 2; i ++) {
    if(checkWords(letters, word) === true) {
      return true;
    }
    letters = transpose(letters);
  }
  return false; // SOLVE
}

const checkWords = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(JSON.stringify(horizontalJoin));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (reverseString(l).includes(word)) return true;
  }
  return false;
};

const reverseString = function (str) {
  let splitString = str.split(""); // var splitString = "hello".split("");
  let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  return joinArray; // "olleh"
};

const transpose = function (matrix) {
  if(!matrix || matrix.length === 0 ) { return (['empty input']); }

  const rows = matrix.length, cols = matrix[0].length;
  const outputArray = [];

  for (let y = 0; y < cols; y++) {  // loop for each required row
    outputArray[y] = Array(rows); // build empty row  -->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
  }
  
  for (let y = 0; y < rows; y++) { // populate the empty array -- work on a row 
    for (let x = 0; x < cols; x++) { // work on each column in the current row
      outputArray[x][y] = matrix[y][x];
    }
  }
  return outputArray;
};



//
// HOW TO DEAL w DIAGONALS - think back to prep w queens threat
// can we find matching initial letter, then use queens threat concept to check ea diagonal for next matching letter?
//

module.exports = wordSearch