let total = 0
let sumando = 1
while(sumando <= 100) {
    console.log(`Total:${total}. Sumando ${sumando}`);
    total = total + sumando;
    sumando = sumando + 1;
}
console.log(`La suma es ${total}`);

// Do while
// Para pedir input del usuario
do {
    numero = parseFloat(prompt("Ingrese un numero"));
} while (isNaN(numero) ||  numero < 0);
console.log(`La raíz cuadrada es : ${Math.sqrt(numero)}`);
