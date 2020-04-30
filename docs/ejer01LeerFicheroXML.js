 function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');

	let cogerDiv = document.querySelector("#ficheroXML"); //seleccionó el div
	cogerDiv.className = "tabla"; // creo la tabla con la clase css
	
	for(let i = 0; i < tit.length; i++)
	{
		let añadirFila = document.createElement("div");
		cogerDiv.appendChild(añadirFila);
		añadirFila.className = "fila";

		let añadirCelda = document.createElement("div"); //declaro la primera celda
		añadirFila.appendChild(añadirCelda); // añado primera celda a la fila
		añadirCelda.className = "celda"; // le meto el display a la celda
		var textoCeldaIzq = document.createTextNode(tit[i].firstChild.nodeValue); //declaro el texto
		añadirCelda.append(textoCeldaIzq); // añado el texto
		
		añadirCelda = document.createElement("div"); //declaro la segunda celda
		añadirFila.appendChild(añadirCelda); // añado segunda celda a la fila
		añadirCelda.className = "celda"; // le meto el display a la celda
		var textoCeldaDer = document.createTextNode(aut[i].firstChild.nodeValue); //declaro el texto
		añadirCelda.append(textoCeldaDer); // añado el texto

		if(valor[i].firstChild.nodeValue < 25)
			cogerDiv.id = "azul";
		else
			cogerDiv.id = "verde";
	}
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
