// Sign In
function signIn()
{
    const signInPage = document.getElementById('pageSignIn');
    const signUpPage = document.getElementById('pageSignUp');
    signInPage.classList.remove('hidden');
    signUpPage.classList.add('hidden');

    const signInBtn = document.getElementById('btn-sign-in');
    const signUpBtn = document.getElementById('btn-sign-up');
    signUpBtn.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500', 'text-white');
    signInBtn.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500', 'text-white');
}

// Sign Up
function signUp()
{
    const signInPage = document.getElementById('pageSignIn');
    const signUpPage = document.getElementById('pageSignUp');
    signInPage.classList.add('hidden');
    signUpPage.classList.remove('hidden');

    const signInBtn = document.getElementById('btn-sign-in');
    const signUpBtn = document.getElementById('btn-sign-up');
    signUpBtn.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500', 'text-white');
    signInBtn.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500', 'text-white');
}