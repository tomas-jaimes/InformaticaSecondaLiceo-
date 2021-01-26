let numero4 = 3
let suma4 = 0
let numero5 = 5
let suma5 = 0

while(numero4 <= 10000 || numero5 <= 10000) {
    if(numero4%5 == 0){
    suma4 = suma4
    }
    else{suma4 = numero4 + suma4}
    numero4 = numero4 + 3

    if(numero5%3 == 0){
        suma5 = suma5
            }
            else{suma5 = numero5 + suma5}
                numero5 = numero5 + 5;
}

sumaTot1 = suma4 + suma5
console.log(`La suma de todos los números menores o iguales que 10000 que sean múltiplos de 3 o múltiplos de 5, pero no múltiplos de 3 y múltiplos de 5 a la vez es ${sumaTot1}`)
