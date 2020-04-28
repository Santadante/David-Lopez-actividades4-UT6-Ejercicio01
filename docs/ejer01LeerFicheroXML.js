function gestionarFicheroXML(xmlDoc){
	
	alert(xmlDoc.getElementsByTagName('titulo')[0].firstChild.nodeValue) // 80 mundos
	

	document.getElementById('ficheroXML').innerHTML += "<b>" + 
	xmlDoc.getElementsByTagName('libro')[0].childNodes[1].firstChild.nodeValue + "</b>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})