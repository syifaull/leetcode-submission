var mostWordsFound = function(sentences) {
    let arrayMost = [];
    for (let i = 0; i < sentences.length; i++) {
      let separate = sentences[i].split("");
      let space = 1;
      for (let j = 0; j < separate.length; j++) {
        (separate[j] === " " ? space++ : null)
      }
      arrayMost.push(space);
    }
    let most = Math.max(...arrayMost);
    return most;
};

console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))