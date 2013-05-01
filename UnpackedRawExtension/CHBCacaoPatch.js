$('document').ready(function() {
	
	
	document.body.innerHTML = document.body.innerHTML.replace("Recherchez ou collez un lien", "Recherchez, collez un lien, ou mangez un kiwi");
	document.body.innerHTML = document.body.innerHTML.replace("Mon cacaoweb", "Mon compte");
	document.body.innerHTML = document.body.innerHTML.replace("Bienvenue", "Connecté(e) en tant que: ");
	document.body.innerHTML = document.body.innerHTML.replace("Pour regarder tous vos films et séries, allez sur <a href=\"http://papystreaming.com/fr\" target=\"_blank\">papystreaming</a>", "<div style=\"cursor:default;\"><br /><br /><br /><span style=\"opacity:.5;font-size:.9em; style=\"cursor:default;\"\">chlkbumper's edit of cacaoweb</span></div>");
	document.body.innerHTML = document.body.innerHTML.replace("Mauvaise vidéo? le signaler", "Signaler un fake");
	document.body.innerHTML = document.body.innerHTML.replace("<span id=\"more\">Plus</span>", "<span id=\"more\" style=\"cursor:default;\">Plus</span>");
	document.body.innerHTML = document.body.innerHTML.replace("<li id=\"auth-notification\">", "<li id=\"auth-notification\" style=\"cursor:default; text-shadow:1px 1px 1px rgba(0,0,0,.5);\">");
	document.body.innerHTML = document.body.innerHTML.replace("<img src=\"img/logo.png\" alt=\"cacaoweb\">", "<img draggable=\"false\" src=\"img/logo.png\" alt=\"cacaoweb\">");
	
	//document.getElementsByTagName('body')[0].setAttribute('onselectstart') = "return false";
	document.getElementsByTagName('body')[0].setAttribute('style', '');

	
	document.head.getElementsByTagName('style')[0].innerHTML = "small { cursor:default; text-shadow:1px 1px 1px rgba(0,0,0,.5); } #head {background: rgba(100,100,100,.6) url() !important;} * { font-family: 'Roboto Condensed', sans-serif !important; } #top-toolbar ul {width: 165px !important; top: 30px !important; background: rgba(0,0,0,.9) !important; border: solid 1px #444 !important; border-radius: 3px !important; box-shadow: 0 1px 1px rgba(0,0,0, .3) !important;} #top-toolbar ul li:first-child { border-top-left-radius: 3px; border-top-right-radius: 3px;}#top-toolbar ul li:last-child { border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;} #top-toolbar ul li {float: none; padding-top: 5px !important; padding-bottom: 5px !important;}";

	setTimeout(function(){
    //$("img")[2].src = "http://jpegy.com/images/uploads/2012/05/omg-thats-not-how-you-eat-it.jpeg";
}, 10);
});