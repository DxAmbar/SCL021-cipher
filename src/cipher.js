const cipher = {

    encode: function (desplazamiento, texto) {
      console.log(texto)
  
      if (typeof texto !== "string") {
        throw new TypeError();
       }
  
       if (typeof desplazamiento !== "number") {
          throw new TypeError();
         }
  
      let resultado = "";
      let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P",
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      desplazamiento = (desplazamiento % 27 + 27) % 27; // desplazamiento 
  
      if (texto) {
        for (let i = 0; i < texto.length; i++) { //si texto existe, se recorre cadena (letra en array)
          if (letras.indexOf(texto[i]) != -1) { //indexOf devuelve -1 en caso de no encontrar elemento en la cadena
            let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 27); //necesitamos el módulo por si el resultado>27
            resultado += letras[posicion]; //aquí se guardará esa letra nueva
          }
          else
            resultado += texto[i]; //se muestra carácter igual al que se ingresó (símbolos, n°s, espacios, etc.)
        }
      }
        
      return resultado;
    },
  
  
    decode: function (desplazamiento, texto) {


        if (typeof texto !== "string") {
      throw new TypeError();
     }

     if (typeof desplazamiento !== "number") {
        throw new TypeError();
       }

      let resultado = "";
      let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P",
        "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      desplazamiento = (desplazamiento % 27 - 27) % 27; //desplazamiento a la izquierda
      //desplazamiento = (desplazamiento % 26 - 26) % 26;
  
      if (texto) {
        for (let i = 0; i < texto.length; i++) {
          if (letras.indexOf(texto[i]) != -1) {
            let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 27);
            resultado += letras[posicion];
  
          }
          else
            resultado += texto[i];
        }
      }

      return resultado;
    },
  
  };
  
  export default cipher;