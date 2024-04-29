imprime = (msg) => console.log(msg);
const data = new Date ();
function hora_atual(){
  setTimeout( () => {
    document.getElementById("h").innerHTML = data.getHours 
    "!" + data.getSeconds();
    hora_atual();
  }, 1000);
  document.getElementById("h").innerHTML =
  data.getHours() + ":" + data.getSeconds();
}

fazerSorteio = () => {
  num1 = document.getElementById("inicio").value ;
  num2 =  document.getElementById("fim").value ;
  let sorteio = Math.floor(Math.random() * Number(num2) - Number(num1));

  document.getElementById("resultado").innerHTML = sorteio;
}
function escolher_aba(btn){

    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+i;
        let class_aba = "aba"+i;
        document.getElementById(id_btn).style.backgroundColor = "#ffffff";
        document.getElementById(id_btn).disabled = false;
        document.getElementById(class_aba).style.display = "none";
    }
    if(btn == "1"){
      document.getElementById("btn1").style.backgroundColor = "#ffffff" ;
      document.getElementById("btn1").disabled =true;
      document.getElementById("aba1").style.display = "block";
    }
    if(btn == "2"){
        document.getElementById("btn2").style.backgroundColor = "#ffffff" ;
        document.getElementById("btn2").disabled =true;
      document.getElementById("aba2").style.display = "block";
    }
    if(btn == "3"){
        document.getElementById("btn3").style.backgroundColor = "#ffffff" ;
        document.getElementById("btn3").disabled =true;
        document.getElementById("aba3").style.display = "block";
        iniciar_despertador();
        document.getElementById("hora_d").value = hora_d;
        document.getElementById("min_d").value = min_d;
        document.getElementById("seg_d").value = seg_d;
      }
  
     if(btn == "4"){
        document.getElementById("btn4").style.backgroundColor = "#ffffff" ;
        document.getElementById("btn4").disabled =true;
        document.getElementById("aba4").style.display = "block";
      }
    
}

let contador = null;
let inicio = 0;
let fim = 0;
function contagem(){
  if(inicio == fim + 1) contador.clearInverval();
  else{
    document.getElementById("valor").innerHTML = inicio;
    inicio++;
  }
}

function iniciar(){
    inicio = document.getElementById("inicio").value;
    fim = document.getElementById("fim").value;
    contador = setIterval(() => {
      contagem();
    }, 1000);
}
let hora_d;
let min_d;
let seg_d;
function iniciar_despertador(){
  let d = new Date();
  hora_d = d.getHours();
  min_d = d.getMinutes();
  seg_d = d.getSeconds();
}
let despertar =null;
function ligar_despertador(){
  let d = new Date();
  if(d.getHours() == hora_d && d.getMinutes() == min_d && d.getSeconds() == seg_d){clearInterval(despertar);
    alert("Alarme.");
    escolher_aba(3);
  }
}
function ajustar(){
  document.getElementById("hora_d").value;
  document.getElementById("min_d").value;
  document.getElementById("seg_d").value;
  despertar = setInterval(ligar_despertador,1000);
} 