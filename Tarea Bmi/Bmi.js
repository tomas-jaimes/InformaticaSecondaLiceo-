
do {
    masa = parseFloat(prompt("Ingrese su masa en Kg"));
} while (isNaN(masa) ||  masa < 0);

do {
    altura = parseFloat(prompt("Ingrese su altura en metros"));
} while (isNaN(altura) ||  altura < 0);

Bmi = masa/(altura*altura)
console.log(`Tú indice de masa corporal es ${Bmi}`);

if(Bmi < 18,50) {
    console.log(`Underweight`);
}
else if(Bmi = 18,51-24,90) {
    console.log(`Normal`);
}
else if(Bmi = 24,91-29,9) {
    console.log(`Overweight`);
}
else if(Bmi > 30) {
    console.log(`Obese`);
}