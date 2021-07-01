
function executarAcao(){
    var testen=document.getElementById("testen").Value;

    var testen=0;
    console.log(testen);

    if(testen=1){
        window.location.href="arquivos/teste1.pdf";
        alert("Se você tem menos de 5 anos faça este teste")

        } else if(testen >=2) {
        window.location.href="arquivos/Teste02.pdf";
        alert("Se você tem menos de 12 anos faça este teste")
    }else{
        console.log("Faça o teste 03")
    }

}