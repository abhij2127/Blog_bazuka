function openrecent(){
	document.getElementById("recent").style.display="block";
	document.getElementById("btnav").style.display="none";
	window.scrollTo(0,120);
}
function openatr(){
	document.getElementById("atr").style.display="block";
	document.getElementById("btnav").style.display="none";
	window.scrollTo(0,120);
}
function openvid(){
	document.getElementById("vid").style.display="block";
	document.getElementById("btnav").style.display="none";
	window.scrollTo(0,120);
	//window.scrollTo(0,document.body.scrollHeight);
}
function openupc(){
	document.getElementById("upc").style.display="block";
	document.getElementById("btnav").style.display="none";
	window.scrollTo(0,120);
}

function foldup(){
	document.getElementById("btnav").style.display="block";
	document.getElementById("atr").style.display="none";
	document.getElementById("vid").style.display="none";
	document.getElementById("recent").style.display="none";
	document.getElementById("upc").style.display="none";
}
