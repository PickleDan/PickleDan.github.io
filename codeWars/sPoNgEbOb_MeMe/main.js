function spongeMeme(sentence) {
    const set = [...new Set(sentence)];
    console.log(set);
    for (let i = 0; i < set.length; i++) {
        if (i % 2 !== 0) {
            set[i].toUpperCase();
        } else {
            set[i].toLowerCase();
        }
    }
    console.log(set);
}
console.log(spongeMeme("stop Making spongebob Memes!"));