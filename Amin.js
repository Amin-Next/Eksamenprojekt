let valgtBiograf = "";
let visForside = true;

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(50);
  fill(255);

  if (visForside) {
    text("Vælg en biograf", width / 2, 50);

    drawBiografKnap("CinemaxX", 100);
    drawBiografKnap("Nordisk Film", 170);
    drawBiografKnap("Imperial", 240);
  } else {
    text("Du valgte: " + valgtBiograf, width / 2, 60);
    drawTilbageKnap();
    drawBilletKnap();
  }
}

function drawBiografKnap(navn, y) {
  fill(100, 150, 255);
  rect(width / 2 - 75, y, 150, 40, 10);
  fill(0);
  text(navn, width / 2, y + 20);
}

function drawTilbageKnap() {
  fill(255, 100, 100);
  rect(20, 20, 100, 40, 10);
  fill(0);
  text("Tilbage", 70, 40);
}

function drawBilletKnap() {
  fill(100, 255, 100);
  rect(width / 2 - 75, 150, 150, 40, 10);
  fill(0);
  text("Billetter", width / 2, 170);
}

function mousePressed() {
  if (visForside) {
    if (overKnap(100)) {
      valgtBiograf = "CinemaxX";
      visForside = false;
    } else if (overKnap(170)) {
      valgtBiograf = "Nordisk Film";
      visForside = false;
    } else if (overKnap(240)) {
      valgtBiograf = "Imperial";
      visForside = false;
    }
  } else {
    // Tilbage-knap
    if (mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60) {
      visForside = true;
    }

    // Billet-knap (åbner ny side)
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
        mouseY > 150 && mouseY < 190) {
      window.location.href = "PageP.html";
    }
  }
}

function overKnap(y) {
  return mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
         mouseY > y && mouseY < y + 40;
}
