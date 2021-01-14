

let rulesBtn = document.getElementById('rules');
let modal = document.getElementById("modal");

//to open "rules" modal
rulesBtn.addEventListener('click', () => {
    modal.style.display = 'block';
})

//to close "rules" modal
let closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.addEventListener("click", (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
});


let paper = document.getElementsByClassName('paper')[0];
let rock = document.getElementsByClassName('rock')[0];
let scissors = document.getElementsByClassName('scissors')[0];
let newGameBtn = document.getElementsByClassName("new-game")[0];
let titles = document.getElementsByClassName("titles")[0];
let triangleImg = document.getElementsByClassName("triangle-box")[0];
let gameContainer = document.getElementsByClassName("game-container")[0];
let score = 0;

function playGame(choice, e){
    let cpuChoice = cpuChooses();
    titles.style.display = 'block';
    triangleImg.style.display = 'none';
    let choiceBlock = document.getElementsByClassName('choices')[0];
    gameContainer.classList.add('wideContainer');
    newGameBtn.style.display = 'block';
 
    //first checks if elements are not already used for a game - prevents clicking again on the same element twice
    if(!e.classList.contains('playersChoice') && !e.classList.contains('cpuChoice')){
         if (cpuChoice == "rock" && choice == "scissors") {
           scissors.classList.add("playersChoice");
           rock.classList.add("cpuChoice", "winner");
           paper.style.display = "none";
           score = -1;
         }

         if (cpuChoice == "rock" && choice == "paper") {
           rock.classList.add("cpuChoice");
           paper.classList.add("playersChoice", "winner");
           scissors.style.display = "none";
           score = 1;
         }

         if (cpuChoice == "rock" && choice == "rock") {
           let cpuRock = document.createElement("div");
           let rockImg = document.createElement("img");
           rockImg.src = "./images/icon-rock.svg";
           cpuRock.classList.add("rock");
           cpuRock.appendChild(rockImg);
           choiceBlock.appendChild(cpuRock);
           cpuRock.classList.add("cpuChoice");
           rock.classList.add("playersChoice");
           paper.style.display = "none";
           scissors.style.display = "none";
           score = 0;
         }

         if (cpuChoice == "scissors" && choice == "paper") {
           scissors.classList.add("cpuChoice");
           paper.classList.add("playersChoice", "winner");
           rock.style.display = "none";
           score = -1;
         }
         if (cpuChoice == "scissors" && choice == "rock") {
           scissors.classList.add("cpuChoice");
           rock.classList.add("playersChoice", "winner");
           paper.style.display = "none";
           score = 1;
         }

         if (cpuChoice == "scissors" && choice == "scissors") {
           let cpuScissors = document.createElement("div");
           scissorsImg = document.createElement("img");
           scissorsImg.src = "./images/icon-scissors.svg";
           cpuScissors.classList.add("scissors");
           cpuScissors.appendChild(scissorsImg);
           choiceBlock.appendChild(cpuScissors);
           cpuScissors.classList.add("cpuChoice");
           scissors.classList.add("playersChoice");
           paper.style.display = "none";
           rock.style.display = "none";
           score = 0;
         }

         if (cpuChoice == "paper" && choice == "rock") {
           paper.classList.add("cpuChoice", "winner");
           rock.classList.add("playersChoice");
           scissors.style.display = "none";
           score = -1;
         }

         if (cpuChoice == "paper" && choice == "scissors") {
           paper.classList.add("cpuChoice");
           scissors.classList.add("playersChoice", "winner");
           rock.style.display = "none";
           score = 1;
         }

         if (cpuChoice == "paper" && choice == "paper") {
           paper.classList.add("playersChoice");
           let cpuPaper = document.createElement("div");
           paperImg = document.createElement("img");
           paperImg.src = "./images/icon-paper.svg";
           cpuPaper.classList.add("paper");
           cpuPaper.appendChild(paperImg);
           choiceBlock.appendChild(cpuPaper);
           cpuPaper.classList.add("cpuChoice");
           paper.classList.add("playersChoice");
           rock.style.display = "none";
           scissors.style.display = "none";
           score = 0;
         }
    }
   
}

paper.addEventListener("click", (e) => {
    playGame("paper", e.currentTarget);
});

rock.addEventListener("click", (e) => {
    playGame("rock", e.currentTarget);
});

scissors.addEventListener("click", (e) => {
    playGame("scissors", e.currentTarget);
});


function cpuChooses(){
    let randomChoice = Math.floor(Math.random()*3);
    let options = ['rock', 'paper', 'scissors'];
    return options[randomChoice];
}

function playAgain(){
    //resets all classes added after game is played
    rock.classList.remove('cpuChoice');
    paper.classList.remove('cpuChoice');
    scissors.classList.remove('cpuChoice');
    rock.classList.remove('playersChoice');
    paper.classList.remove('playersChoice');
    scissors.classList.remove('playersChoice');
    rock.style.display = 'block';
    paper.style.display = 'block';
    scissors.style.display = 'block';
    newGameBtn.style.display = 'none';
    titles.style.display = "none";
    triangleImg.style.display = "block";

    let paperDivs = document.getElementsByClassName("paper");
    let rockDivs = document.getElementsByClassName("rock");
    let scissorsDivs = document.getElementsByClassName("scissors");
    let collection = [paperDivs, rockDivs, scissorsDivs];

    //removes duplicate element in case of two same choices (i.e. rock && rock)
    collection.forEach(list => {
      if(list.length == 2){
        list[1].remove();
      }
    });
    
}

newGameBtn.addEventListener('click', () => {
    playAgain();
})