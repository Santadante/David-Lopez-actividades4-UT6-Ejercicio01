 function gestionarFicheroTXT(txtDoc){
	var names = read("mensajes.txt").split("\n"); 
    for (var i = 0; i < names.length; i++) {
          //names[i] = names[i].trim();
          console.log(names[i]);
       }
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("mensajes.txt","txt");
})
