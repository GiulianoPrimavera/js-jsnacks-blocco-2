
//array
const array1 = [15, 2, 7];
const array2 = [5];

console.log("array1" ,array1)
console.log("array2", array2);
//devo trovare quale dei due array ha meno elementi

//se la length del primo elemento è maggiore del secondo allora faccio questo
if( array1.length > array2.length){
    //finchè non hanno lunghezza uguale faccio questa cosa
    while (array2.length !== array1.length){
        //creo una variabile che poi posso pushare nell'array
        let number =  parseInt(prompt("inserisci un numero per l'array più piccolo"));
        //pusho un numero random da 1 a 10
        array2.push(number);
        console.log("array2 nel while", array2);
    }
    //se invece la lunghezza del primo elemento è maggiore del secondo allora faccio questo
}else if (array1.length < array2.length){
    while (array2.length !== array1.length){
        let number =  parseInt(prompt("inserisci un numero per l'array più piccolo"));
        array1.push(number);
        console.log("array1 nel while", array1);
    }
    //se sono uguali
}else if (array1.length === array2.length){
    alert("i due array sono di ugale lunghezza");
}


console.log("array1",array1,"array2", array2)



const array3 = ['ciao'];
const array4 = ['hola', 'hello'];

console.log("array3" ,array3)
console.log("array4", array4);
if( array3.length > array4.length){
    //finchè non hanno lunghezza uguale faccio questa cosa
    while (array4.length !== array3.length){
        //chiedo all'utente di inserire i caratteri che vuole lui
        let salutoGenerico =  prompt("inserisci ciao in una lingua che conosci per l'array più piccolo");
        //pusho i caratteri che vuole l'utente
        array4.push(salutoGenerico);
        console.log("array4 nel while", array4);
    }
}else if (array3.length < array4.length){
    while (array4.length !== array3.length){
        //chiedo all'utente di inserire i caratteri che vuole lui
        let salutoGenerico =  prompt("inserisci ciao in una lingua che conosci per l'array più piccolo");
         //pusho i caratteri che vuole l'utente
        array3.push(salutoGenerico);
        console.log("array3 nel while", array3);
    }
    //se sono uguali
}else if(array3.length === array4.length){
    alert("i due array sono di uguale lunghezza")
}
console.log("array3",array3,"array4", array4)
