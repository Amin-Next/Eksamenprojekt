//Person A skriver sin kode her 
let Total;
let input_1;
let input_2;
let input_3;
let input_4
function setup(){
    createCanvas(600,400);
    background(50);
    stroke("black")
    strokeWeight(5);
    line(2, 60, 600, 60);
    fill("white");
    Total=getItem("Total");/*henter prisen af antallet af sæder man har valgt fra en anden side*/
    textSize(40)/*Ændre skrift størelsen  af den forekommende skrift*/
    text(Total+"kr",width/2+100,height-344);/*skriver prisen i et bestemt koordinat og skriver valuten af prisen ned*/
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Køb din billet til prisen",width/2-105,height-355)
    let buttonBack = createButton('Tilbage');
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
    text("Indtast din telefonnummer",width/2-178,height/2+35)
    input_4 = createInput('');
    input_4.position(width/2-50,height/2+55);
    text("Kreditkort oplysninger",width/2-160,height/2+60)
    fill("Darkgreen")
    rect(width/2-25,height/2+75,100,30)
    fill("white")
    strokeWeight(1)
    text("Godkendt",width/2+20,height/2+90,)
   

   
 
}


function goHome(){
    window.location.href = "pageP.html";
}