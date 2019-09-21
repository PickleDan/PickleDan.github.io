// My solution
function sortByLength(array) {
    // Return an array containing the same strings, ordered from shortest to longest
    array.sort(function (a, b) {
        if (a.length < b.length) return -1
        else return 1;
    });
    return array;
};

// Clever solution


console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]));
console.log(sortByLength(["Longer", "Longest", "Short"]));
