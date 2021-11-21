
function headingOne() {
    var functionality = document.getElementById('changeColorOne');
    functionality.style.color = prompt("text name");
    functionality.style.backgroundColor = prompt("Background color");
}

function headingTwo() {
    var functionality = document.getElementById('changeColorTwo');
    functionality.style.back = prompt('text name');
    functionality.style.backgroundColor = prompt("Background color");
}



function setImageVisible(img1, visible) {
    var img = document.getElementById('img1');
    img.style.visibility = (visible ? 'visible' : 'hidden');
}


function big() {
    var bigger = document.getElementById('img1');
    bigger.style.width = "30%";
}

function small() {
    var bigger = document.getElementById('img1');
    bigger.style.width = "10%";
}

function reset() {
    var resetImg = document.getElementById('img1');
    resetImg.style.width = "250px";
}

function onBulb() {
    var functionality = document.getElementById('onMouseOVer');
    functionality.src = './images/on.jpg';
}

function offBulb() {
    var functionality = document.getElementById('onMouseOVer');
    functionality.src = './images/off.jpg';
}

function changeColor() {
    var colorChange = document.getElementById('para1');
    colorChange.style.color = prompt('Change para1 color');
    var secondPara = document.getElementById('para2');
    secondPara.style.color = prompt('Change para2 color');
    var thirdPara = document.getElementById('para3');
    thirdPara.style.color = prompt('Change para3 color');
    var fourthPara = document.getElementById('para4');
    fourthPara.style.color = prompt('Change para4 color');
}