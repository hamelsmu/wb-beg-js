console.log('it works');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wraper');
console.log(myDiv);

// document.body.appendChild(myParagraph);

// document.body.append(myParagraph, myDiv, myImage);
document.body.append(myParagraph, myDiv, myImage);

const li = document.createElement('li');
['One', 'Two', 'Three', 'Four', 'Five'].forEach((element) =>
  li.insertAdjacentHTML('beforeend', `<ul>${element}</ul>`)
);
