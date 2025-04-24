function changeY(){
    background("blue");
}

function includeFileY(){
    let buttonY = createButton('fileY');
    buttonY.position(width/2+width/8, height/2+height/6);
    buttonY.mousePressed(changeY);
}

