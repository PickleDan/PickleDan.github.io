// My solution
function longest(s1, s2) {
    // your code
    let con = s1 + s2;
    let ascending = con.split('').sort();
    for (let i = 0; i < ascending.length; i++) {
        if (ascending[i] == ascending[i + 1]) {
            delete ascending[i];
        }
    }
    return ascending.join('');
}

// Clever solution
function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));