import cipher from './cipher.js';

//window.addEventListener("load", inicio, true);

//function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase(); //mensaje escuchado se cambia automáticamente a mayúsculas
    }, true);

    document.getElementById("cifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value; //click sobre btn cifrar nos devuelve un valor
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensajeSolicitado").value = cipher.encode(texto, desplazamiento);
    }, true); //función devuelve un texto cifrado     

    document.getElementById("descifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value; //click sobre btn cifrar nos devuelve un valor
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensajeSolicitado").value = cipher.decode(texto, desplazamiento);
    }, true); //función devuelve texto descifrado
//}

console.log(cipher);