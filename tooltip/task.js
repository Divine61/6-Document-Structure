(function() {
  const tooltips = Array.from(document.querySelectorAll(`.has-tooltip`));
  tooltips.forEach((button, index) => {
    let attr = button.getAttribute(`title`);
    let hint = creatHint(attr);
    button.insertAdjacentHTML(`afterEnd`, hint.outerHTML);
    button.addEventListener(`click`, (elem => {
      elem.preventDefault();
      showHint(button, index);
    }));
  })
}())

function creatHint(attribute) {
  let hint = document.createElement(`div`);
  hint.setAttribute(`class`, `tooltip`);
  hint.setAttribute(`style`, `left: 0; top: 0`);
  hint.textContent = attribute;
  return hint;
}

function showHint(tooltip, index) {
  const hints = Array.from(tooltip.closest(`body`).querySelectorAll(`.tooltip`));
  let currentPosition = hints.findIndex(item => item.className.includes(`tooltip_active`));
  if (currentPosition !== -1 && currentPosition !== index) {
    hints[currentPosition].classList.remove(`tooltip_active`);
  }
  hints[index].classList.toggle(`tooltip_active`);
}