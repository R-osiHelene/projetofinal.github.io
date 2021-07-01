
function executarAcao(){
    var testen=document.getElementById("testen").Value;

    var testen=0;
    console.log(testen);

    if(testen=1){
        window.location.href="arquivos/pasta1.pdf";
        alert("Faça a pasta 01")

        } else if(testen =2) {
        window.location.href="arquivo 2/pasta2.pdf";
            alert("Faça a pasta 02")
    }else{
        console.log("Faça a pasta 03")
    }
   
}