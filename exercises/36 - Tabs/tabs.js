const tabs = document.querySelector('.tabs');
const panels = tabs.querySelectorAll('[role="tabpanel"]');
const buttons = tabs.querySelectorAll("button[role='tab']");

function handleClick(e) {
  // hide all tab panels
  const { id } = e.currentTarget;
  buttons.forEach((elem) => {
    if (elem.id === id) {
      elem.ariaSelected = true;
    } else {
      elem.ariaSelected = false;
    }
  });
  // mark all tabs as unselected
  panels.forEach((elem) => {
    if (elem.getAttribute('aria-labelledby') === id) {
      elem.hidden = false;
    } else {
      elem.hidden = true;
    }
  });
}

buttons.forEach((elem) => {
  elem.addEventListener('click', handleClick);
});

const count = 2;
const foo = count === 2 ? 'word' : 'wrods';
