//Person A skriver sin kode her 
let Total;
let seat
function setup(){
    createCanvas(600,400);
    background(50);
    fill("white");
    Total=getItem("Total");
    textSize(20)
    text(Total+"kr",width/2,height-100);
    
    textSize(20);
    textAlign(CENTER, CENTER);
    text("køb billet",width/2,height/2)
    let buttonBack = createButton('go back');
    buttonBack.position(7,7, 7,7);
    buttonBack.mousePressed(goHome);
    

   
 
}

function goHome(){
    window.location.href = "pageP.html";
}