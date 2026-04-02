const nombre = prompt("Ingresa tu nombre");
const edad = prompt("Ingresa tu edad");
const contrasena = prompt("Ingresa una contraseña");

if (nombre == "") {
    console.log("Error, el nombre no debe estar vacío")
} else {
    if (parseInt(edad) < 18) {
        console.log("Acceso denegado")
    } else {
        if (contrasena.length < 6) {
            console.log("Contraseña invalida")
        } else {
            console.log("Bienvenido " + nombre)
            console.log("Edad en 10 años: " + (parseInt(edad) + 10))
            console.log(nombre + " de " + edad + " años, tu constraseña: " + contrasena + ", ha sido guardada exitosamente")
        };
    };
};