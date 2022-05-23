// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
const body = document.querySelector('body');
body.appendChild(div);

// make an unordered list
const ul = `
<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img');
// set the source to an image
img.setAttribute('src', 'https://github.com/hamelsmu.png');

// set the width to 250
img.setAttribute('width', 250);
// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.setAttribute('alt', 'Cute Puppy');

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const p2 = `<div>
  <p>paragraph 1</p>
  <p>paragraph 2</p>
</div>`;

// put this div before the unordered list from above
div.querySelector('ul').insertAdjacentHTML('beforebegin', p2);

// add a class to the second paragraph called warning
div.querySelectorAll('div p')[1].classList.add('warning');

// remove the first paragraph
div.querySelectorAll('div p')[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const div = document.createElement('div');
  div.classList.add('playercard');
  div.innerHTML = `<h2>${name} - ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age / 10
  }. That would be a tall dog!</p>`;
  return div;
}

// make a new div with a class of cards
const carddiv = document.createElement('div');
carddiv.classList.add('cards');
// make 4 player cards using generatePlayerCard
const players = [
  ['hamel', 40, '5-11'],
  ['alef', 35, '5-8'],
  ['zara', 40, '2-3'],
  ['adnan', 0.5, '1-6'],
].map((item) => generatePlayerCard(...item));

// append those cards to the div
carddiv.append(...players);

// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', carddiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

function deleteCard(e) {
  e.currentTarget.parentElement.remove();
}

const button = document.createElement('button');
button.setAttribute('type', 'button');
// button.setAttribute('onClick', 'deleteCard(this)');
button.textContent = 'Click To Delete';

carddiv.querySelectorAll('.playercard h2').forEach((element) => {
  const b = button.cloneNode(true);
  b.addEventListener('click', deleteCard);
  element.insertAdjacentElement('afterend', b);
});

// select all the buttons!
// make out delete function
// loop over them and attach a listener
