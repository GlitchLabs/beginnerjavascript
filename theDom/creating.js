/* eslint-disable no-plusplus */
const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P boy!';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/400';
myImage.alt = 'nice photo bro';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);
const heading = document.createElement('h1');
heading.innerText = 'now this is a heading';
myDiv.insertAdjacentElement('afterbegin', heading);

// create ul with 5 li

myDiv.style.display = 'flex';

const liCreator = number => {
  const liHolder = [];
  for (let i = 0; i < number; i++) {
    const li = document.createElement('li');
    liHolder.push(li);

    console.log(i);
  }
  return liHolder;
};
const ul = document.createElement('ul');

const lis = liCreator(5);

lis.map(li => ul.appendChild(li));
console.group(ul);

const ol = document.createElement('ol');

// function addIt(parent, where, what) {
//   parent.appendChild(what);
//   parent.insertAdjacentElement(where, what);
//   console.log(parent);
//   return parent;
// }
const li = document.createElement('li');

// addIt(ol, 'beforebegin', li);

ol.insertAdjacentElement('beforeend', li);
ol.insertAdjacentElement('afterbegin', document.createElement('li'));
ol.insertAdjacentElement('afterbegin', document.createElement('li'));
ol.insertAdjacentElement('afterbegin', document.createElement('li'));
ol.insertAdjacentElement('afterbegin', document.createElement('li'));
console.log(ol);
document.body.append(ul);
const text = ['one','two','three','four','five']
