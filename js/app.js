//Theme js
const checkboxx= document.getElementById('checkbox');
checkboxx.addEventListener('change',()=>{
	document.body.classList.toggle('light');
});
////

// var for each id 
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const age = document.getElementById("age");
const phoneNumber = document.getElementById("tel");
const regEx = document.getElementById("tel").value.slice(0, 3);
const url = document.getElementById("url");
const urlExp = new RegExp(
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
);
const textar = document.getElementById("textarea");

// event for form inputs val
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

//  Error status
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
//  Success status
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
// email pattern
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
//  all inputs val fun
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const ageValue = age.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const urlvalue = url.value.trim();
  const textarvalue = textar.value.trim();

// name val
  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length > 10 || usernameValue.length < 3) {
    setError(
      username,
      "Username must be  mor than 3 char and less than 10 char"
    );
  } else {
    setSuccess(username);
  }
  // email val
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
//  pass length val 
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 character.");
  } else {
    setSuccess(password);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 6) {
    setError(password, "Password must be at least 6 character.");
  } else {
    setSuccess(password);
  }
//  pass confirm val 
  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
  // age val
  if (ageValue === "") {
    setError(age, "enter your age please");
  } else if (ageValue < 18) {
    setError(age, "you are yonger go and get some plays ya kide");
  } else {
    setSuccess(age);
  }

  // phone number val
  if (phoneNumberValue === "") {
    setError(phoneNumber, "enter your phone Number please");
  } else if (phoneNumberValue.length != 9) {
    setError(phoneNumber, "must be 9 numbers");
  } else if (regEx != "777") {
    setError(phoneNumber, "must be start with 777");
  } else if ((regEx = "777") && (phoneNumberValue.length = 9)) {   // (regEx.match("777")
    setSuccess(phoneNumber);
  }
  //  url val

  if (urlvalue === "") {
    setError(url, "enter your link please");
  } else if (urlvalue.match(urlExp)) {
    setSuccess(url);
  } else {
    setError(url, "your link is wrong");
  }
// textarea
  if (textarvalue.length < 20) {
    setError(textar, "textarea must be at least 20 char");
  } else {
    setSuccess(textar);
  }
};
