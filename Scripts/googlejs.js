function monBouton(anId)
{
	 affiche = document.getElementById(content);
	if (affiche.style.visibility=="hidden")
	{
		// Contenu caché, le montrer
		affiche.style.visibility = "visible";
		affiche.style.height = "auto";			
	}
	else
	{
		// Contenu visible, le cacher
		affiche.style.visibility = "hidden";
		affiche.style.height = "0";			
}