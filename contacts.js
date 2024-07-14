var nvWidth = 0, isTrue = !0;
var row = document.querySelector('.row')
var row2 = document.getElementById('row2')
var s_results = document.querySelector('.s_results')

//sidebar
$(".strip-toggel-menu").click(function () {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".strip-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1100), $(".nav-tab-menu .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1200), $(".nav-tab-menu .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1300), $(".nav-tab-menu .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1400), $(".nav-tab-menu .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1500), $(".nav-tab-menu .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    }, 1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".strip-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 500), isTrue = !isTrue)
});
//contact us


const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const pnumber = document.getElementById('pnumber');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitbtn = document.getElementById('submitBtn');


form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    
});

function checkInputs() {
    // trim to remove whitespaces
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const pnumberValue = pnumber.value.trim();
    const ageValue = age.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let isValidate = true;

    if (fullnameValue === '') {
        setErrorFor(fullname, 'Full Name cannot be blank');
        isValidate = false;
    } else {
        setSuccessFor(fullname);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isValidate = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
        isValidate = false;
    } else {
        setSuccessFor(email);
    }
    if (pnumberValue === '') {
        setErrorFor(pnumber, 'Phone Number cannot be blank');
        isValidate = false;
    } else if (!isPnumber(pnumberValue)) {
        setErrorFor(pnumber, 'Not a valid Number');
        isValidate = false;
    } else {
        setSuccessFor(pnumber);
    }
    if (ageValue === '') {
        setErrorFor(age, 'Age cannot be blank');
        isValidate = false;
    } else {
        setSuccessFor(age);
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        isValidate = false;
    } else {
        setSuccessFor(password);
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
        isValidate = false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
        isValidate = false;
    } else {
        setSuccessFor(password2);
    }
    if (isValidate) {
        alert('Submited')
        clearinputs()
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPnumber(pnumber) {
    return /^01[0125][0-9]{8}$/.test(pnumber);
}

function clearinputs() {
    fullname.value = '',
        email.value = '',
        pnumber.value = '',
        age.value = '',
        password.value = '',
        password2.value = '';
}
clearinputs()