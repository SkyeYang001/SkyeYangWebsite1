const ball = document.createElement('div')
document.body.appendChild(ball)
// creates a div
const padelLeft = document.createElement('div')
document.body.appendChild(padelLeft)
const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth
// The computer's aspect ratio height and width
let ballSpeed = 5
let ballXPosition = windowWidth / 2 - ballRadius
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1
let padelLeftWidth = 20
let padelLeftHeight = 200

createBall()
createPadel()

setInterval(moveBall, 10)

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
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius) {
        ballXDirection = ballXDirection * -1
    }

    ballYPosition = ballXPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius) {
        ballYPosition = ballYDirection * -1
    }
}

function createPadel() {
    padelLeft.style.height = `${padelLeftHeight}px`
    padelLeft.style.width = `${padelLeftWidth}px`
    padelLeft.style.backgroundColor = "Red"
    padelLeft.style.position = "absolute"
    padelLeft.style.top = `${(windowHeight - padelLeftHeight)/2}px`
    padelLeft.style.left = "50px"
}

document.addEventListener('keyup', (event) => {
    
})
