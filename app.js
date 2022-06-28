const blackButton = document.getElementById("blackButton");
const radnomButton = document.getElementById("randomButton");
const eraseButton = document.getElementById("eraseButton");
const resetButton = document.getElementById("resetButton");
const greyButton = document.getElementById("greyButton");
let btnContainer = document.getElementsByClassName("buttons");

function clearGrid()
{
    clearGrid();
    renderSquare();
}

function renderSquare()
{
        let board = document.querySelector(".board");
        board.style.gridTemplateColumns = "repeat(16, 1fr)";
        board.style.gridTemplateRows = "repeat(16, 1fr)";

    {
        for(let i = 0; i<256 ; i++)
        {
            let square = document.createElement("div");
            square.style.backgroundColor = "white";
            board.insertAdjacentElement("beforeend",square);
            board.appendChild("div").add.classList('square');
        }
    }
}
renderSquare();

function greyColor()
{
    const boxs = document.querySelectorAll('.square');
    greyButton.textContent = "Grey";
    greyButton.addEventListener("click",() =>
    {
        boxs.forEach(square => square.addEventListener("mouseover", () =>{
            let Rnum = Math.floor(Math.random()*255)
            square.style.backgroundColor = `rgb($(Rnum),$(Rnum),$(Rnum)) `;
        }));
    })
    btnContainer.appendChild(greyButton).classList.add('btn')
}
greyColor();
