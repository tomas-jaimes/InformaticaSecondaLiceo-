let cantidadPalabras;
    do {
    cantidadPalabras = parseFloat(prompt("Ingrese cantidad de  palabras"))
    } while (isNaN(cantidadPalabras) ||  cantidadPalabras < 1);
    let  arraypalabras=[];
    let a=0;
while(a<cantidadPalabras){
    let Palabra = prompt("Ingrese la palabra")
        a=a+1;
        arraypalabras.push(Palabra);
}
let long3=0;
long3=arraypalabras.length;
let b=0;
let concatenar="";
while(b<long3){
   concatenar+=arraypalabras[b] + " ";
   b=b+1;
}
console.log(`La palabra ${concatenar}`);