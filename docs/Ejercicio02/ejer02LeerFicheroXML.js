 function gestionarFicheroTXT(txtDoc){
	var reader = new FileReader();
        
        reader.onload = function(e) {
            var content = reader.result;
            //Here the content has been read successfuly
            alert(content);
        }
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("mensajes.txt","txt");
})
