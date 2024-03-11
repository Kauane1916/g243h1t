imprime = (msg) => console.log(msg);

function escolher_aba(bnt){
    for(let i = 1; i <= 4; i++){
        let id_btn = "btn"+i;
        let class_aba = "aba"+i;
        document.getElementById("btn1").style.backgroundColor = "#ffffff" 
        document.getElementById("bnt1").diabled =true;
    }
    if(btn == "1"){
      document.getElementById(id_btn).style.backgroundColor = "#ffffff" 
      document.getElementById(id_btn).diabled =false;
      document.getElementById(id_btn).style.display = "blok";
    }
    if(btn == "2"){
        document.getElementById(id_btn).style.backgroundColor = "#ffffff" 
      document.getElementById(id_btn).diabled =false;
      document.getElementById(id_btn).style.display = "blok";
    }
    if(btn == "3"){
        document.getElementById(id_btn).style.backgroundColor = "#ffffff" 
        document.getElementById(id_btn).diabled =false;
        document.getElementById(id_btn).style.display = "blok";
      }
  
     if(btn == "4"){
        document.getElementById(id_btn).style.backgroundColor = "#ffffff" 
        document.getElementById(id_btn).diabled =false;
        document.getElementById(id_btn).style.display = "blok";
      }
  
}