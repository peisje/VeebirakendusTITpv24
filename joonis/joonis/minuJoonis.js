function kustuta(){
    const puhi=document.getElementById("puhi");
    if(puhi.getContext){
        let p = puhi.getContext("2d");
        p.clearRect(0, 0, 400,300);
    }
}
//trava
function rohi() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        p.fillStyle = "#67CD63FC";
        p.fillRect(0, 263, 400, 37);
    }
}
//dom
function maja(){
    const puhi=document.getElementById("puhi");
    if(puhi.getContext) {
        let p = puhi.getContext("2d");
        p.fillStyle = "rosybrown";
        p.fillRect(100, 120, 120, 150);

//krisa
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(160, 50);
        p.lineTo(80,120);
        p.lineTo(240,120);
        p.closePath();
        p.strokeStyle="grey";
        p.stroke(); //ümberjoo
        p.fillStyle = "rosybrown";
        p.fill();

//dver
        p.fillStyle = "saddlebrown";
        p.fillRect(145, 200, 30, 70);

        //aken kv
        p.fillStyle = "yellow";
        p.fillRect(110, 140, 30, 30);
        p.fillRect(180, 140, 30, 30);

        //aken
        p.beginPath();
        p.arc(160, 100, 20, 0, 2*Math.PI,true)
        p.strokeStyle="saddlebrown";
        p.stroke(); //ümberjoon
        p.fillStyle="yellow";
        p.fill();


    }

}
//paike
function paike() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        //paike

        p.beginPath();
        p.arc(330, 50, 35,0, 2*Math.PI,true)
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoon
        p.fillStyle="#f1c926";
        p.fill();

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(280, 40);
        p.lineTo(240,40);
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(290, 60);
        p.lineTo(250,70);
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(300, 80);
        p.lineTo(260,100);
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(315, 90);
        p.lineTo(290,130);
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(335, 90);
        p.lineTo(325,130);
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo
    }

}
function garaaz() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        p.fillStyle = "rosybrown";
        p.fillRect(260, 160, 100, 110);

        //krisa garaza
        p.beginPath();
        p.moveTo(310, 120);
        p.lineTo(240, 160);
        p.lineTo(380, 160);
        p.closePath();
        p.fillStyle = "saddlebrown";
        p.fill();
        p.strokeStyle = "grey";
        p.lineWidth = 4;
        p.stroke();
        //vororta
        p.fillStyle = "saddlebrown";
        p.fillRect(275, 190, 70, 70);
        p.strokeStyle = "";
        p.strokeRect(275, 190, 70, 70);

    }
}
function tee() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        p.strokeStyle = "gray";
        p.lineWidth = 3;
        p.beginPath();
        p.moveTo(160, 270);
        p.lineTo(130, 300);
        p.lineTo(190, 300);
        p.lineTo(160, 270);
        p.stroke();
        p.fillStyle = "gray";
        p.fill();

        p.beginPath();
        p.moveTo(310, 270);
        p.lineTo(250, 300);
        p.lineTo(370, 300);
        p.lineTo(310, 270);
        p.stroke();
        p.fillStyle = "gray";
        p.fill();
    }
}
function tara() {
    const puhi = document.getElementById("puhi");
    if (puhi.getContext) {
        let p = puhi.getContext("2d");
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(295, 215);
        p.lineTo(295,275);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(321, 215);
        p.lineTo(321,275);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(345, 215);
        p.lineTo(346,275);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(376, 215);
        p.lineTo(376,275);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(240, 233);
        p.lineTo(376,233);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo
        p.beginPath();
        p.lineWidth = 6;
        p.moveTo(240, 246);
        p.lineTo(376,246);
        p.strokeStyle="#50291d";
        p.stroke(); //ümberjoo


    }
}
