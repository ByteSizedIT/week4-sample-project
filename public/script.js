/*eslint-env browser*/

// MODAL LISTENERS

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

// FORM VALIDATION

// Disable default validation ....
// using JS, rather than setting the attribute in HTML.
// This ensures that our enhancements only apply if JS runs
// — otherwise we might disable the native validation without our custom validation loading.
const forms = document.querySelectorAll("form");
forms.forEach((form) => form.setAttribute("novalidate", ""));

// Trigger validation ....
// form element has a checkValidity method
forms.forEach((form) => {
  addEventListener("submit", (event) => {
    const allValid = form.checkValidity();
    if (!allValid) {
      event.preventDefault();
    }
  });
});

// Mark invalid fields ....
const logInForm = document.querySelector("#logInForm");
const signUpForm = document.querySelector("#signUpForm");
const logInFields = logInForm.querySelectorAll("input"); // cld add params if <select>, <textarea> elements are added to form
const signInFields = signUpForm.querySelectorAll("input");
// combined node lists into a single array; used this to set attributes with forEach.
// Seems to work same as using forEach on each node list independently
const allFields = [...logInFields, ...signInFields];
allFields.forEach((field) => {
  //
  field.setAttribute("aria-invalid", "false");
  // checkValidity() on the submit eventListener above causes invalid fields to fire an "invalid" event that we can also listen for
  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");
    // Grab the default message from the field’s validationMessage property and display it
    const message = field.validationMessage;
    feedback.textContent = message;
  });

  // Provide feedback to user ...
  // i.e. create <p> element to display error and an aria-describedBy ref'ing it the initial field)....
  const feedback = document.createElement("p");
  const id = `${field.id} Error`;
  feedback.setAttribute("id", id);
  // don't overwrite any existing aria-describedby in the original field
  const prevIds = field.getAttribute("aria-describedBy");
  const describedBy = prevIds ? `${prevIds} ${id}` : id;
  field.setAttribute("aria-describedBy", describedBy);
  // add feedback field after the initial field
  field.after(feedback);

  // Clear the invalid state when the user edits a field (ready for re-validation on submit)
  field.addEventListener("input", () => {
    field.setAttribute("aria-invalid", "false");
    feedback.textContent = "";
  });

  // validate when the user’s focus leaves the field (rather than waiting for submit)
  field.addEventListener("blur", () => {
    field.checkValidity();
  });
});
