function addClickEventListeners(items) {
  for (let item of items) {
    item.addEventListener("click", fireActive);
  }
}

function fireActive(event) {
  disableLastActiveElement(items, options);

  const item = event.target;
  item.classList.add("sort__item--active");
  let attr = item.getAttribute("data-value");
  let option = document.querySelector(`option[value = "${attr}"]`);
  option.setAttribute("selected", "selected");
}

function disableLastActiveElement(items, options) {
  for (let item of items) {
    item.classList.remove("sort__item--active");
  }
  for (let option of options) {
    option.removeAttribute("selected");
  }
}

function optionClickHandler(event) {}

const options = document.querySelectorAll(".js-select-item");
console.log(options);
const items = document.querySelectorAll(".js-sort-item");

// console.log(items);

addClickEventListeners(items);
