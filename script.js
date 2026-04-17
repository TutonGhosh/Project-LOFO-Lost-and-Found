// Sign In
function signIn()
{
    window.location.href = 'signin.html';
}

// Sign Out
function signOut()
{
    window.location.href = 'index.html'
}

// Sign Up
function signUp()
{
    window.location.href = 'signup.html';
}

// Click Sign In Button
function btnSignIn()
{
    const inputEmail = document.getElementById('input-email');
    const inputPass = document.getElementById('input-pass');

    const email = inputEmail.value;
    const pass = inputPass.value;

    if(email.includes('@uu.edu.bd') && pass.length >= 6)
    {
        window.location.href = 'home.html';
    }
    else
    {
        alert('Invalid Input! \n Try Again.');
    }
}

// Click Sign Up Button
function btnSignUp()
{
    const inputName = document.getElementById('input-name');
    const inputSID = document.getElementById('input-sid');
    const inputEmail = document.getElementById('input-email');
    const inputPass = document.getElementById('input-pass');

    const sid = parseInt(inputSID.value);
    const email = inputEmail.value;
    const pass = inputPass.value;

    if(isNaN(inputName.value) && (inputSID.value.length === 10) && (email.includes('@uu.edu.bd')) && (pass.length >= 6))
    {
        window.location.href = 'home.html';
    }
    else
    {
        alert('Invalid Input! \n Try Again.');
    }
}

// Profile
function profile()
{
    
}