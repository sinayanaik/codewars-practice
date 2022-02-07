/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

// My solution

function duplicateEncode(word) {
  let Sword = word.toLowerCase();
  let newWord = "";
  for (let i = 0; i < Sword.length; i++) {
    let count = 0;
    for (let j = 0; j < Sword.length; j++) {
      if (Sword[i] === Sword[j]) {
        count++;
      }
    }
    if (count > 1) {
      newWord += ")";
    } else {
      newWord += "(";
    }
  }
  return newWord;
}

// Best practice using 
//     regex,
//     map,
//     indexOf,
//     lastIndexOf,
//     filter

function duplicateEncode_1(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

//

function duplicateEncode_2(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

//
function duplicateEncode_3(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }