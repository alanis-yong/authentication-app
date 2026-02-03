const formTitle = document.getElementById('form-title');
const confirmPasswordContainer = document.getElementById(
  'confirm-password-container'
);
const submitButton = document.getElementById('submit');
const toggleLink = document.getElementById('toggle-link');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const messageBox = document.getElementById('message-box');

function toggleAuth() {
  const isLoginForm = formTitle.textContent === 'Welcome Back!';
  formTitle.textContent = isLoginForm ? 'Sign Up' : 'Welcome Back!';
  submitButton.textContent = isLoginForm ? 'Sign Up' : 'Login';
  toggleLink.textContent = isLoginForm ? 'Login' : 'Sign Up';
  confirmPasswordContainer.style.display = isLoginForm ? 'block' : 'none';
}

const users = [];

function login(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    messageBox.textContent = `Success! Welcome back, ${username}.`;
    messageBox.style.color = "#c37cf0";
  } else {
    messageBox.textContent = "User not found. Please sign up first.";
    messageBox.style.color = "#ff4d4d";
  }
}

function signUp(username, password, confirmPassword) {
  if (password !== confirmPassword) {
    messageBox.textContent = "Passwords do not match.";
    messageBox.style.color = "#ff4d4d";
  } else {
    users.push({ username: username, password: password });
    messageBox.textContent = "Sign up successful! You can now log in.";
    messageBox.style.color = "#c37cf0";

    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    
    toggleAuth();
  }
}

function handleSubmit(e) {
  e.preventDefault();
  const isLoginForm = formTitle.textContent === 'Welcome Back!';
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  messageBox.textContent = "";
  
  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}
