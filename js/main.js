let music = new Audio("music.mp3");
let audioturn = new Audio("turn.mp3");
let gameOver = new Audio("win.mp3");
let turn = 'X';
let isgameover = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";

}


// function to check the winner
const checkWin = () => {
    let boxtext = document.getElementsByClassName('box_text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            document.querySelector('.info').style = "color: #00ff00; font-size: 2rem; font-weight: bold; text-shadow: 0 0 10px #00ff00";
            isgameover = true;
            gameOver.play();
        }
    })

}

// function to change the box text and color
let boxs = document.getElementsByClassName('box');
Array.from(boxs).forEach(element => {
    let boxText = element.querySelector('.box_text');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            audioturn.play();
            turn = changeTurn();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })  
})


// reset the game
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.box_text');
    Array.from(boxText).forEach(element => {
        element.innerText = '';
    })
    turn = 'X';
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    isgameover = false;
    document.querySelector('.info').style = "color: rgb(164, 67, 255)"
})








// music.play();