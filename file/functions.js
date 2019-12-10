sup('hi');

function sup(name) {
  return `Sup homie ${name}`;
}

const greet = function(name) {
  return `Sup homie ${name}`;
};

console.log(greet('gravecannon'));

const makeZero = given => given - given;

console.log(makeZero(9000));

const badNews = nature => ({ badNewsBro: `Look man, she...is a ${nature}` });

badNews('doggy man');

// IIFE- Immediately Invoked-run- Function Expression

(function() {
  console.log('IIFE LYFE');
  return `IIFE LYFE`;
})();

// functions that live inside an object are called methods

const dope = {
  topic: 'gravity',
  catchPhrase() {
    console.log(`oh you talking about ${this.topic} thats dope!!!`);
    console.log(this.haters());
    return this.topic;
  },
  // arrow functions do not have the scope of this they take the parent scope of this
  haters: () => {
    console.log(`nobody think ${dope.topic} dope but you`);
    return 'what haters say';
  },
};
