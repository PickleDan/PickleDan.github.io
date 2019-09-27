function spongeMeme(sentence) {
    const set = sentence.split('');
    // console.log(set);
    for (let i = 0; i < set.length; i++) {
        if (i % 2 == 0) {
            set[i] = set[i].toUpperCase();
        } else {
            set[i] = set[i].toLowerCase();
        }
    }
    console.log(set);
}
console.log(spongeMeme("stop Making spongebob Memes!"));