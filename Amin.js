function aminSetup(){
   
}

function aminDraw(){  
     let cinemas = ["CinemaxX", "Nordisk Film", "Imperial"];
    let buttons = [];
    
    function setup() {
      createCanvas(600, 400);
      textAlign(CENTER, CENTER);
      textSize(24);
      
      for (let i = 0; i < cinemas.length; i++) {
        let btn = createButton(cinemas[i]);
        btn.position(width / 2 - 50, 100 + i * 60);
        btn.size(100, 40);
        btn.mousePressed(() => selectCinema(cinemas[i]));
        buttons.push(btn);
      }
    }
    
    function draw() {
      background(30);
      fill(255);
      text("Vælg en biograf", width / 2, 50);
    }
    
    function selectCinema(name) {
      alert("Du har valgt: " + name);
      // Her kan du f.eks. skifte til en ny side eller opdatere indhold
    } 
}