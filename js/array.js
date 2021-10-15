
//array
const array1 = [15, 2, 7];
const array2 = [5];

console.log("array1" ,array1)
console.log("array2", array2);
//devo trovare quale dei due array ha meno elementi

//se la length del primo elemento è maggiore del secondo allora lo prendo di mira
if( array1.length > array2.length){
    //finchè non hanno lunghezza uguale faccio questa cosa
    while (array2.length !== array1.length){
        //pusho un numero random da 1 a 10
        let number =  parseInt(prompt("inserisci un numero per l'array più piccolo"));
        array2.push(number);
        console.log("array2 nel while", array2);
    }
}else if (array1.length < array2.length){
    while (array2.length !== array1.length){
        let number =  parseInt(prompt("inserisci un numero per l'array più piccolo"));
        array1.push(number);
        console.log("array1 nel while", array1);
    }
}


console.log("array1",array1,"array2", array2)



/* const array3 = ['ciao'];
const array4 = ['hola', 'hello'];
if( array3.length > array4.length){
    //finchè non hanno lunghezza uguale faccio questa cosa
    while (array4.length !== array3.length){
        //pusho un numero random da 1 a 10
        let salutoGenerico =  parseInt(prompt("inserisci ciao in una lingua che conosci per l'array più piccolo"));
        array2.push(salutoGenerico);
        console.log("array4 nel while", array4);
    }
}
console.log("array3",array3,"array4", array4)
 */