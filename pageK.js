//Person A skriver sin kode her 
let Total;
let input_1;
let input_2;
let input_3;
function setup(){
    createCanvas(600,400);
    background(50);
    stroke("black")
    strokeWeight(5);
    line(2, 60, 600, 60);
    fill("white");
    Total=getItem("Total");
    textSize(40)
    text(Total+"kr",width/2+100,height-344);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Køb din billet til prisen",width/2-105,height-355)
    let buttonBack = createButton('go back');
    buttonBack.position(7,7, 7,7);
    buttonBack.mousePressed(goHome);
    input_1 = createInput('');
    input_1.position(width/2-50,height/2-30);
    textSize(20)
    strokeWeight(2)
    text("Dit navn",width/2-100,height/2-25)
    input_2 = createInput('');
    input_2.position(width/2-50,height/2);
    text("Indtast din e-mail",width/2-140,height/2+5)
    input_3 = createInput('');
    input_3.position(width/2-50,height/2+30);
    text("Indtast din telefonnummer",width/2-175,height/2+35)
    fill("Darkgreen")
    rect(width/2-25,height/2+50,100,30)
    fill("white")
    strokeWeight(1)
    text("Godkendt",width/2+20,height/2+65,)
  
    

   
 
}


function goHome(){
    window.location.href = "pageP.html";
}