function factorial(n) {
    if (n<=1) return 1;
    else {
        console.log(`Calculando ${n} * factorial(${n - 1})`);
        return n * factorial(n - 1);
    }
}
