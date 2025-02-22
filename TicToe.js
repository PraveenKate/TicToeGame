const boxes = document.querySelectorAll(".box")

let turnO = true

const winner = document.querySelector("p")

const newGame = document.querySelector(".newGame")

const resetGame = document.querySelector(".resetGame")

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const clickEvent = (e) => {
    if (e.target.innerText == "") {
        if (turnO) {
            e.target.innerText = "O"
            turnO = !turnO
        }
        else {
            e.target.innerText = "X"
            turnO = !turnO
        }
    }

    for (pattern of patterns) {
        val1 = boxes[pattern[0]].innerText
        val2 = boxes[pattern[1]].innerText
        val3 = boxes[pattern[2]].innerText
        if (val1 != "" && val2 != "" && val3 != "" && val1 === val2 && val2 === val3) {
            // alert(`Congratualtions!!! ${val1}`)
            // console.log(val1)
            winner.innerText = `Congratulations..! Winner is ${val1}`
            disableAll()
            newGame.classList.remove("hideNewGame")
            resetGame.classList.add("hideResetGame")
        }
    }
    filledBoxes = true
    for (i in boxes) {
        if (boxes[i].innerText == "") {
            filledBoxes = false
            break;
        }
    }

    if (filledBoxes) {
        winner.innerText = `Try Again..!`
        resetGame.classList.remove("hideNewGame")
    }

}

const disableAll = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"
        box.style.opacity = "0.9"
    })
}

boxes.forEach((box) => {
    box.addEventListener("click", clickEvent)
})

const newGameEvent = () => {
    newGame.classList.add("hideNewGame")
    winner.innerText = ""
    resetEvent()
    resetGame.classList.remove("hideResetGame")
}

const resetEvent = () => {
    boxes.forEach(box => {
        box.innerText = ""
        box.style.pointerEvents = ""
        box.style.opacity = "1"
    })
    winner.innerText = ``
}

newGame.addEventListener("click", newGameEvent)
resetGame.addEventListener("click", resetEvent)