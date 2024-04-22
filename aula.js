let saida = "";
document.querySelector("#valor").onkeyup = function(e){
    if(e.keyCode == 13 && document.querySelector("#valor").value.lenght > 1){
      saida += "["+ document.querySelector("#valor").value + "] ";
      document.querySelector("#saida").innerHTML = saida;
      document.querySelector("#valor").value ="";
      document.querySelector("#valor").focus();
    }
}