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
            "See on sinu url "+silka+".";
        vastus.style.color=varv.value;
    }
    else if(naine.checked){
        vastus.innerHTML=
            "Tere hommikust, naine "+nimi+" "+pnimi+"!"+
            " Sinu sünnipäev on "+paev+". Sinu vanus on "+num+". See on sinu e-post "+post+". See on sinu telefoninumber "+telef+". See on sinu url"+silka;
        vastus.style.color=varv.value;
    } else {
        vastus.innerHTML="palun vali sugu"
    }
}