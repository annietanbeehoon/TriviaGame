//$('#quizForm').hide();
//$('#results).hide();

$(document).ready(function () {
    // create a function upon click of start button, it displays the quizform, timer counter on click and hide the Start button.
    $("#show").click(function () {
        //$('#quizForm').css('display', 'block');
        //$('#quizForm').show();
        //$('#show').hide();
    
    // Create code for countdown counter
        var count = 11;
        var counter = setInterval(timer, 1000); //1000 will run it every 1 second
        function timer() {
            count = count - 1;
            if (count <= 0) {
                clearInterval(counter);
                submitAnswers(); // Check the answer
            }

            //Do code for showing the number of seconds here
            document.getElementById("timer").innerHTML = count + " secs"; // watch for spelling
        }




// Create the quiz.
function submitAnswers() {
//create variables for total number of questions and total score.
var total = 5;
var score = 0;

var q1 = document.forms["quizForm"]["q1"].value;
var q2 = document.forms["quizForm"]["q2"].value;
var q3 = document.forms["quizForm"]["q3"].value;
var q4 = document.forms["quizForm"]["q4"].value;
var q5 = document.forms["quizForm"]["q5"].value;

//Check the player's input; alert when unanswered
for (i = 1; i <= total; i++) {
    if (eval('q' + i) == null || eval('q' + i) === '') {
        alert("You missed question " + i);
        return false;
    }
}
//Create an answer array
var answers = ["b", "a", "b", "a", "c"];

//Check the answers
for (i = 1; i <= total; i++) {
    if (eval('q' + i) === answers[i - 1]);
    score++;
}

//Show the results of the player's show
var results = document.getElementById('results');
results.innerHTML = ('<h3> You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>');
return false;
}
})
})