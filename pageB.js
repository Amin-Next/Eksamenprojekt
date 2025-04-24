//Person B skriver sin kode her 
function setup(){
    createCanvas(400,400)
    textSize(20)
    textAlign(CENTER, CENTER);
    text("Page B",width/2,height/2)
    let buttonBack = createButton('go back');
    buttonBack.position(width/2-200, height/2-200);
    buttonBack.mousePressed(goHome);

    //Udkommenterer de filer som andre arbejder på,
    //hvis de ikke virker endnu.    
    includeFileX();
    includeFileY();  
}

function goHome(){
    window.location.href = "index.html";
}