(function() {
  const tooltips = Array.from(document.querySelectorAll(`.has-tooltip`));
  tooltips.forEach((button, index) => {
    let attr = button.getAttribute(`title`);
    let posTooltipTop = button.getBoundingClientRect().top;
    let posTooltipLeft = button.getBoundingClientRect().left;
    let hint = creatHint(posTooltipTop, posTooltipLeft, attr);
    button.insertAdjacentHTML(`afterEnd`, hint.outerHTML);
    button.addEventListener(`click`, (elem => {
      elem.preventDefault();
      showHint(button, index);
    }));
  })
}())

function creatHint(posTop, posLeft, attribute) {
  let hint = document.createElement(`div`);
  hint.setAttribute(`class`, `tooltip`);
  hint.setAttribute(`style`, `top: ${posTop + 20}px; left: ${posLeft}px`);
  // hint.setAttribute(`style`, `top: 0; left: 0`);
  // hint.style.top = posTooltipTop + 20 + `px`;
  // hint.style.left = posTooltipLeft + `px`;
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