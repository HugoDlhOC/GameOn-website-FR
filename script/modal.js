function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const closeForm = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction
//document.querySelectorAll(".modal-btn").forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction

//close modal event
closeForm.forEach((close_btn) => close_btn.addEventListener("click", closeModal));
//document.querySelectorAll(".close").forEach((close_btn) => close_btn.addEventListener("click", closeModal));

//close final modal event
//var flag = false;
document.getElementById("btn_close_submit").addEventListener("click", function() {
  //flag = true;
  closeModal();
  //form.submit();
  location.reload();

});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal(){
  modalbg.style.display = "none";
  location.reload();
}



//POPUP
const submitBtn = document.getElementById("btn-submit");
const modalValidContainer = document.getElementById("modalValid-container");
const closeBtn = document.getElementById("modalValid-close");

closeBtn.addEventListener("click", () => {
  modalValidContainer.classList.remove("show");
}); 



//Controle input formulaire
const form = document.getElementById("form");
const input = document.querySelectorAll("input");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const termsAndConditions = document.getElementById("termsAndConditions");

function checkMail(mail){
  var content = /^[^ ]+@[^ ]+\.[a-z]/;
  return content.test(mail); //Test retourne boolean
}

function validInput (domElement, errorName, isValid){
	if(isValid === false){
		document.getElementById(errorName).style.display="block";
    domElement.style.transition= "all 0,4s";
		domElement.style.border = "2px red solid";
    
	}
	else{
		document.getElementById(errorName).style.display="none";
    domElement.style.transition= "all 0,4s";
		domElement.style.border = "2px green solid";
    
	}
}

//----------FONCTIONS VERFIF INPUTS----------//
//PRENOM
function checkFirstName(){
  const firstnameValue = firstname.value.trim();  //TRIM permet d'ignorer si des espaces sont saisis par l'utilisateur, ils ne sont pas comptés comme caractères
  if(firstnameValue === "" || firstnameValue.length < 2){
    validInput(firstname, "error_message_firstname", false);
    return -1;
  }
  else{
    validInput(firstname, "error_message_firstname", true);
  }
}

//NOM
function checkLastName(){
  const lastnameValue = lastname.value.trim();
  if(lastnameValue === "" || lastnameValue.length < 2){
    validInput(lastname, "error_message_lastname", false);
    return -1;
  }
  else{
    validInput(lastname, "error_message_lastname", true);
  }
}

//MAIL
function checkMailAdress(){
  const emailValue = email.value;
  if(!checkMail(emailValue)){
    validInput(email, "error_message_email", false);
    return -1;
  }
  else{
    validInput(email, "error_message_email", true);
  }
}

//BIRTHDATE
function checkBirthdate(){
  const birthdateValue = birthdate.value;
  if(birthdateValue === ""){
    validInput(birthdate, "error_message_birthdate", false);
    return -1;
  }
  else{
    validInput(birthdate, "error_message_birthdate", true);
  }
}
//TOURNAMENTVALUE
function checkTournamentValue(){
  const tournamentValue = tournament.value.trim();
  if(tournamentValue === "" || tournamentValue < 0){
    validInput(tournament, "error_message_tournament", false);
    return -1;
  }
  else{
    validInput(tournament, "error_message_tournament", true);
  }
}
//AU MOINS UNE VILLE SELECTIONNÉE
function checkCities(){
  const tournamentValue = tournament.value.trim();
  
  var j = 0;
  var resultLoop = 0;

  if(tournamentValue > 0 && j === 0){
    for(var i = 0; i<cities.length; i++){
      if(cities[i].checked === false){
        document.getElementById("error_message_cities").style.display="block";
        resultLoop ++;
      }
      else{
        document.getElementById("error_message_cities").style.display="none";
        j++;
        resultLoop === 0;
        break;
      }
    }
  }

  if(resultLoop > 5){   //Si la valeur est supérieur a 5, alors cela veut dire que la valeur vaut 6 et que les 6 cases ne sont pas cochées
    return -1;
  }
}


//TERMES ET CONDITIONS GÉNÉRALES ACCEPTÉES
function checkTerms(){
  if(termsAndConditions.checked === false){
    document.getElementById("error_message_terms").style.display="block";
    return -1;
  }
  else{
    document.getElementById("error_message_terms").style.display="none";
  }
}

function checkInputs(){
  var retourFct = 0;
  var i = 0;

  while(i === 0){
    if(checkFirstName() === -1){
      retourFct = -1;
    }
  
    if(checkLastName() === -1){
      retourFct = -1;
    }
  
    if(checkMailAdress() === -1){
      retourFct = -1;
    }
  
    if(checkBirthdate() === -1){
      retourFct = -1;
    }
  
    if(checkTournamentValue() === -1){
      retourFct = -1;
    }
  
    if(checkCities() === -1){
      retourFct = -1;
    }
  
    if(checkTerms() === -1){
      retourFct = -1;
    }
    i++;
  }
  return retourFct;
}



//Controle envoi formulaire
form.addEventListener("submit", (e) => {
  if(checkInputs() === -1){
    e.preventDefault(); //Le formulaire ne s'envoit pas
  }
  else{
    e.preventDefault();
    //modalValidContainer.classList.add("show");
    document.getElementById("form_without_button").style.display = "none";
    document.getElementById("validation_message").style.display = "block";
    document.getElementById("btn_close_submit").style.display = "block";
    submitBtn.style.display = "none";
  }

})

firstname.addEventListener("click", function() {
  checkFirstName();
});

firstname.addEventListener("input", function() {
  checkFirstName();
});

lastname.addEventListener("click", function() {
  checkLastName();
});

lastname.addEventListener("input", function(){
  checkLastName();
});

email.addEventListener("click", function() {
  checkMailAdress();
});

email.addEventListener("input", function() {
  checkMailAdress();
});

birthdate.addEventListener("click", function() {
  checkBirthdate();
});

birthdate.addEventListener("input", function() {
  checkBirthdate();
});

tournament.addEventListener("click", function() {
  checkTournamentValue();
});

tournament.addEventListener("input", function() {
  checkTournamentValue();
});

for(var i = 0; i<cities.length; i++){
  cities[i].addEventListener("click", function() {
    checkCities();
  });
}

termsAndConditions.addEventListener("click", function() {
  checkTerms();
});