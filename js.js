const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const checkPassword = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {

        p.innerHTML = 'You have a very good password! :)';
        p.style.color = 'lime';
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.innerHTML = 'you have a good password!';
        p.style.color = 'blue';
    } else {
        p.innerHTML = "unfortunately your password is too weak";
        p.style.color = 'red';
    }

};

pass.addEventListener('keyup', function () {

    if (pass.value !== '') {
        checkPassword();
    } else {
        p.innerHTML = 'you did not enter your passworda...';
        p.style.color = '';
    }


});