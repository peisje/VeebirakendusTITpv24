function ring(){
    //x,y - keskpunkt, R -raadius
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //tahvli nimi määramine
        t.beginPath();
        t.arc(50,50,30,0, 2*Math.PI, true); //x,y keskpunkt
        t.strokeStyle="saddlebrown";
        t.stroke(); //ümberjoo
        t.fillStyle="rosybrown";
        t.fill();
    }
}
function ring2(){
    //x,y - keskpunkt, R -raadius
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //tahvli nimi määramine
        t.beginPath();
        t.arc(200,50,30,0, 2*Math.PI, true); //x,y keskpunkt
        t.strokeStyle="saddlebrown";
        t.stroke(); //ümberjoo
        t.fillStyle="rosybrown";
        t.fill();
    }
}
function kustuta1(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.clearRect(0, 0, 400,400);
    }
}
//ristkülik
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t = tahvel.getContext("2d");
        t.fillStyle="saddlebrown";
        t.fillRect(50, 100, 100, 120);
    }
}
//joon
function joon(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //tahvli nimi määramine
        t.beginPath();
        t.lineWidth=5;
        t.moveTo(20, 85); //alguspunkt
        t.lineTo(250, 10); //lõpppunkt
        t.strokeStyle="saddlebrown";
        t.stroke(); //ümberjoo
    }
}
function kolmnurk(){
    const tahvel=document.getElementById("tahvel");
    if(tahvel.getContext){
        let t=tahvel.getContext("2d"); //tahvli nimi määramine
        t.beginPath();
        t.lineWidth=5;
        t.moveTo(50, 60); //alguspunkt
        t.lineTo(75, 130);
        t.lineTo(200, 100);
        t.lineTo(50, 60); //lõpppunkt
        t.strokeStyle="saddlebrown";
        t.stroke(); //ümberjoo
    }
}
function eesti(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0, 0, 330, 70);
        l.fillStyle="black";
        l.fillRect(0, 70, 330, 140);
        l.fillStyle="white";
        l.fillRect(0, 140, 330, 210);
    }
}
function soome(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="white";
        l.fillRect(0, 0, 330, 210);
        l.fillStyle="#133a72";
        l.fillRect(0, 90, 330, 30);
        l.fillRect(120, 0, 30, 210);
    }
}
function norra(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="red";
        l.fillRect(0, 0, 330, 210);
        l.fillStyle="white";
        l.fillRect(0, 85, 330, 40);
        l.fillRect(100, 0, 40, 210);
        l.fillStyle="blue";
        l.fillRect(0, 95, 330, 20);
        l.fillRect(110, 0, 20, 210);
    }
}
function costarica(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="blue";
        l.fillRect(0, 0, 330, 42);
        l.fillStyle="white";
        l.fillRect(0, 42, 330, 21);
        l.fillStyle="#CE1126";
        l.fillRect(0, 63, 330, 84);
        l.fillStyle="white";
        l.fillRect(0, 147, 330, 21);
        l.fillStyle="blue";
        l.fillRect(0, 168, 330, 42);
        let img = new Image();
        img.src="costarica.png"
        img.onload = function () {
            l.drawImage(img, 50, 70, 60, 60);
        }
    }
}
function jaapan(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="white";
        l.fillRect(0, 0, 330, 210);
        l.fillStyle="red";
        l.beginPath();
        l.arc(165, 105, 63, 0, 2*Math.PI,true);
        l.fill();
    }
}

function cyprus(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle="white";
        l.fillRect(0, 0, 330, 210);
        let img = new Image();
        img.src="cyprus.png"
        img.onload = function () {
            l.drawImage(img, 110, 50, 120, 120);
        }
    }
}
function italia() {
    const lipp = document.getElementById("lipp");
    if (lipp.getContext) {
        let l = lipp.getContext("2d");
        l.fillStyle = "#009933";
        l.fillRect(0, 0, 110, 210);
        l.fillStyle = "white";
        l.fillRect(110, 0, 110, 210);
        l.fillStyle = "red";
        l.fillRect(220,0, 110, 210);

    }
}
function kustuta(){
    const lipp=document.getElementById("lipp");
    if(lipp.getContext){
        let l = lipp.getContext("2d");
        l.clearRect(0, 0, 400,400);
    }
}