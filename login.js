    let text = "Hello in Clothing Store"; /* the text which will print it */
    let element = document.getElementById("hello-text"); /* call the element */
    let i = 0;/* counter */
    let interval = setInterval(function () { /*setinterval => this is function repeat the blockof code
    at the specified time , setInterval(function , time repeat)*/
    element.textContent += text[i];
        /* it is used like innerHtml where add char to the div with repeat */
    i++;
    if (i === text.length) {
        clearInterval(interval);/* it is used to stop the setInterval by variable like interval */
    }
}, 150);


/* validation-form */

function validateForm() {
    let x = document.forms["myForm"]["username"].value;
    let y = document.forms["myForm"]["pass"].value;
    if (x == "" ) {
        alert("Please enter your username");return false;
    }
    else if(y == "") {
        alert("Please enter your password");return false;
    }
    else if(x != "" && y!="") {
        location.replace('/couses-page/html/index.html');
        return false;
    }
}

/* Drop-menu */
let button = document.getElementById("arrow");
let list = document.getElementById("list");

function toggleList() {
    // Check if list is currently hidden to avoid unnecessary animations
if (list.style.display === 'none') {
    // Create a new animation for smooth appearance
    let animation = list.animate([
        { opacity: 0 }, // Start from completely transparent
        { opacity: 1, transform: 'translateY(-10px)' } // change opacity from 0-->1 by animate and transform -110px to down
    ], {
        duration: 500, /* duration to slowely event */
    });

    // Show the list after animation completes
    list.style.display = 'block';
} else {
    list.style.display = 'none'; // Hide the list normally
}
}

button.addEventListener('click', toggleList); /* addEventListener is used to add event by click on button */

/* Upper-case-text-event */

function upperCase() {
    let x = document.getElementById("User");
    x.value = x.value.toUpperCase();
}

/* reblace-css-file */

let replacebutton = document.getElementById("replace");
let theme1 =document.getElementById("theme1");
let theme2 =document.getElementById("theme2");


replacebutton.addEventListener('click', function () {
    if(theme2.hasAttribute('disabled')) {
        theme2.removeAttribute('disabled');
        theme1.setAttribute('disabled','disabled');
    }
    else {
        theme2.setAttribute('disabled','disabled');
        theme1.removeAttribute('disabled');
    }
});


/* local-storage */

let form = document.getElementById('loginForm');
form.addEventListener('submit', function(event) {
let username = document.getElementById('User').value;
let password = document.getElementById('pass').value;

// save data in local storage
localStorage.setItem('username', username);
localStorage.setItem('password', password);

});

// when load page implement func

window.addEventListener('load', function() {

// call data from local storage

let storedUsername = localStorage.getItem('username');
let storedPassword = localStorage.getItem('password');

// fill inputs automatically

if (storedUsername) {
    document.getElementById('User').value = storedUsername;
}

if (storedPassword) {
    document.getElementById('pass').value = storedPassword;
}
});


