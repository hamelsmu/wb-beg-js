console.log('it works!');

const butts = document.querySelector('.butts');

function handleClick(e) {
  console.log('button got clicked');
  console.log(e.currentTarget);
  console.log(e.target);
  // e.stopPropagation();
}

butts.addEventListener('click', handleClick, { capture: true });

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked the Window!');
    console.log(event.target);
    // event.stopPropagation();
  }
  // { capture: true }
);
