// Input: [1,2,3,1]
// Output: true

function containsDuplicates(arr) {
    let array = []
    for (i in arr) {
        if (!array.includes(arr[i])) {
            array.push(arr[i])
        }
    }
    return !(arr.toString() == array.toString());
}

console.log(containsDuplicates([1, 2, 3, 4]));