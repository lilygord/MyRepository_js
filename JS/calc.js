//переменные
var inp = document.getElementById("calc-input");//текстовое поле
var butPlus = document.getElementById("butt-plus");//кнопка плюс
var butMinus = document.getElementById("butt-minus");//кнопка минус
var butMultiply = document.getElementById("butt-mul"); //кнопка умножить
var butDivided = document.getElementById("but-divided"); //кнока делить
var butSignEqually = document.getElementById("sign-equally");//кнопка равно
var reset = document.getElementById("clear");//кнопка очистки 
var butPlusMn = document.getElementById("butt-plusmn");//кнопка плюс минус
var b1 = document.getElementById("butt1");
var b2 = document.getElementById("butt2");
var b3 = document.getElementById("butt3");
var b4 = document.getElementById("butt4");
var b5 = document.getElementById("butt5");
var b6 = document.getElementById("butt6");
var b7 = document.getElementById("butt7");
var b8 = document.getElementById("butt8");
var b9 = document.getElementById("butt9");
var b0 = document.getElementById("butt0");
var butPoint = document.getElementById("butt-comma");//кнопка запятая
var inpOne;//данные введенные изначально
var op = 0;

function addNumber(number) {
   inp.value = inp.value + number;
   }
b1.onclick = function () {
   addNumber(1);
   } 
b2.onclick = function () {
   addNumber(2);
   }
b3.onclick = function () {
   addNumber(3);
   }
b4.onclick = function () {
   addNumber(4);
   }
b5.onclick = function(){
   addNumber(5);
   }
b6.onclick = function(){
   addNumber(6);
   }
b7.onclick = function(){
   addNumber(7);
   }
b8.onclick = function(){
   addNumber(8);
   } 
b9.onclick = function(){
   addNumber(9);
   }
b0.onclick = function(){
   addNumber(0);
   }
butPoint.onclick = function(){
   if (inp.value.indexOf(".")<0 && inp.value.length>0){
   addNumber(".");
   }
}
butPlusMn.onclick = function(){
    inp.value = inp.value * -1;
   }
reset.onclick = function(){
    inp.value = "";
    op="";
    inpOne="";
   }
butPlus.onclick = function(){
    inpOne = inp.value;
    inp.value = "";
    op = "plus";
    }
butMinus.onclick = function(){
    inpOne = inp.value;
    inp.value = "";
    op = "minus";
    }
butMultiply.onclick = function(){
    inpOne = inp.value;
    inp.value = "";
    op = "multip";
   }
butDivided.onclick = function(){
    inpOne = inp.value;
    inp.value = "";
    op = "divided";
   }
 butSignEqually.onclick = function(){
    if (op == "plus") {
       inp.value = +inpOne + +inp.value;
       }
    if (op == "minus"){
      inp.value = inpOne - inp.value;
        }       
    if(op == "multip"){
       inp.value = inpOne * inp.value;
    }
    if(op == "divided"){
       if(+inp.value == 0){ alert("На ноль делить нельзя");
       }else {
       inp.value = inpOne / inp.value;
       }
 }
    op="";
    inpOne="";
}








