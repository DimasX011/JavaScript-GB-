'use strict';

Start();

function farengheitVics(celstemp){
    //Tf = (9 / 5) * Tc + 32
    let far = 0;
    far = (9/5) * celstemp + 32;
    return far;
}

function Start(){
    let farengheit = 0;
    let cels = +prompt("Введите темпиратуру в Цельсиях", "");
    farengheit = farengheitVics(cels);
    alert("Темпиратура в кельвинах:" + farengheit)
}

