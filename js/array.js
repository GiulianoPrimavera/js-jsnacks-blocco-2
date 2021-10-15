
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
}


console.log("array1",array1,"array2", array2)

