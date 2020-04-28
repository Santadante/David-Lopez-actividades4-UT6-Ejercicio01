function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');
	let cogerDiv = document.getElementById('ficheroXML');

	for(let i = 0; i < tit.length; i++)
	{
		cogerDiv.className = "tabla";
		cogerDiv.className = "fila";
		cogerDiv.className = "celda";
		cogerDiv.innerHTML += tit[i].firstChild.nodeValue;
		cogerDiv.className = "celda";
		cogerDiv.innerHTML += aut[i].firstChild.nodeValue;
		if(valor < 25)
			cogerDiv.className = "azul";
		else
			cogerDiv.className = "verde";
		cogerDiv.className = "fila";
		
	}
	/*document.getElementById('ficheroXML').innerHTML += "<b>" + 
	tit + "</b>" + aut*/
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})