console.log('its alive!!');

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector(`.watch`);
const button = document.querySelector(`.accept`);

// terms.addEventListener('scroll', function(e) {
//   console.log(e.currentTarget.scrollTop);
//   console.dir(e.currentTarget.scrollHeight);
// });

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  console.log(payload[0].intersectionRatio);
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
});

ob.observe(terms.lastElementChild);
