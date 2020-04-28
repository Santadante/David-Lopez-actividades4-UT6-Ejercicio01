function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo')[0].firstChild.nodeValue;
	let aut = xmlDoc.getElementsByTagName('autor')[0].firstChild.nodeValue;

	document.getElementById('ficheroXML').innerHTML += "<b>" + 
	tit + "</b>" + aut
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})