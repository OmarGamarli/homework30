// ----------------1------------
// ----------------2-----------
// ----------------3-----------
function sum(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        const numbers = arr[i].match(/\d+/g);
        if (numbers) {
            for (let j = 0; j < numbers.length; j++) {
                totalSum += parseInt(numbers[j]);
            }
        }
    }
    return totalSum;
}

const arr2 = ["1", "five", "2wenty", "thr33"]
console.log(sum(arr2));
//   -----------------4-------------
function freeShipping(order) {
    let total = 0;
    for (let item in order) {
        total += order[item];
    }
    return total > 50
}
console.log(freeShipping({
    "Shampoo": 5.99,
    "Rubber Ducks": 15.99
}));
// -----------------5---------------
function afternYears(people, n) {
    const result = {};
    for (let person in people) {
        if (people.hasOwnProperty(person)) {
            result[person] = Math.abs(people[person] + n);
        }
    }
    return result;

}
console.log();
let age = {
    "Joel": 32,
    "Fred": 44,
    "Reginald": 65,
    "Susan": 33,
    "Julian": 13

}
let n = 1
console.log(afternYears(age, n));