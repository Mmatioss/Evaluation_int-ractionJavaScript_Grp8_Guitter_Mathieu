"use strict"

let icon_burger=document.getElementById("burger-icon");
let barre_burger=document.getElementsByClassName("barre");
let dMode=false

icon_burger.onmouseover=()=>{
    icon_burger.style.background="#eba24f";
    for (let i=0; i<3; i++){
        barre_burger[i].style.background="white"
    }
    icon_burger.style.cursor="pointer"
}
icon_burger.onmouseleave=()=>{
    icon_burger.style.background="white";
    for (let i=0; i<3; i++){
        barre_burger[i].style.background="#ee7d00"
    }
}


let cacher=document.getElementById("cacher");

function menu_burger(){
    if(cacher.style.display=="none"){
        cacher.style.display="block"
    }else{
        cacher.style.display="none"
    }
}

icon_burger.addEventListener("click",menu_burger)

let cacher_block=document.getElementsByClassName("cacher");

for(let i=0; i<4;i++){
    cacher_block[i].onmouseover=()=>{
        cacher_block[i].style.background="white"
        cacher_block[i].style.color="#eba24f"
    }
    cacher_block[i].onmouseleave=()=>{
        cacher_block[i].style.background="#eba24f"
        cacher_block[i].style.color="white"
    }
}

let bt_darkMode=document.getElementById("footer");

bt_darkMode.onmouseover=()=>{
    bt_darkMode.style.background="white"
    bt_darkMode.style.color="#eba24f"
    bt_darkMode.style.cursor="pointer"
}
bt_darkMode.onmouseleave=()=>{
    bt_darkMode.style.background="#eba24f"
    bt_darkMode.style.color="white"
}

let icon_lune=document.getElementById("lune").style
let icon_soleil=document.getElementById("soleil").style
let body=document.getElementById("body")

function darkMode(){
    if(dMode==false){
        dMode=true
        icon_lune.display="none"
        icon_soleil.display="block"
        body.style.background="#333"
        body.style.color="white"
    }else{
        dMode=false
        icon_lune.display="block"
        icon_soleil.display="none"
        body.style.background="white"
        body.style.color="black"
    }
}

bt_darkMode.addEventListener("click",darkMode)