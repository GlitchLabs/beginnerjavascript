const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(`.card`);
  const name = card.querySelector('h2').textContent;
  const imgSrc = card.querySelector('img').src;
  console.log(typeof imgSrc);
  const desc = card.dataset.description;
  modalInner.innerHTML = `<img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}"/>
    <p>${desc}</p>
    `;
  modalOuter.classList.add('open');
}

cardButtons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});

function closeModal() {
  modalOuter.classList.remove('open');
}
modalOuter.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.modal-inner');
  console.log(isOutside);
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener('keydown', function(event) {
  const { key } = event;
  console.log(key);
  if (key === 'Escape') {
    closeModal();
  }
});
