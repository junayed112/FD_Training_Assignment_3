const str = ["Rock", "Paper", "Scissors"];
let n = str.length;
const playerSelect = document.querySelector('.playerSelect');
const computerSelect = document.querySelector('.computerSelect');
const player = document.querySelector('.playerScore2');
const computer = document.querySelector('.computerScore2');
const winnerList = document.querySelector('.winner-list');
const winnerName = document.querySelector('.winner-name');
const winner = document.querySelector('.winner');
const startButton = document.querySelector('.click');
const buttons = document.querySelectorAll('.choice');
let playerScore = 0;
let computerScore = 0;
player.innerHTML = playerScore;
computer.innerHTML = computerScore;

// document.querySelector('.option').classList.add('hidden');

function Intro(){
    // document.querySelectorAll('.choice').classList.add('hidden');
    alert(`Welcome to the Game (Rock Paper Scissors)` );
}

function playerSection(Choice){
    let input = Choice;
    // let output="";
    // for(let i=0;i<input.length;i++){
    //     if(i==0){
    //         output+= input[i].toUpperCase();
    //     }
    //     else{
    //         output+= input[i].toLowerCase();
    //     }
    // }
    // console.log(`Player = ${input}`);
    return input;
}

function computerSection(){
    let random = Math.floor(Math.random()*n);
    let random_string = str[random];
    // console.log(`Computer = ${random_string}`);
    return random_string;
}

function start(){
    startButton.addEventListener('click', () =>{
        document.querySelector('.click').classList.add('hidden');
        document.querySelector('.play h2').innerHTML = "What's your Choice?";
        document.querySelector('.option').style.display = "flex";
    })
}
function stop(){
    if(playerScore == 5 || computerScore == 5){
        winnerList.style.display = "block";
        winnerName.style.display = "block";
        winnerName.innerHTML = (playerScore == 5 ? "Player Wins" : "Computer Wins" );
        document.querySelector('.option').style.display = "none";
        document.querySelector('.play h2').style.display = 'none';
    }
}

function play(){
    for(item of buttons){
        item.addEventListener('click', (e)=>{
            buttonText = e.target.innerHTML;
            let playerChoice = playerSection(buttonText);
            let computerChoice = computerSection();
            playerSelect.innerHTML = playerChoice;
            computerSelect.innerHTML = computerChoice;
            if((playerChoice=="Rock" && computerChoice=="Scissors") || (playerChoice=="Paper" && computerChoice=="Rock") || (playerChoice=="Scissors" && computerChoice=="Paper")){
                playerScore++;
                document.querySelector('.play h2').innerHTML = `You won! ${playerChoice} beats ${computerChoice}`;
                // alert(`You won! ${playerChoice} beats ${computerChoice}`);
                // console.log(`You won! ${playerChoice} beats ${computerChoice}`);
            }
            else if(playerChoice==computerChoice){
                // alert("This game is tied");
                document.querySelector('.play h2').innerHTML = "This game is tied";
                // console.log("This game is tied");
            }
            else{
                computerScore++;
                document.querySelector('.play h2').innerHTML = `You lost! ${playerChoice} loses to ${computerChoice}`;
                // alert(`You lost! ${playerChoice} loses to ${computerChoice}`);
                // console.log(`You lost! ${playerChoice} loses to ${computerChoice}`);
            }
            player.innerHTML = playerScore;
            computer.innerHTML = computerScore;
            stop();
        })
    }
}

// if(playerScore>computerScore){
//     winnerName.innerHTML = "Player Wins";
// }
// else if(playerScore<computerScore){
//     winnerName.innerHTML = "Computer Wins";
// }
Intro();
start();
play();
