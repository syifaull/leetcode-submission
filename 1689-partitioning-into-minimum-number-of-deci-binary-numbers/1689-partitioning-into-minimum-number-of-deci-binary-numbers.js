/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let newArray = n.split("").map(Number);
    let max = Math.max(...newArray)
    return max
};