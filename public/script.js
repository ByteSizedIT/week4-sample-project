/*eslint-env browser*/
const signUpModal = document.getElementById("signUpModal");
const logInModal = document.getElementById("logInModal");
const openLogIn = document.getElementById("openLogIn");
const closeLogIn = document.getElementById("closeLogIn");
const openSignUp = document.getElementById("openSignUp");
const closeSignUp = document.getElementById("closeSignUp");

// Open modal when button is clicked
openSignUp.addEventListener("click", () => {
  signUpModal.style.display = "block";
});
openLogIn.addEventListener("click", () => {
  logInModal.style.display = "block";
});

// Close the modal when 'x' is clicked
closeSignUp.addEventListener("click", () => {
  signUpModal.style.display = "none";
});
closeLogIn.addEventListener("click", () => {
  logInModal.style.display = "none";
});

// Close modal when user clicks outside
window.addEventListener("click", (event) => {
  if (event.target == signUpModal) {
    signUpModal.style.display = "none";
  }
  if (event.target == logInModal) {
    logInModal.style.display = "none";
  }
});
