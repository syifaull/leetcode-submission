function vowelConsonant(str) {
  let vowel = "";
  let consonant = "";
  let strLow = (str.toLowerCase()).replace(" ", "");
  // return vowel = strLow.match(/[aiueo]/gi);
  // let newArray = "";
  // for (let j = 0; j < strLow.length; j++) {
  //   for (let k = j + 1; k < strLow.length; k++) {
  //     if (strLow[i] === strLow[k])
  //   }
  // } 
  
  for (let i = 0; i < strLow.length; i++) {
    strLow[i] === "a" || strLow[i] === "i" || strLow[i] === "u" || strLow[i] === "e" || strLow[i] === "o" ? vowel += strLow[i] : consonant += strLow[i];

  }
  return vowel + " " + consonant ;
}

console.log(vowelConsonant("Sample Case"));
console.log(vowelConsonant("Next Case"))

// ("a" || "i" || "u" || "e" || "o")