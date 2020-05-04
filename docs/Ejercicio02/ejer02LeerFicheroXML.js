 function gestionarFicheroTXT(txtDoc){
    let texto = txtDoc.document;
    for (var i = 0; i < texto.length; i++) {
        //names[i] = names[i].trim();
        console.log(texto[i]);
     }
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let txtDoc = loadLDocA("mensajes.txt","txt");
})
