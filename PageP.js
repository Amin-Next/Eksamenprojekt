let recta = {
  x: 0,
  y: 250,
  w: 50,
  h: 50,
  visable: true,
  selected: false,
  c: undefined
};

let rectArr, num= 4, row= 4;

function number(recta, num) {
  let list = [];

  for (let r=0; r< row; r++) {
  for (let i = 0; i < num; i++)   {
      list.push({
          x: recta.x+i*50,
          y: recta.y+r*50-50,
          w: recta.w,
          h: recta.h,
          visable: recta.visable,
          selected: recta.selected,
          c: color("darkblue")
              });
      }
  }  
return list;
}

function setup(){
  textSize(20)
  textAlign(CENTER, CENTER);
  fill("white");
  text("pladser",width/2,height/2)
  let buttonBack = createButton('go back');
  buttonBack.position(width/2-width*2/8, height/2);
  buttonBack.mousePressed(goHome); 
  includeFileX();
  includeFileY();  
  createCanvas(400,400);

  strokeWeight(1);
  rectArr= number(recta,num);
  
  for (let i=rectArr.length/8+10; i<rectArr.length; i++){
      
    rectArr[i].c=color(100,40,10)
  }
  for (let i=rectArr.length/2-8; i<rectArr.length; i++){
      
      rectArr[i].c=color("darkblue")   
  }
}

function draw() {
  background("black");
  showrectangle(rectArr);
  textSize(25)
  textAlign(CENTER, CENTER);
  fill("white");
  let seatNum = seatSelected()
  let seatPrice=Pris()
  text(`Pladser ${seatNum},  ${seatPrice}kr`,width/2,height-350)
}  

function showrectangle(list){
  for (let i=0; i<list.length; i++)   {
    fill(list[i].c)
    if(list[i].visable==true){
          rect(list[i].x, list[i].y, list[i].w, list[i].h);
    }
     
  }   
}

function seatSelected(){
  let number=0;
  for (let i=0; i<rectArr.length; i++)  {
    if (rectArr[i].selected){
      number++;
    }

  }
  return number;

}
function Pris(){
  let pris = 120;
  let total = 0;
  for (let i = 0; i < rectArr.length; i++) {
    if (rectArr[i].selected) {
      total += pris;
    }
  }
  console.log(total); 
  return total;
}

function mousePressed() {
  for (let i = rectArr.length - 1; i >= 0; i--)   {
     if  (
       mouseX > rectArr[i].x &&
       mouseX < rectArr[i].x + rectArr[i].w &&
       mouseY > rectArr[i].y &&
       mouseY < rectArr[i].y + rectArr[i].h
       )   {
    if (
      rectArr[i].selected === false
    ) {
      rectArr[i].c = color("Darkgreen");
      rectArr[i].selected = true;
    } else {
      rectArr[i].c = color("darkblue");
      rectArr[i].selected = false;
    }
    Pris();
   break;
 }
}

}
function goHome(){
  window.location.href = "index.html";
window.location.href = "index.html";
}