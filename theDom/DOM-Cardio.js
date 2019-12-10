// Make a div
const div1 = document.createElement('div');

// add a class of wrapper to it
div1.classList.add('wrapper');

// put it into the body
document.body.appendChild(div1);
// console.log(div1);
// console.dir(div1);
// make an unordered list
const unorderdList = document.createElement('ul');
// add three list items with the words "one, two three" in them
const word = ['one', 'two', 'three'];
for (let idx = 0; idx < 3; idx++) {
  const li = document.createElement('li');
  li.textContent = word[idx];
  unorderdList.appendChild(li);
}
console.log(unorderdList);
// put that list into the above wrapper
document.querySelector('.wrapper').appendChild(unorderdList);
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/250';
// set the width to 250
image.style.width = '250px';
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
document.querySelector('.wrapper').appendChild(image);
document.querySelector('.wrapper').style.display = 'flex';
document.querySelector('.wrapper').style.alignItems = 'center';
document.querySelector('.wrapper').style.justifyContent = 'space-around';

// with HTML string, make a div, with two paragraphs inside of it
const div1Inner = `<div>
    <p>this is fun<p/>
    <p>thanks wes<p/>
<div/>
`;
// put this div before the unordered list from above
div1.insertAdjacentHTML('afterbegin', div1Inner);

// add a class to the second paragraph called warning
div1.firstElementChild.firstElementChild.nextSibling.classList.add('warning');

// remove the first paragraph
const firstpara = document.querySelector('p');
console.log(firstpara);
firstpara.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatedPlayerCard(name, age, height) {
  const ageInDogYears = age * 7;

  return `<div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>
      They are ${height} and ${age} years old. In Dog years this person would be
      ${ageInDogYears}. That would be a tall dog!
    </p>
  </div>`;
}

// have that function return html that looks like this:
// {
//   <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
// }

// make a new div with a class of cards
const cardDiv = document.createElement('div');
cardDiv.classList.add('cards');

// Have that function make 4 cards
cardDiv.innerHTML = generatedPlayerCard('rosko', 25, "5'3");
// console.log('here', cardDiv.innerHTML);
cardDiv.insertAdjacentHTML(
  'afterbegin',
  generatedPlayerCard('danny', 30, "6'2")
);
cardDiv.insertAdjacentHTML(
  'afterbegin',
  generatedPlayerCard('donna', 20, "6'0")
);
cardDiv.insertAdjacentHTML(
  'afterbegin',
  generatedPlayerCard('Ragnar', 18, "6'4")
);
cardDiv.insertAdjacentHTML(
  'afterbegin',
  generatedPlayerCard('Dakir', 26, "5'11")
);

// append those cards to the div

// put the div into the DOM just before the wrapper element
div1.insertAdjacentElement('beforebegin', cardDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// cardDiv.childNodes.forEach(card =>
//   cardDiv.insertAdjacentHTML('beforeend', `<button>delete</button>`)
// );
const playerCards = document.querySelectorAll('.playerCard');
playerCards.forEach(card =>
  card.insertAdjacentHTML('beforeend', `<button>delete</button>`)
);
// select all the buttons!
allButtons = document.querySelectorAll('buttons');
// make out delete function
function Delete() {
  cardDiv.childNodes;
}
// loop over them and attach a listener
