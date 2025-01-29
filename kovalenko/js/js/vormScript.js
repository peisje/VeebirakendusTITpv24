function lugemine(){
    document.getElementById("vastus").innerHTML=
        "Tere hommikust, "+
        document.getElementById("nimi").value+
        " "+document.getElementById("pnimi").value;
}
//sama funktsioon  koos muutujatega
function lugemine2(){
    let nimi=document.getElementById("nimi").value;
    let pnimi=document.getElementById("pnimi").value;
    let vastus=document.getElementById("vastus");
    let varv=document.getElementById("varv");
    //radio-nupp
    let mees=document.getElementById("mees");
    let naine=document.getElementById("naine");
    let paev=document.getElementById("synnipaev").value;
    let num=document.getElementById("num").value;
    let post=document.getElementById("post").value;
    let telef=document.getElementById("telef").value;
    let silka=document.getElementById("silka").value;

    if(mees.checked){
        vastus.innerHTML=
            "Tere hommikust, mees "+nimi+" "+pnimi+"!<br>"+
            "Sinu sünnipäev on "+paev+".<br>"+
            "Sinu vanus on "+num+".<br>"+
            "See on sinu e-post "+post+".<br>"+
            "See on sinu telefoninumber "+telef+".<br>"+
            "See on sinu isikukood "+silka+".";
        vastus.style.color=varv.value;
        pilt.src="boy.png";
    }
    else if(naine.checked){
        vastus.innerHTML=
            "Tere hommikust, mees "+nimi+" "+pnimi+"!<br>"+
            "Sinu sünnipäev on "+paev+".<br>"+
            "Sinu vanus on "+num+".<br>"+
            "See on sinu e-post "+post+".<br>"+
            "See on sinu telefoninumber "+telef+".<br>"+
            "See on sinu isikukood "+silka+".";
        vastus.style.color=varv.value;
        pilt.src="girl.png";
    } else {
        vastus.innerHTML="palun vali sugu"
    }
}
function selectValik(){
    let vastus2=document.getElementById("vastus2");
    let linn=document.getElementById("linn");

    vastus2.innerHTML="Sinu linn -"+linn.value;
    vastus2.style.backgroundColor=varv.value;
}
//checkbox valik
function checkboxValik2(){
    let vastus3=document.getElementById("vastus3");
    let sport=document.getElementById("sport");
    let ujumine=document.getElementById("ujumine");
    let muusika=document.getElementById("muusika");
    let tantsimine=document.getElementById("tantsimine");
    let joonistamine=document.getElementById("joonistamine");


    let hobby="";
    if(sport.checked){
        hobby+=sport.value+", ";
    }
    if(ujumine.checked){
        hobby+=ujumine.value+", ";
    }
    if(muusika.checked){
        hobby+=muusika.value+", ";
    }
    if(tantsimine.checked){
        hobby+=tantsimine.value+", ";
    }
    if(joonistamine.checked){
        hobby+=joonistamine.value+", ";
    }

    vastus3.innerHTML="sinu hobby -"+hobby;
    vastus3.style.backgroundColor=varv.value;
}