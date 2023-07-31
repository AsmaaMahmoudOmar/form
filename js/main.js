

let btnLogin = document.getElementById("btnLogin");
let btnSignUp = document.getElementById("btnSignUp");
var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
var statementPragh = document.getElementById("statement");
var welcome =document.getElementById('welcome')
let btnLogout = document.getElementById('logout');





// array to store data of user (sign up);

var users = [];

if (localStorage.getItem("userAccount")!=null){
   users= JSON.parse(localStorage.getItem('userAccount'));
}
console.log(users);
/* 
! validation account
*/
var nameRegex = /^[A-za-z\ ]{3,}$/;
var emailRegex = /^[A-za-z0-9_\.]{1,}[@][a-z]{5,7}\.[a-z]{3}$/;
var passRegex = /((?=.*[A-za-z0-9])(?=.*\w).{7,20})/;

// if input value = null
function isEmpty() {
  if (
    userEmailInput.value == "" ||
    // userNameInput.value == "" ||
    userPasswordInput.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

/* function validation */
function isNameValid() {
    if (nameRegex.test(userNameInput.value)) {
      return true;
    } else {
      return false;
    }
  }
  function isEmailValid() {
    if (emailRegex.test(userEmailInput.value)) {
      return true;
    } else {
      return false;
    }
  }
  function isPassValid() {
    if (passRegex.test(userPasswordInput.value)) {
      return true;
    } else {
      return false;
    }
  }

  var i =0;
function isExist(){
for( i =0; i<users.length;i++){
    if(userEmailInput.value.toLowerCase() == users[i].email.toLowerCase()){

         return false;
    } 
    
}
}
//   user sign up

function addUser() {
  var user = {
    name: userNameInput.value,
    email: userEmailInput.value,
    password: userPasswordInput.value,
  };
  if (isEmpty() == false) {
    statementPragh.innerHTML =
      '<span class="text-danger">all input required</span>';
      return;
  }
  if(isNameValid() ==false && isPassValid()==false && isEmailValid()==false){
    statementPragh.innerHTML = '<span class="text-danger">input not valid</span>';
    return;
 }
  if(isExist()== false){
    statementPragh.innerHTML = '<span class="text-danger">Emails already exist</span>';
   return;
  }
  else{
    users.push(user);
    console.log(users);
    localStorage.setItem("userAccount", JSON.stringify(users));
    statementPragh.innerHTML = '<span class="text-danger">success</span>';
    return;
  }

}

// btnSignUp.addEventListener('click',addUser)

// // /* show form sign up */


function signupForm (e) {
    e.preventDefault();
    btnLogin.classList.add("d-none");
    btnSignUp.classList.replace("d-none", "d-block");
    userNameInput.classList.replace("d-none", "d-block");
    signUp.classList.add("d-none");
    signIn.classList.remove("d-none");
  };
  

/*
1-sign in
*/

function signInAccount(){
    if (isEmpty() == false) {
        statementPragh.innerHTML =
          '<span class="text-danger">all input required</span>';
          return;
    }
    if(isExist() == false)
    {
    if(userPasswordInput.value == users[i].password){
        statementPragh.innerHTML = '<span class="text-danger">success</span>';
        console.log("welcome"+users[i].name);
        window.location.href="./hom.html";
        welcome.innerHTML = `<p>" welcome " + ${users[i].name}</p>`;
        return;
    }
  }
  else{
    statementPragh.innerHTML = '<span class="text-danger">Incorrect in email or password</span>';

}
}
  // btnLogin.addEventListener("click", signInAccount);


 
  // btnLogout.addEventListener('click',function(){
  //  window.location.replace("index.html");
   
  //  })

  function logout(){
   window.location.replace("index.html");
    
  }
 