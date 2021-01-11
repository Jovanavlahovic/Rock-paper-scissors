

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
let options = [paper, rock, scissors];

function playGame(choice){
    let cpuChoice = cpuChooses();
    let titles = document.getElementsByClassName('titles')[0];
    titles.style.display = 'block';

    if(cpuChoice == 'rock' && choice == 'scissors'){
        scissors.classList.add('playersChoice');
        rock.classList.add('cpuChoice', 'winner');
    }

    else if(cpuChoice == 'rock' && choice == 'paper'){
        rock.classList.add('cpuChoice');
        paper.classList.add('playersChoice', 'winner');
    }

    else if(cpuChooses == 'rock' && choice == 'rock'){
        rock.classList.add('cpuChoice');
        rock.classList.add('playersChoice');
    }

    else if(cpuChoice == 'scissors' && choice == 'paper'){
        scissors.classList.add('cpuChoice');
        paper.classList.add('playersChoice')
    }

    else if(cpuChoice == 'scissors' && choice == 'scissors'){
        scissors.classList.add('cpuChoice');
        paper.classList.add('playersChoice')
    }


}


function cpuChooses(){
    let randomChoice = Math.floor(Math.random()*3)+1;
    let options = ['rock', 'paper', 'scissors'];

    return options[randomChoice];
}