 function gestionarFicheroTXT(txtDoc){
    let fs = require("fs");
    let text = fs.readFileSync("./dancers.txt");
    let textByLine = text.split("\n")
    let names = read("dancers.txt").split("\n"); 
    for (var i = 0; i < names.length; ++i) {
          names[i] = names[i].trim();
          console.log(names[i]);
       }
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let txtDoc = loadLDocA("mensajes.txt","txt");
})
