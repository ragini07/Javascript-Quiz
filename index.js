const readlineSync = require('readline-sync');
const chalk = require('chalk');
const emoji = require('node-emoji');

//Welcome user
const name = readlineSync.question(chalk.italic.cyanBright("What's your name?"));
console.log(chalk.bold.bgMagentaBright('\nWelcone ' + name + " to Javascript Quiz!!\n"));
const playGame = readlineSync.question("Are You excited to play!!! (y/n)");

if (playGame.toLowerCase() === "y") {
    console.log(chalk.bold.yellow("You choose to play the quiz!!\nHere we go!!"));
    console.log(chalk.bold.bgCyan("\t\t\t\t\tQUIZ RULES\n"));
    console.log(chalk.yellow("There are total 6 questions\n1.For each correct answer you will get 5 marks\n2.For each wrong answer you will get -1 mark\n"))

    //List of quiz items
    const quiz = [{
            question: `Inside which HTML element do we put the JavaScript?
      A.<js>
      B.<script>
      C.<scripting>
      Enter Your Answer:`,
            answer: "B"
        },
        {
            question: `What is the correct JavaScript syntax to change the content of the HTML element below?
      <p id="demo">This is a demo.</p>
      A.document.querySelector("#demo").innerHTML = "Hello World!";
      B.document.querySelector(".demo").innerHTML = "Hello World!";
      C.document.querySelector("p").innerHTML = "Hello World!";
      Enter Your Answer:`,
            answer: "A"
        },
        {
            question: `Which event occurs when the user clicks on an HTML element?
      A.onmouseover
      B.onchange
      C.onclick
      Enter Your Answer:`,
            answer: "C"
        },
        {
            question: `Are === and == same in javascript?
      A.True
      B.False
      Enter Your Answer:`,
            answer: "B"
        },
        {
            question: `Is memory allocated to undefined variable in javascript?
      A.Yes
      B.No
      Enter Your Answer:`,
            answer: "A"
        },
        {
            question: `What is the correct way to hide a HTML element in javascript?
      <p id="demo">This is a demo.</p>
      A.document.querySelector("#demo").style.display('none');
      B.document.querySelector("#demo").style.display = 'none';
      C.document.querySelector("#demo").style.display = 'block';
      Enter Your Answer:`,
            answer: "B"
        }

    ];
    const highScore = [{
            name: "Rohan",
            score: 35
        },
        {
            name: "Ratna",
            score: 29
        }
    ]
    let score = 0;

    function playQuiz(question, answer) {
        const userAnswer = readlineSync.question(chalk.blue(question));
        if (userAnswer.toUpperCase() === answer) {
            console.log(chalk.green("Wow Thats correct!!"));
            score += 5;


        } else {
            console.log(chalk.redBright("Ahh Its Wrong"));
            score -= 1;
        }
        console.log("Current score : " + score);
        console.log("*******************************************\n")

    }

    for (var i = 0; i < quiz.length; i++) {
        playQuiz(quiz[i].question, quiz[i].answer);
    }

    var flag = 0;
    console.log("Final score : " + score);
    highScore.map(maxscore => {
        if (score > maxscore.score)
            flag = 1
    });
    if (flag) {
        console.log("Congratutions!!\nYou have scored a high score\n")
        console.log("Please share a screenshot of your score & I'll update the scoreboard");
    }

    console.log(chalk.bold.yellow("Thankyou " + name + " for participating"));

} else {
    console.log(chalk.bold.yellow("Sorry you quit the game\nThankyou " + name));
}