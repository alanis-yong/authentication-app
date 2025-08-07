const formTitle = document.getElementById('form-title');
const confirmPasswordContainer = document.getElementById(
  'confirm-password-container'
);
const submitButton = document.getElementById('submit');
const toggleLink = document.getElementById('toggle-link');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

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
    alert('Successful login!');
  } else {
    alert('User not found. Please sign up first.');
  }
}

function signUp(username, password, confirmPassword) {
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
  } else {
    users.push({ username: username, password: password });
    alert('Sign up successful! You can now log in.');
    toggleAuth();
  }
}

function handleSubmit() {
  const isLoginForm = formTitle.textContent === 'Welcome Back!';
  const username = usernameInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (isLoginForm) {
    login(username, password);
  } else {
    signUp(username, password, confirmPassword);
  }
}
