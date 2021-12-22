'use strict';

let answerre = +prompt("Какую сумму вы хотите положить на счёт?");

alert(analysis(answerre));

function analysis(answer){
    let str = String(answer);
    let pade;
    let val1 = str.length;
    let val2 = str.length-1;
    let symbol = Number(str.substring(val2,val1));
    switch (symbol){
        case 0:
        pade = "рублей";
        break;
        case 1:
        pade = "рубль";
        break;
        case 2:
        pade = "рубля";
        break;
        case 3:
        pade = "рубля";
        break;
        case 4:
        pade = "рубля";
        break;
        case 5:
        pade = "рублей";
        break;
        case 6:
        pade = "рублей";
        break;
        case 7:
        pade = "рублей";
        break;
        case 8:
        pade = "рублей";
        break;
        case 9:
        pade = "рублей";
        break;
    }

    let finalstr = "Ваша сумма в" + answer +" " +pade + "успешно зачисленна";
    return finalstr;
    
}

