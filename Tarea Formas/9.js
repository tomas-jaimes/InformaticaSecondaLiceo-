let cantidad9;
do {
 cantidad9 = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad9) || cantidad9 < 1);


let nLinea9 = 0;
while (nLinea9 < cantidad9) {
  let linea9 = "";
  let nColumna9 = 0;

  while (nColumna9 < cantidad9) {
    if (nLinea9==cantidad9-1||nColumna9==0||nColumna9==nLinea9) {
        linea9 = linea9 + "*";
      } else {
        linea9 = linea9 + " ";
      }
      nColumna9 = nColumna9 + 1;
    }
  console.log(linea9);
  nLinea9 = nLinea9 + 1;
}