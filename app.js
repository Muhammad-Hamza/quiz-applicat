function check(){
    var score = 0
    var right_answer_1=document.getElementById('a1-a2');
    var a1_answer_1=document.getElementById('a1-a3')
    var a2_answer_2=document.getElementById('a1-a4')
    if (right_answer_1.checked== true){
        score++
        alert('Q1 Answer is Right')
    }
    else('Q1 Answer is wrong')

    var right_answer_2=document.getElementById('a2-a2');
    var a1_answer_1=document.getElementById('a2-a3')
    var a2_answer_2=document.getElementById('a2-a4')
    if (right_answer_2.checked== true){
        score++
        alert('Q2 Answer is Right')
    }
    else{('Q2 Answer is wrong')

    }

    var right_answer_3=document.getElementById('a3-a2');
    var a1_answer_1=document.getElementById('a3-a3')
    var a2_answer_2=document.getElementById('a3-a4')
    if (right_answer_3.checked== true){
        score++  
        alert('Q3 Answer is Right')
    }
    else{('Q3 Answer is wrong')
alert('your score is' + score++)
    }







}