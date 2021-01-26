function fibonacci(n) {
    let a = 0;
    let b = 1;
    let c = "";
    let contador = 0
while(contador<=n){
    c = a + b;
    a=b
    b=c
    contador = contador + 1 
}
return c
}