const form = document.getElementById('form');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');
const terms = document.getElementById('terms');
const termsLabel = document.querySelector('label[for="terms"]');

// Event listeners for real-time validation
firstName.addEventListener('keyup', validateFirstName);
lastName.addEventListener('keyup', validateLastName);
email.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', validatePassword);

// Function to show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Function to remove error message
function removeError(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
}

// Validate First Name
function validateFirstName() {
    if (firstName.value.trim() === '') {
        showError(firstName, 'First name is required');
        return false;
    } else if (!isValidFirstName(firstName.value.trim())) {
        showError(firstName, 'Invalid First Name');
        return false;
    } else {
        removeError(firstName);
        return true;
    }
}

function isValidFirstName(firstName) {
    const re = /^[a-zA-Z]+$/; // Case insensitive
    return re.test(firstName);
}

// Validate Last Name
function validateLastName() {
    if (lastName.value.trim() === '') {
        showError(lastName, 'Last Name is required');
        return false;
    } else if (!isValidLastName(lastName.value.trim())) {
        showError(lastName, 'Invalid Last Name');
        
    } else {
        removeError(lastName);
        return true;
    }
}

function isValidLastName(lastName) {
    const re = /^[a-zA-Z]+$/; // Case insensitive
    return re.test(lastName);
}

// Validate Email
function validateEmail() {
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address');
    }  else if (isTemporaryEmail(email.value.trim())) {
        showError(email, 'Temporary email addresses are not allowed');
    }
    else {
        removeError(email);
    }
}

// Email validation regex function
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isTemporaryEmail(email) {
    const domain = email.split('@')[1];
    return tempEmailDomains.includes(domain);
}

const tempEmailDomains = ["drussellj.com","emailcbox.pro","everymail.shop","tempmail.com","kernuo.com","gufum.com","somelora.com","imagepoet.net","navalcadets.com","mxscout.com","mailinator.com","guerrillamail.com","sharklasers.com","10minutemail.com","dispostable.com","maildrop.cc","temp-mail.org","mailnesia.com","mailnesia.org","mailinator2.com","safe-mail.net","tempinbox.com","meltmail.com","spamgourmet.com","spambog.com","anonbox.net","getnada.com","mailcatch.com","trashmail.com","discard.email","jetable.org","mailnull.com","mytemp.email","mintemail.com","yopmail.com","mailme24.com","trbvm.com","mailforspam.com","fakeinbox.com","temp-mail.io","guerrillamailblock.com","spam4.me","filzmail.com","10mail.org","zomail.org","mailimate.com","maildrop.xyz","mailinator.be","mailinator.co.uk","mailinator.info","mailinator.net","mailinator.us","spamgourmet.net","spamgourmet.org","uggsrock.com","mailinator.fr","mailinator.guru","tempmail.de","thanksnospam.info","thankyou2010.com","thisisnotmyrealemail.com","trashmail.at","trashmail.me","trashmail.net","trashmail.org","trashmail.ws","nospam.ze.tc","nomail.xl.cx","mega.zik.dj","speed.1s.fr","courriel.fr.nf","moncourrier.fr.nf","monemail.fr.nf","monmail.fr.nf"];

function validatePassword() {
    if (password.value.trim() === '') {
        showError(password, 'Password is required');
    } else if (!isValidPassword(password.value.trim())) {
        showError(password, 'Password must be 8+ charecters "Example: Abc123@%"');
    }else if (password.value === 'Abc123@%') {
        showError(password, 'Please not enter example password');
    }else {
        removeError(password);
    }
}

function isValidPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordPattern.test(password);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();

    // Check if the form is valid before submission
    if (formIsValid()) {
    // Redirect to welcome page if the form is valid
        window.location.href = 'welcome/welcome.html';
    }
});

function formIsValid() {
    // Ensure no errors exist
    const errors = document.querySelectorAll('.error');
    return errors.length === 0;
}

const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('contextmenu', event => event.preventDefault());
    img.addEventListener('dragstart', event => event.preventDefault());
});

passwordToggle.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        passwordToggle.src = 'img/password-show.jpg';
    } else {
        password.type = 'password';
        passwordToggle.src = 'img/password-hiden.jpg';
    }
});
