
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var rightPressed = false
var leftPressed = false
var key1 = false
var key2 = false
var persX = 30
var persY = 30
var treeX = 10
var treeY = 40
var dx = 0
var dy = 0
var newX = 0
var newY = 0

var x = 0


bg = new Image()
bg.src = "bg.png"

person = new Image()
person.src = "person.png"

tree = new Image()
tree.src = "tree1.png"

sprites = new Image()
sprites.src = "sprites.png"
sprites.onload = function() {
  spritesheet()
  requestAnimationFrame(spritesheet)
}


function spritesheet() {

  x = (x === 100? 0 : x + 48)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(sprites, x, 0, 48, 56, 100, 100, 47, 55)

}

// width 48
// height 56



document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

document.addEventListener("click", clickHandler, false)
document.addEventListener("mousemove", mouseHandler, false)


function mouseHandler(e) {
  mouseX = e.clientX
  mouseY = e.clientY


}


function clickHandler(e) {
  newX = e.clientX
  newY = e.clientY


}

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = true
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = true
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false
    }
    if(e.key == "Up" || e.key == "ArrowUp") {
        key1 = false
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        key2 = false
    }
}



function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawStaff(bg, 0, 0, 500, 500)
    drawStaff(person, persX, persY)
    drawStaff(tree, treeX, treeY)
    drawStaff(tree, treeX , treeY + 100)

function drawStaff(staff, staffX, staffY) {
    ctx.drawImage(staff, staffX, staffY)
}


}


function processing()
{


  /*
    if (rightPressed && persX + 30 < canvas.width)
        persX += dx
    if (leftPressed && persX > 0)
        persX -= dx
    if (key1 && persY  >  0)
        persY -= dy
    if (key2 && persY + 40 < canvas.height)
        persY += dy
//control keys
*/
/*
    if (persX < newX)
          persX++
    if (persY < newY)
          persY++
    if (persX > newX)
          persX--
    if (persY > newY)
          persY--
*/
//mouse up down

    if (persX < newX && persY < newY) {

      if (newX - persX < newY - persY) {
          dx = (newX - persX)/(newY - persY)
          dy = 1
      }
      if (newX - persX > newY - persY) {
          dx = 1
          dy = (newY - persY)/(newX - persX)
      }
      if (newX - persX == newY - persY) {
          dx = 1
          dy = 1
      }

      persX += dx
      persY += dy

    }


    if (persX < newX && persY > newY) {

      if (newX - persX < persY - newY) {
          dx = (newX - persX)/(persY - newY)
          dy = 1
      }
      if (newX - persX > persY - newY) {
          dx = 1
          dy = (persY - newY)/(newX - persX)
      }
      if (newX - persX == persY - newY) {
          dx = 1
          dy = 1
      }

      persX += dx
      persY -= dy

    }


    if (persX > newX && persY > newY) {

      if (persX - newX < persY - newY) {
          dx = (newX - persX)/(persY - newY)
          dy = 1
      }
      if (persX - newX > persY - newY) {
          dx = 1
          dy = (persY - newY)/(persX - newX)
      }
      if (persX - newX == persY - newY) {
          dx = 1
          dy = 1
      }

      persX -= dx
      persY -= dy

    }


    if (persX > newX && persY < newY) {

      if (persX - newX < newY - persY) {
          dx = (newX - persX)/(newY - persY)
          dy = 1
      }
      if (persX - newX > newY - persY) {
          dx = 1
          dy = (newY - persY)/(persX - newX)
      }
      if (persX - newX == newY - persY) {
          dx = 1
          dy = 1
      }

      persX -= dx
      persY += dy
    }
// click



}









setInterval(processing, 30)
setInterval(draw, 10)
