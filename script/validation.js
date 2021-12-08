//launch modal event
//Permet d'afficher le formulaire au clic du bouton s'inscrire
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction

//close modal event
//Permet de fermer le formulaire au clic de la croix
closeForm.addEventListener("click", function() {
  closeModal();
});

//close modal event 2 : fermeture du message de validation du formulaire
//Au clic sur la 2ème croix
closeMessValid.addEventListener("click", function() {
    closeModal();
    form.reset();
    for(var i = 0; i < inputs.length; i++){
      inputs[i].style.border = "none";
    }
  
    for(var i = 0; i < spans.length; i++){
      spans[i].style.border = "2px solid #279e7a";
    }
    
  });

//close final modal event
//Permet de fermer le formulaire au clic sur le bouton close
closeBtnSubmit.addEventListener("click", function() {
    closeModal();
    form.reset();
  });

//launch modal form
//Fonction permettant d' afficher le formulaire
function launchModal() {
    modalbg.style.display = "block";  
    document.getElementById("form_without_button").style.display = "block";
    document.getElementById("validation_message").style.display = "none";
    closeBtnSubmit.style.display = "none";
    submitBtn.style.display = "block";
  }
  
//close modal form
//Fonction permettant de fermer le formulaire, en le passant en display none
function closeModal(){
    modalbg.style.display = "none";
}



