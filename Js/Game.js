const str = ["Rock", "Paper", "Scissors"];
var n = str.length;
var playerSelect = document.querySelector('.playerSelect');
var computerSelect = document.querySelector('.computerSelect');
var player = document.querySelector('.playerScore2');
var computer = document.querySelector('.computerScore2');
var winnerList = document.querySelector('.winner-list');
var winnerName = document.querySelector('.winner-name');
var winner = document.querySelector('.winner');
var playerScore = 0;
var computerScore = 0;
player.innerHTML = playerScore;
computer.innerHTML = computerScore;

function playerSection(){
    var input = window.prompt("Enter a string: ");
    var output="";
    for(let i=0;i<input.length;i++){
        if(i==0){
            output+= input[i].toUpperCase();
        }
        else{
            output+= input[i].toLowerCase();
        }
    }
    console.log(`Player = ${output}`);
    return output;
}

function computerSection(){
    var random = Math.floor(Math.random()*n);
    var random_string = str[random];
    console.log(`Computer = ${random_string}`);
    return random_string;
}
// playerSection();
// computerSection();
var playerChoice = playerSection();
var computerChoice = computerSection();
playerSelect.innerHTML = playerChoice;
computerSelect.innerHTML = computerChoice;
if((playerChoice=="Rock" && computerChoice=="Scissors") || (playerChoice=="Paper" && computerChoice=="Rock") || (playerChoice=="Scissors" && computerChoice=="Paper")){
    console.log(`You won! ${playerChoice} beats ${computerChoice}`);
}
else if(playerChoice==computerChoice){
    console.log("This game is tied");
}
else{
    console.log(`You lost! ${playerChoice} loses to ${computerChoice}`);
}

for(let j=0;j<5;j++){
    var playerChoice = playerSection();
    var computerChoice = computerSection();
    playerSelect.innerHTML = playerChoice;
    computerSelect.innerHTML = computerChoice;
    if((playerChoice=="Rock" && computerChoice=="Scissors") || (playerChoice=="Paper" && computerChoice=="Rock") || (playerChoice=="Scissors" && computerChoice=="Paper")){
        playerScore++;
        console.log(`You won! ${playerChoice} beats ${computerChoice}`);
    }
    else if(playerChoice==computerChoice){
        console.log("This game is tied");
    }
    else{
        computerScore++;
        console.log(`You lost! ${playerChoice} loses to ${computerChoice}`);
    }
    player.innerHTML = playerScore;
    computer.innerHTML = computerScore;

}

winnerList.style.display = "block";
winnerName.style.display = "block";

if(playerScore>computerScore){
    winnerName.innerHTML = "Player Wins";
}
else if(playerScore<computerScore){
    winnerName.innerHTML = "Computer Wins";
}
else{
    winnerName.innerHTML = "No one";
}