//переменные
var Question1 = document.getElementsByName("test1");
var Question2 = document.getElementsByName("test2");
var Question3 = document.getElementsByName("test3");
var Question4 = document.getElementsByName("test4");
var Question5 = document.getElementsByName("test5");
var result = 0;


document.getElementById("test-result").onclick = function() { testResult(); }
  
function testResult() {
//вопрос 1
    if (Question1[0].checked) {
        result += 1;
    }
    
//вопрос 2
    if (Question2[2].checked) {
        result += 1;
    }
    
//вопрос 3
    if (Question3[3].checked) {
        result += 1;
    } 
//вопрос 4
    if  (!Question4[0].checked && Question4[1].checked && !Question4[2].checked && Question4[3].checked) {
     result += 1;
    }
    
//вопрос 5
    if  (Question5[0].checked && Question5[1].checked && !Question5[2].checked && !Question5[3].checked) {
     result += 1;
    }
    
// вывод результата
alert("Вы набрали " + result + " баллов " + result * 20 + "% правильных ответов!"); 
}
