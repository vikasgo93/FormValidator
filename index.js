const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText  = message;
}

//show success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//validator
function checkRequired(input) {
    if(input.value == ''){
        showError(input, input.id.charAt(0).toUpperCase() +input.id.slice(1)+" is required")
    } else {
        showSuccess(input)
    }
}

//Event Listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkRequired(username)
    checkRequired(email)
    checkRequired(password)
    checkRequired(password2)

    checkLength(password)
    checkPasswords(password, password2)
})  

//passwordLengthCheck
function checkLength(input){
    if(input.value.length < 6){
        showError(input, "Password must contain more then 6 Chars")
    }
    else if(input.value.length > 12) {
        showError(input, "Password must contain less then 12 Chars")
    }
    else {
        showSuccess(input)
    }
}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Passswords do not match")
    } else if(input2.value !== '') {
        showSuccess(input2)
    }
}
