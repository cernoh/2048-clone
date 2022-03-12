import Grid from "./Grid.js"
import Tile from "./Tile.js"

const gameBoard = document.getElementById("game-board")

const grid = new Grid(gameBoard)

grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)

function setupInput() {
    window.addEventListener("keydown", handleInput, {once: true})
}

function handleInput(e) {
    switch(e.key){
        case "ArrowUp":
            moveUp()
        case "ArrowDown":
            moveDown()
        case "ArrowLeft":
            moveLeft()
        case "ArrowRight":
            moveRight()
    }
}