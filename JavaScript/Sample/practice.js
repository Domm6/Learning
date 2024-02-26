console.log(window); // window is the parent most objet



// Single element select
const form = console.log(document.getElementById('my-form'));
const query = console.log(document.querySelector('h1'));


// multiple element select
console.log(document.querySelectorAll('.item')); // very similar to an array
console.log(document.getElementsByClassName('item')); // gives collection (can't use array methods on) (woudln't use)
console.log(document.getElementsByTagName('li')); // gives collection (can't use array methods on) (woudln't use)


const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// changing things in DOM (DOM means user interface)
const ul = document.querySelector('.items');

//ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = "<h1>Hello<h1>"; // adding HTML dynamically

const btn = document.querySelector('.btn');
// btn.style.background = 'red'; // changes color to red


//////////////////////// Events ////////////////
btn.addEventListener('click', (e) => {
    e.preventDefault(); // stops form from submitting
    console.log('click');
    //console.log(e.target.className)
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body')
    .classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

