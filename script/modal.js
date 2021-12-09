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
const heroSection = document.querySelector(".hero-section");
const closeForm = document.querySelector(".close"); //modif
const closeMessValid = document.querySelector(".close_message");
const submitBtn = document.getElementById("btn-submit");
const closeBtnSubmit = document.getElementById("btn_close_submit");
//DOM Controle input formulaire
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const termsAndConditions = document.getElementById("termsAndConditions");
const inputs = document.querySelectorAll("#form input");
const spans = document.querySelectorAll(".citiesData span");

/*Fonction permettant de vérifier qu'un mail est bien saisi. 
Elle contrôle que l'utilisateur a bien écrit quelque chose avant l'@.
Elle contrôle la présence de l'@
Elle contrôle la présence de caractères alphabétiques après le @ 
La fonction TEST va retourner un boolean en fonction de la saisie*/
function checkMail(mail){
  var content = /^[^ ]+@[^ ]+\.[a-z]/;
  return content.test(mail); //Test retourne boolean
}
//Fonction permettant de raccourcir le code.
//Elle permet de faire en sorte que si une saisie est valide (par exemple le prénom), d'afficher un contenu HTML (message d'erreur) ou de le laisser caché
//3 paramètres : élément du DOM, le nom de l'erreur, si la saisie est valide ou non
function validInput (domElement, errorName, isValid){
	if(isValid === false){
		document.getElementById(errorName).style.display="block";
		domElement.style.border = "2px red solid";
	}
	else{
		document.getElementById(errorName).style.display="none";
		domElement.style.border = "2px green solid";
	}
}

//----------FONCTIONS VERIF INPUTS----------//
//PRENOM
function isFirstNameValid(){
  const firstnameValue = firstname.value.trim();  //TRIM permet d'ignorer si des espaces sont saisis par l'utilisateur, ils ne sont pas comptés comme caractères
  if(firstnameValue === "" || firstnameValue.length < 2){
    validInput(firstname, "error_message_firstname", false);
    return false;
  }
  else{
    validInput(firstname, "error_message_firstname", true);
    return true;
  }
}

//NOM
function isLastNameValid(){
  const lastnameValue = lastname.value.trim();
  if(lastnameValue === "" || lastnameValue.length < 2){
    validInput(lastname, "error_message_lastname", false);
    return false;
  }
  else{
    validInput(lastname, "error_message_lastname", true);
    return true;
  }
}

//MAIL
function isMailValid(){
  const emailValue = email.value;
  if(!checkMail(emailValue)){
    validInput(email, "error_message_email", false);
    return false;
  }
  else{
    validInput(email, "error_message_email", true);
    return true;
  }
}

//BIRTHDATE
function isBirthdateValid(){
  const birthdateValue = birthdate.value;
  if(birthdateValue === ""){
    validInput(birthdate, "error_message_birthdate", false);
    return false;
  }
  else{
    validInput(birthdate, "error_message_birthdate", true);
    return true;
  }
}
//TOURNAMENTVALUE
function isTournamentValueValid(){
  const tournamentValue = tournament.value.trim();
  if(tournamentValue === "" || tournamentValue < 0){
    validInput(tournament, "error_message_tournament", false);
    return false;
  }
  else{
    validInput(tournament, "error_message_tournament", true);
    return true;
  }
}
//AU MOINS UNE VILLE SELECTIONNÉE
function isCitiesValid(){
  const citiesSelect = document.querySelectorAll(".select_city");
  const cities = document.getElementsByName("location");
  
  const someCheckCities = Array.from(cities).some(function (city){
    return city.checked === true;
  });

  if(someCheckCities === false){
    document.getElementById("error_message_cities").style.display="block";
    for(var i = 0; i < citiesSelect.length; i++){
      citiesSelect[i].style.border = "2px red solid";
    }
    return false;
  }
  else{
    document.getElementById("error_message_cities").style.display="none";
    for(var i = 0; i < citiesSelect.length; i++){
      citiesSelect[i].style.border = "2px green solid";
    }
    return true;
  }
}

//TERMES ET CONDITIONS GÉNÉRALES ACCEPTÉES
function isTermsValid(){
  if(termsAndConditions.checked === false){
    document.getElementById("error_message_terms").style.display="block";
    return false;
  }
  else{
    document.getElementById("error_message_terms").style.display="none";
    return true;
  }
}

//Cette fonction va permettre une fois que l'utilisateur aura cliqué de déterminer les erreurs, ou non, ce qui provoquera soit l'autorisation de l'envoi ou pas du formulaire à l'aide de son retour
function checkInputs(){
  var retourFct = true;

    if(isFirstNameValid() === false){
      retourFct = false;
    }
  
    if(isLastNameValid() === false){
      retourFct = false;
    }
  
    if(isMailValid() === false){
      retourFct = false;
    }
  
    if(isBirthdateValid() === false){
      retourFct = false;
    }
  
    if(isTournamentValueValid() === false){
      retourFct = false;
    }
  
    if(isCitiesValid() === false){
      retourFct = false;
    }
  
    if(isTermsValid() === false){
      retourFct = false;
    }
  return retourFct;
}

//Controle envoi formulaire
//On vérifie le retour de la fonction checkInputs pour afficher ou non à l'utilisateur le message de validation
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(checkInputs() !== false){
    document.getElementById("form_without_button").style.display = "none";
    closeForm.style.display = "none";
    closeMessValid.style.display = "block";
    document.getElementById("validation_message").style.display = "block";
    closeBtnSubmit.style.display = "block";
    submitBtn.style.display = "none";
  }
});

//Ensemble d'écoutes d'évènements pour rendre le formulaire dynamique
firstname.addEventListener("click", function() {
  isFirstNameValid();
});

firstname.addEventListener("input", function() {
  isFirstNameValid();
});

lastname.addEventListener("click", function() {
  isLastNameValid();
});

lastname.addEventListener("input", function(){
  isLastNameValid();
});

email.addEventListener("click", function() {
  isMailValid();
});

email.addEventListener("input", function() {
  isMailValid();
});

birthdate.addEventListener("click", function() {
  isBirthdateValid();
});

birthdate.addEventListener("input", function() {
  isBirthdateValid();
});

tournament.addEventListener("click", function() {
  isTournamentValueValid();
});

tournament.addEventListener("input", function() {
  isTournamentValueValid();
});

cities.forEach((fct) => fct.addEventListener("click", isCitiesValid));

/*
for(var i = 0; i<cities.length; i++){
  cities[i].addEventListener("click", function() {
    isCitiesValid();
  });
}*/

termsAndConditions.addEventListener("click", function() {
  isTermsValid();
});
