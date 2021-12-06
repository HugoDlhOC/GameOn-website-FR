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
const submitBtn = document.getElementById("btn-submit");
const closeBtnSubmit = document.getElementById("btn_close_submit");
const body = document.getElementById("body");
//DOM Controle input formulaire
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const termsAndConditions = document.getElementById("termsAndConditions");


//launch modal event
//Permet d'afficher le formulaire au clic du bouton s'inscrire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction

//close modal event
//Permet de fermer le formulaire au clic de la croix
closeForm.addEventListener("click", closeModal);

//close final modal event
//Permet de fermer le formulaire au clic sur le bouton close
closeBtnSubmit.addEventListener("click", function() {
  closeModal();
  //location.reload();
});

//launch modal form
//Fonction permettant d' afficher le formulaire, en le passant en display block

function hiddeSectionHero(){
  let query = window.matchMedia("(max-width: 540px)");

  if(query.matches){
    heroSection.style.display = "none";
  }
  else{
    heroSection.style.display = "block";
  }
}

function showSectionHero(){
  heroSection.style.display = "block";
}

function launchModal() {
  modalbg.style.display = "block";
  window.addEventListener("resize", hiddeSectionHero);
  hiddeSectionHero();
  //heroSection.style.display = "none";
}

//close modal form
//Fonction permettant de fermer le formulaire, en le passant en display none
function closeModal(){
  modalbg.style.display = "none";
  showSectionHero();
  window.removeEventListener("resize", hiddeSectionHero);
  //heroSection.style.display = "block";
  //location.reload();  //On relance la page pour que les données déja saisies soient supprimées 
}

//Fonction permettant de vérifier qu'un mail est bien saisi. 
//Elle contrôle que l'utilisateur a bien écrit quelque chose avant l'@.
//Elle contrôle la présence de l'@
//Elle contrôle la présence de caractères alphabétiques après le @ 
//La fonction TEST va retourner un boolean en fonction de la saisie
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
//Méthode 1
function checkCities(){
  const citiesSelect = document.querySelectorAll(".select_city");
  /*
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
  */
  
  //Méthode 2
  const cities = document.getElementsByName("location");
  const someCheckCities = Array.from(cities).some(function (city){
    return city.checked === true;
  });

  if(someCheckCities === false){
    document.getElementById("error_message_cities").style.display="block";
    for(var i = 0; i < citiesSelect.length; i++){
      citiesSelect[i].style.border = "2px red solid";
    }
    return -1;
  }
  else{
    document.getElementById("error_message_cities").style.display="none";
    for(var i = 0; i < citiesSelect.length; i++){
      citiesSelect[i].style.border = "2px green solid";
    }
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

//Cette fonction va permettre une fois que l'utilisateur aura cliqué de déterminer les erreurs, ou non, ce qui provoquera soit l'autorisation de l'envoi ou pas du formulaire à l'aide de son retour
function checkInputs(){
  var retourFct = 0;

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
  return retourFct;
}

//Controle envoi formulaire
//On vérifie le retour de la fonction checkInputs pour afficher ou non à l'utilisateur le message de validation
form.addEventListener("submit", (e) => {
  
  if(checkInputs() === -1){
    e.preventDefault();
  }
  else{
    e.preventDefault();
    document.getElementById("form_without_button").style.display = "none";
    document.getElementById("validation_message").style.display = "block";
    closeBtnSubmit.style.display = "block";
    submitBtn.style.display = "none";
  }
});

//Ensemble d'écoutes d'évènements pour rendre le formulaire dynamique
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