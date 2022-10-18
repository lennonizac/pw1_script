/* EXERCÍCIO VALENDO PROVA
function provavelNumeros(x1, x2){
    if(x1 == 1){
       if(x2 == 0){
           return ("B");
        } 
        if(x2 == 1){
            return ("C");
        }
    }
    else{
        return ("A");
    }
   
}
function geraNumero(){
    return (Math.floor(Math.random()*2));
}
console.log(provavelNumeros(geraNumero(),geraNumero()));
*/


function calculaA(b,c,d){
    return (b*c/d);
}
function calculaB(a,c,d){
    return (a*d/c);
}
function calculaC(a,b,d){
    return (a*d/b);
}
function calculaD(a,b,c){
    return (b*c/a);

}
function calculaRegra(a,b,c,d){
    if(a == 0){
        return calculaA(b,c,d);
    }
    else if(b == 0){
        return calculaB(a,c,d);
    }
    else if (c == 0){
        return calculaC(a,b,d);
    }
    else{
        return calculaD(a,b,c)
    }
}
console.log(calculaRegra(100,320,40,0));