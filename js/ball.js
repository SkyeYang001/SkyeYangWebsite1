const ball = document.createElement('div')
document.body.appendChild(ball)
// creates a div
const paddleLeft = document.createElement('div')
document.body.appendChild(paddleLeft)
const scoreboard = document.createElement('div')
document.body.appendChild(scoreboard)
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
// The computer's aspect ratio height and width
const ballRadius = 20
let ballSpeed = 5
let ballXPosition = windowWidth / 2 - ballRadius
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

let paddleLeftWidth = 10
let paddleLeftHeight = 100
let paddleLeftSpeed = 5
let paddleLeftXPosition = 70
let paddleLeftYPosition = (windowHeight - paddleLeftHeight) / 2

let scoreboardWidth = 30
let scoreboardHeight = 73
let scoreboardXPosition = 10
let scoreboardYPosition = 0

let score = 0 // display the score increase score by 1 everytime the ball hits the paddle
let level = 1 // display the level increase level by 1 everytime the score increase by 10 as the level increase increase the ball speed if the ball passes the paddle end game (ball stops/disappear) let the user know the game is over

createBall()
createpaddle()
createscoreBoard()

function createBall() {
    // adds ball
    ball.style.height = `${2*ballRadius}px`
    ball.style.width = `${2*ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "Blue"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`

    if (
        ballXPosition < 0 ||
        ballXPosition > windowWidth - 2 * ballRadius
    ) {
        ballXDirection = ballXDirection * -1
    }

    if (
        ballYPosition < 0 ||
        ballYPosition > windowHeight - 2 * ballRadius
    ) {
        ballYDirection = ballYDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition / 2 * ballRadius
    let ballLeft = ballXPosition
    let paddleLeftTop = paddleLeftYPosition
    let paddleLeftBottom = paddleLeftYPosition + paddleLeftHeight
    let paddleLeftRight = paddleLeftXPosition + paddleLeftWidth

    if (
        (ballBottom >= paddleLeftTop) &&
        (ballTop <= paddleLeftBottom) &&
        (ballLeft <= paddleLeftRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
    }
}

function createpaddle() {
    paddleLeft.style.height = `${paddleLeftHeight}px`
    paddleLeft.style.width = `${paddleLeftWidth}px`
    paddleLeft.style.backgroundColor = "Red"
    paddleLeft.style.position = "absolute"
    paddleLeft.style.top = `${paddleLeftYPosition}px`
    paddleLeft.style.left = `${paddleLeftXPosition}px`
}

wKey = false
sKey = false

document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
        console.log(wKey)
        // if (paddleLeftYPosition <= 0) {
        //     paddleLeftYPosition = 0
        // }
        // else {
        //     paddleLeftYPosition = paddleLeftYPosition - paddleLeftSpeed
        // }
    }
    if (event.key == 's') {
        sKey = true
        console.log(sKey)
        // if (paddleLeftYPosition >= windowHeight - paddleLeftHeight) {
        //     paddleLeftYPosition = windowHeight - paddleLeftHeight
        // }
        // else {
        //     paddleLeftYPosition = paddleLeftYPosition + paddleLeftSpeed
        // }
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
        console.log(wKey)
    }
    if (event.key == 's') {
        sKey = false
        console.log(sKey)
    }
})

function movePaddleLeft() {
    if (wKey == true && paddleLeftYPosition > 0) {
        paddleLeftYPosition = paddleLeftYPosition - paddleLeftSpeed

    }
    if (sKey == true && paddleLeftYPosition < windowHeight - paddleLeftHeight) {
        paddleLeftYPosition = paddleLeftYPosition + paddleLeftSpeed

    }
    paddleLeft.style.top = `${paddleLeftYPosition}px`
}

function createscoreBoard() {
        scoreboard.style.height = `${scoreboardHeight}px`
        scoreboard.style.width = `${scoreboardWidth}px`
        scoreboard.style.backgroundColor = "Green"
        scoreboard.style.position = "absolute"
        scoreboard.style.top = `${scoreboardYPosition}px`
        scoreboard.style.right = `${scoreboardXPosition}px`
}

function animate() {
    moveBall()
    movePaddleLeft()
    requestAnimationFrame(animate)
}

animate()
