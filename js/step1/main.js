const items = document.getElementsByClassName('sort__item');

console.log(items);

for (let item of items) {
    item.addEventListener('click', fireActive);
    item.addEventListener('mouseenter', toggleBackground);
    item.addEventListener('mouseleave', toggleBackground);
}

function fireActive(el) {
    for (let item of items) {
        item.classList.remove('active');
    }
    el.target.classList.add('active');
}

function toggleBackground(el) {
    el.target.clallList.toggle('selected');
}