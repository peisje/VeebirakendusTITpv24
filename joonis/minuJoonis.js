function kutsuta(){
    const pyhi=document.getElementById("pyhi");
    if(pyhi.getContext){
        let p = pyhi.getContext("2d");
        p.clearRect(0, 0, 400,300);
    }
}
//kv
function maja(){
    const pyhi=document.getElementById("pyhi");
    if(pyhi.getContext){
        let p = pyhi.getContext("2d");
        p.fillStyle="brown";
        p.fillRect(141, 114, 160, 150);

        //circcle
        function aken(){
        p.beginPath();
        p.arc(231,160,30,40,2*Math.PI, true);
        p.strokeStyle="saddlebrown";
        p.stroke();
        p.fillStyle="lightblue";
        p.fill();
        }

        //treug
        p.beginPath();
        p.lineWidth = "1"
        p.moveTo(141,112);
        p.lineTo(229,29);
        p.lineTo(309,112);
        p.lineTo(143,112)
        p.strokeStyle="saddlebrown";
        p.stroke();
        p.fillStyle="saddlebrown";
        p.fill();


        //luts
        p.beginPath();
        p.lineWidth=2;
        p.moveTo(116, 31); //alguspunkt
        p.lineTo(140, 10); //lõpppunkt
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth=2;
        p.moveTo(136, 61); //alguspunkt
        p.lineTo(177, 57); //lõpppunkt
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth=2;
        p.moveTo(77, 101); //alguspunkt
        p.lineTo(64, 139); //lõpppunkt
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth=2;
        p.moveTo(57, 75); //alguspunkt
        p.lineTo(23, 88); //lõpppunkt
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.lineWidth=2;
        p.moveTo(68, 34); //alguspunkt
        p.lineTo(26, 15); //lõpppunkt
        p.strokeStyle="yellow";
        p.stroke(); //ümberjoo

        p.beginPath();
        p.arc(89,60,30,20,2*Math.PI, true);
        p.stroke();
        p.fillStyle="yellow";
        p.fill()
    }
}
