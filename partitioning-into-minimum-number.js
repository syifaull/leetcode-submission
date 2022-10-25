var minPartitions = function(n) {
    let newArray = n.split("").map(Number);
    let max = Math.max(...newArray)
    return max
};

console.log(minPartitions("4321"))