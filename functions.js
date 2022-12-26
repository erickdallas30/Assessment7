// Sum Zero
// O(n) - Linear Time
// Quadratic Space
function addToZero(arr) {
  let obj = {};
  let negNum;

  for (let i = 0; i < arr.length; i++) {
    negNum = arr[i] * - 1;

    if (obj[negNum]) {
      return true;
    } else {
      obj[arr[i]] = true;
    }
  }
  return false;
}

console.log("Sum Zero");
console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));
console.log("---------------\n---------------");

// Unique Characters
//O(1) - Constant Time
//Constant Space

let hasUniqueChars = (string) => {
  return new Set([...string]).size == string.length;
};

console.log("Unique Characters");
console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));
console.log("---------------\n---------------");

//Pangram Sentence
//O(n) - Linear Time
//Linear Space
function isPangram(string) {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log("Pangram Sentence");
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
console.log("---------------\n---------------");

// Longest Word
//O(n) - Linear Time
//Linear Space
function findLongestWord(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word.length;
}

console.log("Longest Word");
console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(["Longest", "Word"]));
console.log("---------------\n---------------");
