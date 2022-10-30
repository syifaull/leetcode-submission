function encodeDecode(word) {
  let result = ""
  let arrayResult =[]
  let array = word.split("")
  for (let i = 8; i < array.length; i++) {
    let charCode = array[i].charCodeAt();
    if (word.slice(0, 8) === "<encode>") {
      arrayResult.push(String.fromCharCode(((charCode - 97  + 2) % 26) + 97));
    } else {
      arrayResult.push(String.fromCharCode(((charCode - 122  - 2) % 26) + 122));
    } 
  }
  return result += arrayResult.join("")
  
}

//encode
console.log(encodeDecode("<encode>abcd")) //cdef
console.log(encodeDecode("<encode>xyz")) //zab

//decode
console.log(encodeDecode("<decode>cdef")) //abcd
console.log(encodeDecode("<decode>zab")) //xyz