// const p = document.querySelector('P');

// console.log(p);
// const divs = document.querySelectorAll('div');
// console.log(divs);
// const item = document.querySelector('div');
// const img = item.querySelector('img');
// console.log(img);
// const classs = document.querySelector('.nice');
// console.log(classs);

// const h22 = document.querySelector('h2');
// console.dir(h22);
// h22.attributeStyleMap.size = 200;
// console.log(h22);
// const pizzaList = document.querySelector('.pizza');

// classes

const pics = document.querySelectorAll('img');
console.log(pics);
pics.forEach(pic => {
  //   pic.classList.add('round');
  pic.addEventListener('click', function() {
    pic.classList.toggle('round');
  });
});
console.log(pics.classList);
// pic.classList.add('open');
// console.log(pic.classList);

// console.log(pic.classList);
// function roundOrNah() {
//   pic.classList.toggle('round');
// }
// console.log(pic.classList);
// pic.addEventListener('click', roundOrNah);

const pic = document.querySelector('.section2 img');
// console.log(pic);
console.log(pic.classList);
pic.alt = 'nice pic';
console.log(pic);
window.addEventListener('load', () => {
  const mg = document.createElement('img');
  mg.src = 'https://picsum.photos/400';
  pic.insertAdjacentElement('afterend', mg);
});
