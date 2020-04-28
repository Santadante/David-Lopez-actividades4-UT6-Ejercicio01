function gestionarFicheroXML(xmlDoc){
	let tit = xmlDoc.getElementsByTagName('titulo');
	let aut = xmlDoc.getElementsByTagName('autor');
	let valor = xmlDoc.getElementsByTagName('precio');
	let cogerDiv = document.getElementById('ficheroXML');

	for(let i = 0; i < tit.length; i++)
	{
		cogerDiv.className = "tabla";
		cogerDiv.innerHTML += tit[i].firstChild.nodeValue + "<br>";
		
	}
	/*document.getElementById('ficheroXML').innerHTML += "<b>" + 
	tit + "</b>" + aut*/
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})