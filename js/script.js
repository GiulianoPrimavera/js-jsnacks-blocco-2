//inserisci il numero
let numero = parseInt(prompt("inserisci un numero"));

//il numero è pari?
//si, stampalo
if(numero % 2 === 0){
    console.log(numero);

}else{   
    //è dispari?
    //si, stampa il numero + 1
    numero++;
    console.log(numero);
}
