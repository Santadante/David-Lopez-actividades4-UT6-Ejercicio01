 function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');	
	let cogerDiv = document.querySelector("#ficheroXML"); //seleccionó el div
	cogerDiv.className = "tabla"; // creo la tabla con la clase css
	let añadirFila = document.createElement("div");
	let añadirCelda = document.createElement("div");

	
	for(let i = 0; i < tit.length; i++)
	{
		cogerDiv.appendChild(añadirFila);
		añadirFila.className = "fila";

		añadirFila.appendChild(añadirCelda);
		añadirFila.className = "celda";
		añadirCelda.innerHTML += tit[i].firstChild.nodeValue;	

		añadirFila.appendChild(añadirCelda);
		añadirFila.className = "celda";
		añadirCelda.innerHTML += aut[i].firstChild.nodeValue;
		
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
