const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === '') {
        //alert('Please enter fields');
        msg.classList.add('error'); //  makes background red
        msg.innerHTML = 'Please entere all fields';

        setTimeout(() => msg.remove(), 3000); // removes error message after 3 seconds
    } else{
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // create list element

        userList.appendChild(li); // add li to the list

        nameInput.value = '';
        emailInput.value = '';
    }
}