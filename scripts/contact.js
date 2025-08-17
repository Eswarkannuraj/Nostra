//signup bar
let signUp = document.getElementById("signUp");
let signUpClose = document.querySelector(".signUpClose");

signUpClose.addEventListener("click", function () {
  signUp.classList.add("hidden");
})


//sidebar
let sidebar = document.querySelector(".sidebar");
let navbarToggle = document.querySelector(".navbar-toggle");
let navbarClose = document.querySelector(".navbar-close");

navbarToggle.addEventListener("click", function () {
  sidebar.classList.remove("-left-1/2");
  sidebar.classList.add('left-0');
})

navbarClose.addEventListener("click", function () {
  sidebar.classList.add("-left-1/2");
  sidebar.classList.remove('left-0');
})
