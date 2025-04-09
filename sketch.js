function setup(){
    createCanvas(400,400);
    background(212);

    let buttonA = createButton('Big bio');
    buttonA.position(width/2-width*2/8-2, height/2);
    buttonA.mousePressed(changePageToA);

    let buttonB = createButton('Palads bio');
    buttonB.position(width/2+width/8-94, height/2);
    buttonB.mousePressed(changePageToB);

    let buttonC = createButton('Vue bio');
    buttonC.position(width/2+width/8-15, height/2);
    buttonC.mousePressed(changePageToB);

    let buttonD = createButton('Falkoner bio');
    buttonD.position(width/+50, height/2);
    buttonD.mousePressed(changePageToB);

    let buttonP = createButton('pladser');
    buttonP.position(width/2+30, height/2-50);
    buttonP.mousePressed(changePageToP);
}

function changePageToA(){
    window.location.href = "pageA.html";
}

function changePageToB(){
    window.location.href = "pageB.html";
}
function changePageToP(){
    window.location.href = "PageP.html";
}
