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
const formData = document.querySelectorAll(".formData");

const closeForm = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction
//document.querySelectorAll(".modal-btn").forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction

//close modal event
closeForm.forEach((close_btn) => close_btn.addEventListener("click", closeModal));
//document.querySelectorAll(".close").forEach((close_btn) => close_btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
function closeModal(){
  modalbg.style.display = "none";
}


//Controle input formulaire
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const tournament = document.getElementById("quantity");
const cities = document.getElementsByName("location");
const termsAndConditions = document.getElementById("termsAndConditions");

form.addEventListener("submit", (e) => {
  if(checkInputs() === -1){
    e.preventDefault(); //Le formulaire ne s'envoit pas
  }
  else{
    alert("Merci ! Votre réservation a été reçue !")
  }
})

function checkMail(mail){
  var content = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return content.test(mail); //Test retourne boolean
}

function checkInputs() {
  const firstnameValue = firstname.value.trim();  //TRIM permet d'ignorer si des espaces sont saisis par l'utilisateur, ils ne sont pas comptés comme caractères
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value;
  const tournamentValue = tournament.value.trim();

  //Prenom
  if(firstnameValue === "" | firstnameValue.length < 2){
    document.getElementById("error_message_firstname").style.display="block";
    return -1;
  }
  else{ //Si l'utilisateur valide de nouveau le formulaire et que le champ prénom est désormais correct, alors je cache le message d'erreur
    document.getElementById("error_message_firstname").style.display="none";
  }

  //Nom
  if(lastnameValue === "" | lastnameValue.length < 2){
    document.getElementById("error_message_lastname").style.display="block";
    return -1;
  }
  else{
    document.getElementById("error_message_lastname").style.display="none";
  }

  //Mail
  if(!checkMail(emailValue)){
    document.getElementById("error_message_email").style.display="block";
    return -1;
  }
  else{
    document.getElementById("error_message_email").style.display="none";
  }

  //Tournois/Concours - Villes
  if(tournamentValue === ""){
    document.getElementById("error_message_tournament").style.display="block";
    return -1;
  }
  else{
    document.getElementById("error_message_tournament").style.display="none";
  }

  //Sélection d'au moins un bouton !
  var j = 0;

  if(tournamentValue > 0 & j === 0){
    for(var i = 0; i<cities.length; i++){
      if(cities[i].checked === false){
        document.getElementById("error_message_cities").style.display="block";
      }
      else{
        document.getElementById("error_message_cities").style.display="none";
        j++;
        break;
      }
    }
  }

  if(termsAndConditions.checked === false){
    document.getElementById("error_message_terms").style.display="block";
    return -1;
  }
  else{
    document.getElementById("error_message_terms").style.display="none";
  }
}