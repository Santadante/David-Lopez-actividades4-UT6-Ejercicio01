 function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');
	let cogerDiv = document.querySelector("#ficheroXML");
	cogerDiv.className = "tabla";
	
	
	/*document.getElementById('ficheroXML').innerHTML += "<b>" + 
	tit + "</b>" + aut*/
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
