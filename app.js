let button = document.querySelector("button");
let body = document.querySelector("body");
let colors = ["red","blue","yellow","gray","purple","black"];

button.addEventListener('click',backgroundchanger);

function backgroundchanger(){
    const rastgelesayi = Math.floor(Math.random()*colors.length);
    const secilenrenk = colors[rastgelesayi];
    body.style.backgroundColor=secilenrenk;
    
}