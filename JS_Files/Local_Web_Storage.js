
// Create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');

const form = document.querySelector('form');

const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgotBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', function(e){
    e.preventDefault();
});

// Run function when the 'Say Hello' button is clicked
submitBtn.addEventListener('click', function(){
    // store the enter name in Web Storage
    localStorage.setItem('name', nameInput.value);
    // Run nameDisplayCheck() to sort out displaying the personalized greeting 
    // and updating the form display
    nameDisplayCheck();
});

// Run the function when the 'Forgot' button is clicked 
forgotBtn.addEventListener('click', function(){
    // Remove the stored name from Web Storage
    localStorage.removeItem('name');
    // Run nameDisplayCheck to start out displaying the generic greeting 
    // again and updating the form display
    nameDisplayCheck();
});

// Define the nameDisplayCheck() function
function nameDisplayCheck(){
    // Check whether the 'name' data is stored in web storage
    if (localStorage.getItem('name')) {
        // If it is, display personalized greeting
        let name = localStorage.getItem('name');
        h1.textContent = `Welcome ${name}`;
        personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
        // Hide the 'remember' part of the form and show the 'forget' part.
        forgetDiv.style.display = 'block';
        rememberDiv.style.display = 'none';  
    }else{
        // If not, display generic greeting
        h1.textContent = 'Welcome to Our Website';
        personalGreeting.textContent = `Welcome to our website, we hope you have fun while you are here.`;
        // Hide the 'forgot' part of the form and show the 'remember' part
        forgetDiv.style.display = 'none';
        rememberDiv.style.display = 'block';
    }
}
document.body.onload = nameDisplayCheck;