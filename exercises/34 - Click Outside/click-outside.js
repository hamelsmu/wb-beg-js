const buttons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function openModal(e) {
  const button = e.currentTarget;
  const card = button.closest('.card');
  const image = card.querySelector('img').src.replace('200', '600');
  const name = card.querySelector('h2').textContent;
  // show the modal
  modalInner.innerHTML = `
    <img width="600" height="600" src="${image}" alt="${name}">
    <p>${card.dataset.description}</p>
    `;
  modalOuter.classList.add('open');
}

// add event listener to buttons
buttons.forEach((e) => {
  e.addEventListener('click', openModal);
});

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', (e) => {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
