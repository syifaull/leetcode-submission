// function findDuplicationNumber(numbers) {
//   let duplicate = []
//   for (let i = 0; i < numbers.length; i++ ) {
//     let newArray = [];
    
//     for (let j = i+1; j < numbers.length; j++) {
//       numbers[j] === numbers[i] ? newArray.push(numbers[j]) : null;
//     }
//     return newArray;
//   }
//   return duplicate;

// }

// console.log(findDuplicationNumber([1, 1])) // [1]
// console.log(findDuplicationNumber([1, 2, 3, 4])) // 
// console.log(findDuplicationNumber([1, 2, 1, 2, 2, 3, 4, 5, 5, 5, 5])) // [1, 2, 5]

// function find_duplicate_in_array(arra1) {
//   let object = {};
//   let result = [];

//   arra1.forEach(function (item) {
//     if(!object[item]) 
//       object[item] = 0;
//       object[item] += 1;
//   })

//   for (var prop in object) {
//     if(object[prop] > 1) {
//       result.push(prop);
//     }
//   }
  

//   return result;

// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

const a = [1,1,1,3,3,4,5,5,6,7,8,8,8,8,8,9,2];

function findDublicatesNumbersFromArray(a) {
    var d = [];
    for (let i = 0; i < a.length; i++) {
        var ct = a[i];
        var cmt = 0;
        for(var x = 0; x<a.length;++x) {
            if(ct === a[x]) {
                cmt++
                if(cmt > 1) {
                    d.push(a[i])
                }
            }
        }
    }
    return d.filter((i, ix)=> d.indexOf(i) === ix);
}

console.log(findDublicatesNumbersFromArray(a)) 
