const { body } = document;

const div1 = document.createElement('div');

const img1 = document.createElement('img');
img1.src = 'https://picsum.photos/200';
const head1 = document.createElement('h2');
head1.textContent = 'this is yet another item';
div1.appendChild(head1);
div1.appendChild(img1);
body.appendChild(div1);

const images = document.querySelectorAll('img');
const arrayOfImages = [];
for (const thing of images) {
  console.log(thing);
  arrayOfImages.push(thing);
}
console.group('images');
console.log(arrayOfImages);
console.groupEnd('images');
images.forEach(function(image) {
  image.classList.add('rounded');
});
console.group('images');
console.log(arrayOfImages);
console.groupEnd('images');

arrayOfImages.map(image => {
  image.addEventListener('click', () => image.classList.toggle('rounded'));
});
