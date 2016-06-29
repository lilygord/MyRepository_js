//переменные
var question1 = document.getElementsByName("test1");
var question2 = document.getElementsByName("test2");
var question3 = document.getElementsByName("test3");
var question4 = document.getElementsByName("test4");
var question5 = document.getElementsByName("test5");
var result = 0;

document.getElementById("test-result").onclick = testResult; 
  
function testResult() {
//вопрос 1
    if (question1[0].checked) {
        result += 1;
    }
//вопрос 2
    if (question2[2].checked) {
        result += 1;
    }
//вопрос 3
    if (question3[3].checked) {
        result += 1;
    } 
//вопрос 4
    if  (!question4[0].checked && question4[1].checked && !question4[2].checked && question4[3].checked) {
     result += 1;
    }
//вопрос 5
    if  (question5[0].checked && question5[1].checked && !question5[2].checked && !question5[3].checked) {
     result += 1;
    }
// вывод результата
alert("Вы набрали " + result + " баллов " + result * 20 + "% правильных ответов!"); 
result = 0;
}
