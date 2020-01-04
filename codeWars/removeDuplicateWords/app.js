function removeDuplicateWords(s) {
    let arr = s.split("");
    let result = [];
    const items = {};
    for (let i = 0; i < arr.length; i++) {
        if (!items[arr[i]]) result.push(arr[i]);
        items[arr[i]] = (items[arr[i]] || 0) + 1
    }
    return items
}

console.log(removeDuplicateWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));