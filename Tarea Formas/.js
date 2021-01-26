do {
    cantidad6 = parseFloat(prompt("Ingrese el cantidad"));
  } while (isNaN(cantidad6) || cantidad6 < 1);
  
  
      let nLinea6 = 0;
      while (nLinea6 < cantidad6) {
        let linea6 = "";
        let nColumna6 = 0;
        while (nColumna6 < cantidad6) {
          linea6 = linea6 + "*";
          nColumna6 = nColumna6 + 1;
          }
          
      linea6=linea6+"<br>";   
      document.write(linea6);
        nLinea6 = nLinea6 + 1;
      }
  
      console.log(" ")