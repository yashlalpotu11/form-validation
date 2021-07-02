const userName = document.getElementById('name');
const email = document.getElementById('email');
const registration = document.getElementById('registration');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');

userName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
registration.addEventListener('blur', validateRegistration);
phone.addEventListener('blur', validatePhone);

function validateName(){
    const exp = /^[a-zA-Z ]{2,15}$/;
    if(!exp.test(userName.value)){
        userName.classList.add('is-invalid');
    }
    else{
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
    }
}

function validateEmail(){
    const exp = /^(201[0-9]((BCS)|(bcs)|(BPR)|(bpr)|(BIT)|(bit)|(BCH)|(bch))[0-9]{3})@sggs.ac.in$/;
    if(!exp.test(email.value)){
        email.classList.add('is-invalid');
    }
    else{
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }
}

function validatePhone(){
    const exp = /^[7-9][0-9]{9}$/;
    if(!exp.test(phone.value)){
        phone.classList.add('is-invalid');
    }
    else{
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
    }
}

function validateRegistration(){
    const exp = /^(201[0-9]((BPR)|(bpr))([1-9][0-9][0-9]|[0-9][1-9][0-9]|[0-9][0-9][1-9]))$/;
    if(!exp.test(registration.value)){
        registration.classList.add('is-invalid');
    }
    else{
        registration.classList.remove('is-invalid');
        registration.classList.add('is-valid');
    }
}

submit.addEventListener('click', function(e){

    if(userName.value.trim() == '' || email.value.trim() == ''
    || registration.value.trim() == '' || phone.value.trim() == '' ){
        e.preventDefault();
        showAlert('danger', 'Feilds cannot be blank');
    }

    else if(userName.classList.contains('is-invalid')){
        e.preventDefault()
        showAlert('danger', 'Enter valid Name');
    }

    else if(email.classList.contains('is-invalid')){
        e.preventDefault();
        showAlert('danger', 'Enter valid Email');
    }

    else if(registration.classList.contains('is-invalid')){
        e.preventDefault();
        showAlert('danger', 'Enter valid Registration No.');
    }

    else if(phone.classList.contains('is-invalid')){
        e.preventDefault();
        showAlert('danger', 'Enter valid Mobile No.');
    }
    else{

    }
})

function showAlert(color, message) {
    const alert = document.getElementById('alert');
    if (!alert.classList.contains(`alert-` + color, 'p-1')) {
      alert.classList.add(`alert-` + color, 'p-1');
      alert.innerText = message;
      setTimeout(() => {
        alert.classList.remove(`alert-` + color, 'p-1');
        alert.innerText = '';
      }, 2000);
    }
  }