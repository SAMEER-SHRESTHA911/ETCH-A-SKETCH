const blackButton = document.getElementById("blackButton");
const randomButton = document.getElementById("randomButton");
const eraseButton = document.getElementById("eraseButton");
const resetButton = document.getElementById("resetButton");
let btnContainer = document.getElementsByClassName("buttons");

function renderSquare()
{
        let board = document.querySelector(".board");
        board.style.gridTemplateColumns = "repeat(16, 1fr)";
        board.style.gridTemplateRows = "repeat(16, 1fr)";
        for(let i = 0; i<256 ; i++)
        {
            let square = document.createElement("div");
            square.style.backgroundColor = "white";
            board.appendChild(square).classList.add('box');
        }
        
}
renderSquare();

function blackColor()
{
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover',(e) =>
    {
        box.style.backgroundColor = 'black';
    }))
}

function randomColor()
{
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover',(e) =>
    {
        let Rnum = Math.floor(Math.random()*256).toString(16) +  Math.floor(Math.random()*256).toString(16) + Math.floor(Math.random()*256).toString(16);
        box.style.backgroundColor = `#${Rnum}`; 
    }))
}
function eraseColor()
{
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.addEventListener('mouseover',(e) =>
    {
        box.style.backgroundColor = 'white';
    }))
}
function resetColor()
{
    const squares = document.querySelectorAll('.box');
    squares.forEach((square => square.style.backgroundColor = 'white'));
}


blackButton.addEventListener('click',(e) => {
    blackColor();
});

randomButton.addEventListener('click',(e) => {
    randomColor();
});

eraseButton.addEventListener('click',(e) => {
    eraseColor();
});

resetButton.addEventListener('click',(e) => {
    resetColor();
}
);

