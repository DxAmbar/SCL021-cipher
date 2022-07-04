const cipher = {
  
  encode: function (texto, desplazamiento) {
    let resultado = "";
    let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    desplazamiento = (desplazamiento % 27 + 27) % 27; // desplazamiento 

    if(texto){
      for(let i=0; i<texto.length; i++){ //si texto existe, se recorre cadena (letra en array)
        console.log(texto)
        if(letras.indexOf(texto[i]) !=-1 ){ //indexOf devuelve -1 en caso de no encontrar elemento en la cadena
          console.log(texto[i])
          let posicion =((letras.indexOf(texto[i])+desplazamiento)%27); //necesitamos el módulo por si el resultado>26
          console.log(posicion)
          resultado +=letras[posicion]; //aquí se guardará esa letra nueva
          console.log(resultado)
        }
        else
        resultado +=texto[i]; //se muestra carácter igual al que se ingresó (simbolor, n°s, espacios, etc.)
      }
    } 
    console.log(resultado)
    return resultado;
  },


  decode: function (texto, desplazamiento) {
  let resultado = "";
  let letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];   
  desplazamiento = (desplazamiento % 27 - 27) % 27; //desplazamiento a la izquierda

  if(texto){
    for(let i=0; i<texto.length; i++){ 
      console.log(texto)
      if(letras.indexOf(texto[i]) !=-1 ){ 
        console.log(texto[i])
        let posicion =((letras.indexOf(texto[i])-desplazamiento)%27); 
        console.log(posicion)
        resultado +=letras[posicion]; 
        console.log(resultado)
      }
      else
      resultado +=texto[i]; 
    }
  } 
  console.log(resultado)
  return resultado;
},

};

export default cipher;
