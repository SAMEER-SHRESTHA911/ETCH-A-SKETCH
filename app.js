const blackButton = document.getElementById("blackButton");
const radnomButton = document.getElementById("randomButton");
const eraseButton = document.getElementById("eraseButton");
const resetButton = document.getElementById("resetButton");


{
    console.log("black");
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
            square.style.backgroundColor = "#111161";
            board.insertAdjacentElement("beforeend",square);

        }
    }
}
renderSquare();
