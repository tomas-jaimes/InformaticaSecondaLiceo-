let ancho2;
let alto2;
do {
  ancho2 = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho2) || ancho2 < 1);

do {
  alto2 = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto2) || alto2 < 1);

let nLinea2 = 0;
while (nLinea2 <= alto2) {
  let linea2 = "";
  let nColumna2 = 0;
  while (nColumna2 <= ancho2) {
    if (nLinea2 == 0 || nLinea2 == alto2 ) {
      linea2 = linea2 + "*";
    } else if (nColumna2 == 0 || nColumna2==ancho2) {
      linea2 = linea2 + "*";
    } else {
        linea2=linea2 + " "
    }
    nColumna2 = nColumna2 + 1;
  }
  console.log(linea2);
  nLinea2 = nLinea2 + 1;
}

console.log("")
