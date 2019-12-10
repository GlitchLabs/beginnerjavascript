const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');
console.log(butts);
function handleClick() {
  console.log('you clikced me');
}
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// listen on multiple items

const buyButtons = document.querySelectorAll('button.buy');

const handleBuyButtonClicked = event => {
  const button = event.target;
  //   console.log(button.innerText);
  //   console.log(parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
};
buyButtons.forEach(buybutton =>
  buybutton.addEventListener('click', handleBuyButtonClicked)
);

// dakirs practice

function handledblClick(event) {
  console.log('button function clicked');
  console.log(event.currentTarget, 'and ', event.target);
  console.log(event.currentTarget === event.target);
  // event.stopPropagation();
}

function handleClicking(event) {
  console.log('window function set off!');
  event.stopPropagation();
}
const dakirsButton1 = document.querySelector('.dakirsButtons');
console.log(dakirsButton1);
const dakirsButton2 = dakirsButton1.nextElementSibling;
console.log(dakirsButton2);
dakirsButton2.addEventListener('click', handledblClick);

window.addEventListener('click', handleClicking, { capture: true });
