var maximumWealth = function(accounts) {
    let arrayMax = [];
    for (let i = 0; i < accounts.length; i++) {
      arrayMax.push(accounts[i].reduce((a , b) => a + b, 0))
    }
    let richest = Math.max(...arrayMax);
    return richest;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))