function plusMinus(arr) {
    let len = arr.length;
    let pos = 0;
    let neg = 0;
    let ze = 0;
    for (let num = 0; num < arr.length; num++) {
        if (arr[num] < 0) {
            neg++;
        } else if (arr[num] > 0) {
            pos++;
        } else {
            ze++;
        }
    }
    console.log(pos, neg, ze);
    console.log((pos / len).toPrecision(6));
    console.log((neg / len).toPrecision(6));
    console.log((ze / len).toPrecision(6));
}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);