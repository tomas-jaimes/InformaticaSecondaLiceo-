let cantidad4;
do {
    cantidad4 = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad4) || cantidad4 < 1);

    let nLinea4 = 0;
    while (nLinea4 < cantidad4) {
    let linea4 = "";
    let nColumna4 = 0;
    while(nColumna4<nLinea4){
        nColumna4=nColumna4+1;
        linea4 = linea4 + " ";
      }
    nColumna4 = 0;
    while (nColumna4 < cantidad4) {

        nColumna4=nColumna4+1;
       linea4 = linea4 + "*";
      }
    linea4=linea4+" ";
    console.log(linea4);
    nLinea4 = nLinea4 + 1;
    }

console.log("")