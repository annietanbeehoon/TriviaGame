// Count of answer tally
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;



// ------------------------ Game Functions are below ------------------------
$(document).ready(function () {
    // Initial page
    $("#quiz_container").hide();
    $("#finish_container").hide();

    $("#start_button").on("click", function () {

        // Hide the start Div from the user
        $("#start_container").hide();

        // Show the Game Div
        $("#quiz_container").show();

        timer();
        return;

    });
    // Create count
    var count = 11;
    var counter = setInterval(timer, 1000);

    // Countdown and displays the time to the user
    function timer() {

        // Decrement the counter, down from 10 seconds
        count = count - 1;
        if (count <= 0) {
            clearInterval(counter);
        }

        // Show player the count down timer
        $('#timer_number').html(count + " Seconds");


        // Player finishes before time is up and clicks done
        $("#submit").on("click", function () {
            checkAnswers(); // use the timeUp function to check the answers
            clearInterval(counter);
            return;

        });

        // when the timer reaches 0
        if (count == 0) {
            // Check answers
            checkAnswers();
            // Hide the game Div from the player
            $("#quiz_container").hide();

        }
    }


    // Function to be run after the timer is up
    function checkAnswers() {

        // Checked answers of the questions
        var q1 = document.forms["quizForm"]["q1"].value;
        var q2 = document.forms["quizForm"]["q2"].value;
        var q3 = document.forms["quizForm"]["q3"].value;
        var q4 = document.forms["quizForm"]["q4"].value;
        var q5 = document.forms["quizForm"]["q5"].value;

        // Determine the right/wrong/unanswered counts ( This count be a lot more DRY :/ )
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

        // After answers are checked, display the score results
        $('#correct_answers').html(correctCount);
        $('#wrong_answers').html(wrongCount);

        // Show the completed Score Div
        $("#finish_container").show();
    

    }

});
