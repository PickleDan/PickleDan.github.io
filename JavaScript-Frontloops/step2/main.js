const elRoot = document.querySelector(".frame");
const elInput = elRoot.querySelector(".input-field");
const elButton = elRoot.querySelector(".change-button");
const elTabs = elRoot.querySelectorAll(".tab");

const modifires = {
  active: "tab-active"
};

elTabs.forEach(el => {
  el.addEventListener("click", event => {
    cleanAllActives();
    fireNewTab(event.target);
  });
});

const cleanAllActives = () => {
  elTabs.forEach(el => {
    el.classList.remove(modifires.active);
  });
};

const fireNewTab = el => {
  el.classList.add(modifires.active);
};
