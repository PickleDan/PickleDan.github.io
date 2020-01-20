const modifires = {
  buttonActive: "active-button"
};
const attributes = {
  value: "data-value"
};

const elRoot = document.querySelector(".segmented-control");
const buttons = elRoot.querySelectorAll(".segmented-control_button");
const elSelect = elRoot.querySelector(".segmented-control_select");

const addEventsListener = () => {
  buttons.forEach(btn => {
    btn.addEventListener("click", event => choseButton(event.target));
  });
  elSelect.addEventListener("change", event => choseSelectEl(event));
};

const choseButton = el => {
  cleanAllActiveButtons();
  el.classList.add(modifires.buttonActive);
  elSelect.value = el.getAttribute(attributes.value);
};

const cleanAllActiveButtons = () =>
  buttons.forEach(btn => btn.classList.remove(modifires.buttonActive));

const choseSelectEl = event => {
  const buttonsArr = Array.from(buttons);
  const targetBtn = buttonsArr.find(
    el => event.target.value === el.getAttribute(attributes.value)
  );
  choseButton(targetBtn);
};

addEventsListener();
