function pitagorasH(ca,co) {
    return (Math.sqrt(Math.pow(ca,2) + Math.pow(co,2)));
}
function pitagorasCA(co,h) {
    return (Math.sqrt(Math.pow(co,2) - Math.pow(h,2)));
}
function pitagorasCO(h, ca) {
    return (Math.sqrt(Math.pow(ca,2) - Math.pow(h,2)));
}

function calculaPitagoras(h,ca,co) {
    if (h == 0) {
        return pitagorasH (ca,co)
    }
    else if (ca == 0 ) {
        return pitagorasCA (h,co);
        
    }
    else {
        return pitagorasCO (ca,h)
    }
}

console.log ("Teste 1: " + calculaPitagoras(0,21,20));
console.log ("Teste 2: " + calculaPitagoras(13,5,0));
console.log ("Teste 3: " + calculaPitagoras(10,0,6));