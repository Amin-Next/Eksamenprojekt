function aminSetup(){
   
}
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
    text("Du valgte: " + valgtBiograf, width / 2, 100);
    drawTilbageKnap();
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
    if (mouseX > 20 && mouseX < 120 && mouseY > 20 && mouseY < 60) {
      visForside = true;
    }
  }
}

function overKnap(y) {
  return mouseX > width / 2 - 75 && mouseX < width / 2 + 75 &&
         mouseY > y && mouseY < y + 40;
}

