var defangIPaddr = function(address) {
    let newArray = "";
    let newAddress = address.split("")
    for (let i = 0; i < newAddress.length; i ++) {
        if (newAddress[i] === ".") {
          newArray += "[.]";
        } else {
          newArray += newAddress[i];
        }
      }
      return newArray;
};

console.log(defangIPaddr("1.1.1.1"))
console.log(defangIPaddr("100.23.1.1"))