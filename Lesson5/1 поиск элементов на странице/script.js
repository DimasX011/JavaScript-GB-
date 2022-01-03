'use strict';

var four = document.getElementById("four");
console.log(four);

var classes = document.getElementsByClassName("one");

for(let i=0; i< classes.length; i++){
    console.log(classes[i]);
}

var selque = document.querySelectorAll("card-body");


for(let i=0; i< selque.length; i++){
    console.log(selque[i]);
}

var deln = document.querySelector('[aria-valuenow="50"]');

var info = console.log(document.title);


