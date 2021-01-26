let cantidad5;
do {
    cantidad5 = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad5) || cantidad5 < 1);



let nLinea5 = 0;
    while (nLinea5 < cantidad5) {
    let linea5 = "";
    let nColumna5 = 0;
    while(nColumna5<cantidad5-nLinea5){
        nColumna5=nColumna5+1;
        linea5 = linea5 + " ";

    }
    nColumna5 = 0;
    while (nColumna5 < cantidad5) {
        if(nLinea5==0||nLinea5==cantidad5-1||nColumna5==0||nColumna5==cantidad5-1){
            linea5 = linea5 + "*";
        }
        else{
        linea5=linea5+" ";
    }    
        nColumna5=nColumna5+1;
        
    }
    linea5=linea5+" ";   
    console.log(linea5);
    nLinea5 = nLinea5 + 1;
    }

console.log(" ")