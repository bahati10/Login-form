const togglePassword = document.querySelector('#eyeP');
  const password = document.querySelector('.password');

  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-regular fa-eye-slash');
});