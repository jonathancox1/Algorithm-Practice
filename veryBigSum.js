function aVeryBigSum(arr) {
    return arr.reduce((a, b) => a + b)
}


let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr));