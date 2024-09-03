
var aztPosition = 200;
var nshPosition = 300;
var forward = false;
var backward = false;
var azt = document.getElementById("azt");
var nsh = document.getElementById("nsh");

function moveAzt(type) {
  if (type === "forward") {
    aztPosition += 10;
    azt.style.left = aztPosition + "px";
  }

  if (type === "backward") {
    aztPosition -= 10;
    azt.style.left = aztPosition + "px";
  }
}

function moveNsh(direction) {
  if (direction === "forward") {
    nshPosition -= 10;
  } else if (direction === "backward") {
    nshPosition += 10;
  }
  nsh.style.right = nshPosition + "px";
}

function handleKeyDown(event) {
  switch (event.key) {
    case "d":
    case "D":
      moveAzt("forward");
      break;
    case "a":
    case "A":
      moveAzt("backward");
      break;
    case "ArrowRight":
      moveNsh("forward");
      break;
    case "ArrowLeft":
      moveNsh("backward");
      break;
  }
}

function moveAzt(direction) {
  if (
    direction === "forward" &&
    aztPosition < window.innerWidth - azt.offsetWidth
  ) {
    aztPosition += 10;
  } else if (direction === "backward" && aztPosition > 0) {
    aztPosition -= 10;
  }
  azt.style.left = aztPosition + "px";
}

function moveNsh(direction) {
  if (direction === "forward" && nshPosition > 0) {
    nshPosition -= 10; // Decrease right position to move the player to the left
  } else if (
    direction === "backward" &&
    nshPosition < window.innerWidth - nsh.offsetWidth
  ) {
    nshPosition += 10; // Increase right position to move the player to the right
  }
  nsh.style.right = nshPosition + "px";
}

window.addEventListener("keydown", handleKeyDown);
