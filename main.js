
Score = 0;

function UpdateScore()
{
    Score = Score + 1;
    document.getElementById("Score").innerHTML = "Score : " + Score;
}

function SaveScore()
{
    localStorage.setItem("Score", Score);
}

function NextPage()
{
    window.location = "Activity_2.html";
}

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}