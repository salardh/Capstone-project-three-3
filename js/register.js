let form = document.getElementById('userDetails');
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");


form.addEventListener('submit', function (e) {
  e.preventDefault();
  let name = userName.value;
  let email = userEmail.value;
  let Password = userPassword.value;

  let user = {
    userName: name,
    userEmail: email,
    userPassword: Password,
  }

  let stringifyObj = JSON.stringify(user)

  localStorage.setItem('created-user', stringifyObj)


  window.location.href = "/pages/login.html"
});