/*EVENEMENT
launch modal event
Permet d'afficher le formulaire au clic du bouton s'inscrire*/
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  //Permet d'afficher le formulaire, btn est une fonction

/*EVENEMENT
close modal event
Permet de fermer le formulaire au clic de la croix*/
closeForm.addEventListener("click", function() {
  closeModal();
});

/*EVENEMENT
close modal event 2 : fermeture du message de validation du formulaire
Au clic sur la 2ème croix (croix du message de validation)
  -->   - Fermeture du modal
        - Toutes les données saisies sont effacées
        - Tous les styles de bordure sont supprimés
        - Les bordures des villes retrouvent leur couleur verte*/
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

/*EVENEMENT
close final modal event
Permet de fermer le formulaire au clic sur le bouton close du message de validation
  -->   - Fermeture du modal
        - Toutes les données saisies sont effacées*/
closeBtnSubmit.addEventListener("click", function() {
    closeModal();
    form.reset();
});

/*FONCTION
launch modal form
Fonction permettant d' afficher le formulaire, de cacher les éléments de validation de formulaire qui pourraient être présents*/
function launchModal() {
    modalbg.style.display = "block";  
    formWithoutBtn.style.display = "block";
    submitBtn.style.display = "block";
    validationMessage.style.display = "none";
    closeBtnSubmit.style.display = "none";
  }
  
/*FONCTION
close modal form
Fonction permettant de fermer le formulaire (le modal), en le passant en display none*/
function closeModal(){
    modalbg.style.display = "none";
}



