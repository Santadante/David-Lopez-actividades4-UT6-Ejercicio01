 function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');
	let añadirDiv = document.createElement('div');
	let cogerDiv = document.querySelector("#ficheroXML"); //seleccionó el div
	cogerDiv.className = "tabla"; // creo la tabla con la clase css

	
	for(let i = 0; i < tit.length; i++)
	{
		
		añadirDiv.className = "fila";
		//cogerDiv.className = "celda";
		añadirDiv.innerHTML += tit[i].firstChild.nodeValue;
		cogerDiv.appendChild(añadirDiv);
		//cogerDiv.className = "celda";
		//cogerDiv.innerHTML += aut[i].firstChild.nodeValue;
		/*if(valor[i].nodeValue < 25)
			cogerDiv.className = "azul";
		else
			cogerDiv.className = "verde";*/
	}
	/*document.getElementById('ficheroXML').innerHTML += "<b>" + 
	tit + "</b>" + aut*/
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
