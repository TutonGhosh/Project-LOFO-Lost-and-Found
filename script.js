const { createElement } = require("react");

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
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
    const inputPass = document.getElementById('input-pass');

    const email = inputEmail.value;
    const pass = inputPass.value;

    if(inputName.value && (email.includes('@uu.edu.bd')) && (pass.length >= 6))
    {
        localStorage.setItem('p-name', document.getElementById('input-name').value);
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

    if(inputName.value && (inputSID.value.length === 10) && (email.includes('@uu.edu.bd')) && (pass.length >= 6))
    {
        localStorage.setItem('p-name', document.getElementById('input-name').value);
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
    window.location.href = 'profile.html';
}
// Back To Home
function backToHome()
{
    window.location.href = 'home.html';
}
// Create Post From Profile
function createPostFromProfile()
{
    localStorage.setItem('postOrigin', 'profile');
    window.location.href = 'createpost.html';
}
// Create Post From Home
function createPostFromHome()
{
    localStorage.setItem('postOrigin', 'home');
    window.location.href = 'createpost.html';
}
// Go Back Button
function goBackBtn()
{
    alert('Are you sure to discard this post?')
    const origin = localStorage.getItem("postOrigin");
    if(origin === "profile")
        window.location.href = "profile.html";
    else if(origin === "home")
        window.location.href = 'home.html';
}

// Submit Button
function submitBtn() {
    const inputTitle = document.getElementById('input-title').value;
    const inputOpt = document.getElementById('input-opt').value;
    const inputLocation = document.getElementById('input-location').value;
    const inputParagraph = document.getElementById('input-paragraph').value;
    const time = new Date().toLocaleTimeString();

    const post = { inputTitle, inputOpt, inputLocation, inputParagraph, time };
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    const origin = localStorage.getItem("postOrigin");
    if(origin === "profile")
        window.location.href = "profile.html";
    else if(origin === "home")
        window.location.href = 'home.html';
}

// Delete All Posts Button
function deleteAllPosts() {
    localStorage.removeItem('posts');
    const allPosts = document.getElementById('all-posts');
    if(allPosts) allPosts.innerHTML = '';
}