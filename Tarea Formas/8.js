let cantidad8;
do {
 cantidad8 = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad8) || cantidad8 < 1);

let nLinea8 = 0;
while (nLinea8 < cantidad8) {
 let linea8 = "";
 let nColumna8 = nLinea8
 
 while (nColumna8 < cantidad8-1) {
    
     linea8 = linea8 + " ";
     nColumna8=nColumna8+1;

 }
 nColumna8=0
 while (nColumna8 <= nLinea8){
     if(nLinea8==cantidad8-1||nColumna8==0||nColumna8==nLinea8){
         linea8 = linea8 + "*";
     }
     else{
        linea8 = linea8 + "*";
     }
     nColumna8=nColumna8+1;
 }   
 console.log(linea8);
 nLinea8 = nLinea8 + 1;
}

console.log("")