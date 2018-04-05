
/*let monImage = document.querySelector('img');
document.querySelector(".bouton").onclick = function() {
if (window.getComputedStyle(document.querySelector('.grande centre')).display=='block'){
document.querySelector(".grand_centre").style.display="block";
} else {
document.querySelector(".grand_centre").style.display="none";
}
}



//Pour masquer la division :
document.getElementById(identifiant_de_ma_div).style.display = none;
///Pour afficher la division :
document.getElementById(identifiant_de_ma_div).style.display = block;*/


/*("bouton").onclick = function() {
	document.getElementById(#bouton).style.display = none;
	document.getElementById("#grand_centre").style.display = block;*/


	function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+ id).innerHTML='Cacher le bouton';
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+ id).innerHTML='Afficher le bouton';
    }
    return true;
    
    
}
/*let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');*/

/*function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}
if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}

monBouton.onclick = function() {
  définirNomUtilisateur();
}
*/