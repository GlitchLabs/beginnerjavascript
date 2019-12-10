// difference between node and element
const dakir = document.querySelector('.dakir h1');

console.log(dakir);
console.log(dakir.children);
console.log(dakir.childNodes);

// an element can be a node but a node needs tags to be an element.
const bodyChildren = document.body.children;
console.group('children of the body');
console.log(bodyChildren);
console.log(document.body.childNodes);
console.groupEnd('children of the body');
