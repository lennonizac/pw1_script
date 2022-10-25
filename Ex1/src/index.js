function pitagorasH(ca,co) {
    return (Math.sqrt(Math.pow(ca,2) + Math.pow(co,2)));
}
function pitagorasCA(co,h) {
    return (Math.sqrt(Math.pow(h,2) - Math.pow(co,2)));
}
function pitagorasCO(h, ca) {
    return (Math.sqrt(Math.pow(h,2) - Math.pow(ca,2)));
}

function calculaPitagoras(h,ca,co) {
    if (h == 0) {
        return pitagorasH (ca,co)
    }
    else if (ca == 0 ) {
        return pitagorasCA (co, h);
        
    }
    else {
        return pitagorasCO (ca,h)
    }
}

function abastecePitagoras(){
    let h = document.getElementById("h").value;
    let ca = document.getElementById("ca").value;
    let co = document.getElementById("co").value;

    console.log(calculaPitagoras(h, ca, co));
    document.getElementById("resultado").innerHTML=calculaPitagoras(h, ca, co);
}

