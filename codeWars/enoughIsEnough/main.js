
function deleteNth(arr, x) {
    let result = [];
    let repeatNumber = [];
    result = arr.filter(function (n) {
        repeatNumber[n] = ~~repeatNumber[n] + 1; //when you call ~undefined you get -1, and he wants 0, so its ~~
        if (repeatNumber[n] <= x) return true;
        else return false;
    });
    return result;
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));