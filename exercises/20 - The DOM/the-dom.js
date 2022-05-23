function init() {
  const p = document.querySelector('p');
  console.log(p);
}

document.addEventListener('DOMContentLoaded', init);

const div = document.querySelectorAll('div');
console.log(div);
const img = document.querySelector('.nice');

console.log(img.dataset);

function toggle(event) {
  event.currentTarget.classList.toggle('flum');
}

img.addEventListener('click', toggle);
