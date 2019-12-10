const { body } = document.body;

const div = document.querySelector('.item');

const { innerHTML } = div;
console.log(innerHTML);
const myHTML = `
<article class="wrapped">
<h2>you herd we out here</h2>
<img src="https://picsum.photos/350"/>
<article/>    
 `;

div.innerHTML = myHTML;

// const articleImage = document.querySelector('.wrapped img');
// articleImage.classList.add('round');

// turn a string into dom element

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);
