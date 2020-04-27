function gestionarFicheroXML(xmlDoc){
	
	alert(xmlDoc.getElementsByTagName('nombre')[0].firstChild.nodeValue) // 80 mundos
	alert(xmlDoc.getElementsByTagName('libro')[0].childNodes[2].firstChild.nodeValue)
	alert(xmlDoc.getElementsByTagName('libro')[0].childNodes[2]) // titulo libro

	document.getElementById('ficheroXML').innerHTML += "<b>" + 
	xmlDoc.getElementsByTagName('libro')[0].childNodes[2].textContent + "</b>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})