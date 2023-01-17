console.log("helo")
let turnMusic = new Audio("turnMusic.mp3");
let winMusic = new Audio("winMusic.mp3");
let turn = "X";
let gameOver = false;
//function to change turn
const changeTurn =() =>{
     return turn === "X"? "0": "X";
}
//function to check win
const checkWin =() =>{
let  boxText = document.getElementsByClassName("text");
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
]
win.forEach(e=>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
        document.querySelector(".info").innerText = boxText[e[0]].innerText + " won";
        gameOver = true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "220px";
        winMusic.play();
    }
    
})
}
// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector(".text");
    element.addEventListener("click", ()=>{
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameOver){
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
            }
        }
    })
})
// reset
let reset =document.getElementById("reset");
reset.addEventListener("click", () =>{
     boxText = document.querySelectorAll(".text");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver =false;
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    winMusic.paused();
});