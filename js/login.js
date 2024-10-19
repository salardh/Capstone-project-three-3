let form = document.getElementById('userDetail');
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");


let getUserDetail = localStorage.getItem('created-user');

let parseDetail = getUserDetail ? JSON.parse(getUserDetail) : null;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let name = userName.value;
  let email = userEmail.value;
  if (parseDetail && parseDetail.userName === name && parseDetail.userEmail === email) {
    window.location.href = "/pages/index.html";
  } else {
    alert('Something went wrong');
  }
});