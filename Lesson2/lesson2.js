'use strict';
let a = 1, b = 1, c, d;

c = ++a;

console.log(c);

/*
с = a + 1, a = 1, c = 2
*/

c = 2 + ++a;

console.log(c);
/*
a = 2;
префиксный инкремент увеличит значение а до 3
c = 2 + 3
c = 5
*/

d = 2 + b++;

/* 
постфиксное инкрементирование увеличивает b до 3
но на этапе вычисления равно 2
*/
d = 2 + 2;
console.log(d);

/* 

*/
let e = 2;

let x = 1 + (e *= 2);


console.log(e);
console.log(x);

/*
e = e* 2
e = 4
x = 4 + 1 
*/



console.log(val(5,-4));
console.log(val(5,7));
console.log(val(-5,-4));

function val(v1,v2){
    if(v1>0&&v2>0){
        c= v1-v2;
    }
    else if(v1<0&&v2<0){
        c = v1*v2;
    }
    else if(v1<0&&v1<v2&&v2>0||v2<0&&v2<v1&&v1>0){
        c= v1 + v2;
    } 
    return c;
}

oper(4,3,"+");
oper(4,3,"-");
oper(4,3,"*");
oper(4,3,"/");


function oper(a,b,op){
    if(op=="+"){
       c = sum(a,b);
    }
    else if(op=="-"){
       c = vichit(a,b);
    }
    else if(op =="*"){
      c =  ymnosh(a,b);
    }
    else if(op =="/"){
      c =  deln(a,b);
    }
    console.log(c);
}


function sum(a,b){
    return a + b;
}

function vichit(a,b){
    return a - b;
}

function ymnosh(a,b){
    return a*b;
}

function deln(a,b){
    return a/b;
}

