function saludo(){
 document.write("Este es mi saludo");
}

function hola() {
    document.write("Este es un nuevo saludo");
}

var mi_var = document.getElementById("saludos");
mi_var.onclick = hola;