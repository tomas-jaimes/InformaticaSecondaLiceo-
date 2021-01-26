let suma2 = 0
let numero2 = 3
while(numero2 <= 1000)  {
    suma2 = suma2 + numero2;
    numero2 = numero2 + 3;
}
let suma3 = 0
let numero3 = 5
while(numero3 <= 1000)  {
    suma3 = suma3 + numero3;
    numero3 = numero3 + 5;
}
sumaTot = suma2 + suma3
console.log(`La suma de todos los números menores o iguales que 10000 que sean múltiplos de 3 y múltiplos de 5 ${sumaTot}`);
