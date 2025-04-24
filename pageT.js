//Person A skriver sin kode her 
let total
function setup(){
    createCanvas(600,400)
    background(50)
    fill("white")
    total=getItem("Total");
    textSize(20)
    text(total+"kr",width/2,height-100)

    textSize(20)
    textAlign(CENTER, CENTER);
    text("køb billet",width/2,height/2)
    let buttonBack = createButton('go back');
    buttonBack.position(width/2-200, height/2-200);
    buttonBack.mousePressed(goHome);
    

   
 
}

function goHome(){
    window.location.href = "index.html";
}