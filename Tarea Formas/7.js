let cantidad7;
do {
    cantidad7 = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad7) || cantidad7 < 1);

let nLinea7 = 0;
while (nLinea7 < cantidad7) {
    let linea7 = "";
    let nColumna7 = nLinea7
    
    while (nColumna7 < cantidad7-1) {
       
        linea7 = linea7 + " ";
        nColumna7=nColumna7+1;

    }
    nColumna7=0
    while (nColumna7 <= nLinea7){
        if(nLinea7==cantidad7-1||nColumna7==0||nColumna7==nLinea7){
            linea7 = linea7 + "*";
        }
        else{
           linea7 = linea7 + " ";
        }
        nColumna7=nColumna7+1;
    }   
    console.log(linea7);
    nLinea7 = nLinea7 + 1;
 }

 
 console.log(" ")