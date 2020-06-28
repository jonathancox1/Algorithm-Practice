let arr = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8]
let arr1 = [12, 23, 235, 2362, 124, 12]

//mean average all numbers
function mean(arr) {
    let total = arr.reduce((acc, curVal) => (acc + curVal), 0);
    let mean = total / arr.length;
    return mean;
}

//median number at exact middle of sorted array
function median(arr) {
    let sorted = (arr.sort((a, b) => a - b));
    return sorted[sorted.length / 2];
}

//mode number that appears the most
function mode(arr) {
    let multiple = {};
    for (let num of arr) {
        if (multiple[num]) {
            multiple[num]++;
        } else {
            multiple[num] = 1;
        }
    }
    let most = 0
    for (num in multiple) {
        if (multiple[num] > most) {
            most = num;
        }
    }
    return parseInt(most);
}

function simpleSort(arr) {
    let obj = {}
    for (let num of arr) { obj[num] = null }
    return Object.keys(obj)
}

console.log(mean(arr));
console.log(median(arr));
console.log(mode(arr1));
console.log(simpleSort(arr));