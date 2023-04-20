// DESARROLLO FULL STACK - JAVASCRIPT

// CLASE 2 

console.log("Bienvenidos a JS");

// VARIABLES
// Para crear variales usamos la palabra reservada let 

    let comision = "Coderhouse"; // string => cadena de texto

        // = se conoce como el signo de asginación 

    console.log(comision);

// console.log() es una funcion de js que le ordena mostrar algo en la consola

    let edad = 27 // number => tipo de dato que solo almacena numeros
    console.log(edad);

    let disponible = false; // boolean => true o false
    disponible = 89; // se reasigno un valor a la variable disponible

    console.log(disponible);

// Para crear una constante se una la palabra reservada const. 
    // IMPORTANTE: No se puede reasignar el valor de una contante

    const name = 'nombre';
    //name = 'Sofia' // genera un error en la consola

// DIFERENCIAS ENTRE CONST Y LET 
/*
    LET 
    1) Puedo declarar una variable vacia.
    2) Predo reasignar valores
*/

    let nombre; 
    nombre = 'ejemplo1';
    nombre = 'ejemplo2';
    console.log(nombre);

/* 
    CONST 
    1) No puedo declara una contante vacia. 
    2) No puedo reasignar valores.
*/

// CONCATENACION => AGREGAR
// Suma de valores de otras variables 

    const nombreAlumno = "Nelson";
    const nombreApellido = "Gomez";

    const nombreCompleto = nombreAlumno + " " + nombreApellido

    console.log(nombreCompleto); 

// COMUNICACION CON EL USUARIO
    
/*
    prompt("ingrese su nombre"); // permite recibir mensajes del usuario
    alert("Soy una alerta"); // permite dar mensajes al usuario 

    let nombreAlumno2 = prompt("ingrese alumno");
    alert("Nombre del alumno" + " " + nombreAlumno2);
*/ 

// OPERADORES ARITMETICOS

/*
    + SUMA
    - RESTA
    / DIVISION 
    * MULTIPLICACION 
*/

/*
    let primerNumero = prompt("Ingrese un numero");
    let segundoNumero = prompt("Ingrese otro numero");

    let suma = primerNumero + segundoNumero
*/ 
        // Lo anterior da como resultado numero1 y numero2 no el resultado de la suma. Esto se da porque prompt recibe solo strings 

    // Correccion

    
        let primerNumero = parseInt(prompt("Ingrese un numero"));
        let segundoNumero = Number(prompt("Ingrese otro numero"));

        let suma = primerNumero + segundoNumero;
        let resta = primerNumero + segundoNumero;
        let multiplicacion = primerNumero + segundoNumero;
        let division = primerNumero + segundoNumero;

        alert(division); 
    



    



