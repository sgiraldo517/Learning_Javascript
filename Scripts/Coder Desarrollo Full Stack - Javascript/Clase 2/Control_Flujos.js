// CONTROL DE FLUJOS

// SINTAXIS DE UN CONDICIONAL: 

/* 
    if (condicion1) {
        Bloque de codigo que se ejecuta si la condicion 1 es VERDADERO
    } else if (condicion2) {
        Bloque de codigo que se ejecuta si la condicion 2 es VERDADERO
            Note: Se pueden poner tantos else if como sean necesarios
    } else {
        Bloque de codigo que se ejecuta si las condiciones anteriores son FALSAS
    }
*/

//let edad = 18

// Si edad es mayor a 18. Soy mayor de edad 
// De lo contrario soy menos de edad

/* 
    if (edad >= 18) {
        console.log("Soy mayor de edad")
    } else {
        console.log("Soy menor de edad")
    } 
*/

// OPERADORES LOGICOS

/* 
    > mayor que
    < menor que
    == igual
    >= mayor o igual
    <= menor o igual

    = asigna
    ==compara
    ===compara estrictamente x el tipo de dato
 */


let calificacion = 85

if (calificacion >= 95) { 
    console.log("La mejor calificacion")
} else if (calificacion >= 80) { 
    console.log("Calificacion buena")
} else if (calificacion >= 70) { 
    console.log("Zafaste")
} else { 
    console.log("No pasaste el examen")
}


/* let contrasenaCorrecta = "12345" 
let contrasenaIngresada = prompt("Ingrese su contrasena")

if (contrasenaIngresada == contrasenaCorrecta) {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
} */


// let numero = 9 
let numero = '9'

if (numero === 9) {
    console.log("es un numero")
} else {
    console.log("es de distinto tipo de dato")
}

// TABLAS DE VERDAD

/* 
    OR => ||
    AND => && 
*/

// OR

// let valor1 = true
// let valor2 = false 

/* 
    if (valor1 || valor2) {
        console.log("Al menos uno de los valores es verdadero")    
    } else {
        console.log("Ningun valor es verdadero")
    }
 */

let num1 = 5 
let num2 = 11 

if (num1 > 10 || num2 > 10) {
    console.log("Al menos uno de los valores es mayor a 10")
} else {
    console.log("ningun valor es mayor a 10")
}

let edad = 20 

if (edad < 18 || edad > 65) {
    console.log("la edad esta fuera del rango")
} else {
    console.log("la edad esta dentro del rango")
}

// AND

let valor1 = true
let valor2 = false 

if (valor1 && valor2) {
    console.log("Ambos valores son verdaderos")    
} else {
    console.log("Al menos uno es falso")
}

let rolUsuario = "admin"
let nivelAcceso = 4

if (rolUsuario === "admin" && nivelAcceso >= 3) {
    console.log("Acceso permitido")
} else {
    console.log("Acceso denegado")
}

// TABLAS DE VERDAD

/*

X | Y | X && Y |
T | T |  TRUE  |
F | T |  FALSE |
T | F |  FALSE |
F | F |  FALSE |

X | Y | X || Y |
T | T |  TRUE  |
F | T |  TRUE  |
T | F |  TRUE  |
F | F |  FALSE |


*/



