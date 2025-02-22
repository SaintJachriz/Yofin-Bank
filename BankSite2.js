const loginPage = document.getElementById("Login-page");
const signUpPage = document.getElementById("Sign-up-Page");
const InputUsername = document.getElementById("InputUsername");
const InputPassword1 = document.getElementById("InputPassword1");
const InputPassword2 = document.getElementById("InputPassword2"); 


function validateSignUp() {
    //alert("t")    alert("d")
    const usernameValue = document.getElementById('InputUsername').value;
    const passwordValue1 = document.getElementById('InputPassword1').value;
    const passwordValue2 = document.getElementById('InputPassword2').value;
    const p = document.querySelector('myP');
    let link = 'http://127.0.0.1:5500/dash.html'

    function setError(element, errorMessage){
        document.querySelector(".input-error").textContent = errorMessage;
        document.querySelector(".input-error").style.color = "red";
        element.style.border = "2px solid red";
    }
    function clearError(element){
        document.querySelector(".input-error").textContent = '';
        element.style.border = "initial";
    }

    let isValid = true;
    if (passwordValue2 === '') {
        setError(InputPassword2, 'Please confirm your password');
        isValid = false;
    } else if(passwordValue2 !== passwordValue1){
        setError(InputPassword2,"Password does not match");
        isValid = false;
    } else {
        clearError(InputPassword2);
        console.log(`Your username is ${usernameValue} and your password is ${passwordValue1}`);
        isValid = true;
    }
    if (isValid) {
        p.innerHTML = `Click the link to continue ${link}`
        return true;
    } else {
        return false; 
    }

}
localStorage.setItem('userData', usernameValue); 
localStorage.setItem('userPassword', passwordValue2); 
// window.location.href = "./BankSite Login-Page.html";

/*
function validateLogin(){
    const usernameValue = document.getElementById('InputUsername').value;
    const passwordValue1 = document.getElementById('InputPassword1').value;
    const displayUsername = localStorage.getItem('userData');
    const displayPassword = localStorage.getItem('userPassword');
     
    let isValid = true;
    if (usernameValue !== displayUsername || passwordValue1 !== displayPassword) {
        isValid = false;
    } else {
        console.log(`Your username is ${usernameValue} and your password is ${passwordValue1}`);
        isValid = true;
    }
    if (isValid) {
        alert("Login successful!");
        return true;
    } else {
        return false; 
    }

    //alert(displayUsernameData)
    //document.getElementById('demp').textContent = `Welcome, ${displayUsernameData}`

}
*/