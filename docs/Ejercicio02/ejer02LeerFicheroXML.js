 function gestionarFicheroTXT(txtDoc){
    let texto = new FileReader(txtDoc);
    for (var i = 0; i < texto.length; i++) {
        //texto[i] = texto[i].trim();
        console.log(texto[i]);
     }
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let txtDoc = loadLDocA("mensajes.txt","txt");
})
