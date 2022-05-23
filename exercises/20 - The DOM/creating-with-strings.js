console.log('it works');
const item = document.querySelector('.item');

const html = `
<div>
<h1>Hey How are ya</h1>
</div>
`;

const tmp = document.createElement('template');
tmp.innerHTML = html;

const MyFragment = document.createRange().createContextualFragment(html);
  