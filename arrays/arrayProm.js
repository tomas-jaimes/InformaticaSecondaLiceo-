function promedio2(arrayNumero){
    let cantidadNumeros;
    do {
        cantidadNumeros = parseFloat(prompt("Ingrese cantidad de numeros"))
    } while (isNaN(cantidadNumeros) ||  cantidadNumeros < 1);
    let d=0;
 while(d<cantidadNumeros){
    let notas2 = parseFloat(prompt("Ingrese numeros"))
    if (notas2 <=10 && notas2 >=0 ) {
        d=d+1;
        arrayNumero.push(notas2);
    }
 }
 let long2=0;
 long=arrayNumero.length;
 let c=0;
 let suma2=0;
 while(c<long){
    suma2=suma2+arrayNumero[c];
    c=c+1;
 } 
 let promedio2=0;
 promedio2= suma2/long2;
 return(promedio2)
}
let  arrayNumero=[];
console.log(`El promedio es ${promedio2(arrayNumero)}`);