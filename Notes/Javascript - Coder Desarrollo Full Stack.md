# Javascript - Coder: Desarrollo Full Stack

- [Javascript - Coder: Desarrollo Full Stack](#javascript---coder-desarrollo-full-stack)
  - [Clase 1](#clase-1)
    - [Aplicación Web](#aplicación-web)
    - [JavaScript](#javascript)
      - [Caracteristicas de JavaScript](#caracteristicas-de-javascript)
      - [Historia de JS](#historia-de-js)
    - [Elementos Basicos de Programacion](#elementos-basicos-de-programacion)
    - [HTML, CSS y JavaScript](#html-css-y-javascript)
    - [Algortimos](#algortimos)
  - [Clase 2](#clase-2)
    - [Como escrbir codigo JS?](#como-escrbir-codigo-js)
    - [Sintaxis](#sintaxis)
    - [Variables](#variables)
      - [Tipos de variables](#tipos-de-variables)
      - [let y const](#let-y-const)
      - [Operaciones con variables](#operaciones-con-variables)
    - [Metodos de entrada y de salida](#metodos-de-entrada-y-de-salida)
      - [Metodo de Entrada](#metodo-de-entrada)
      - [Metodos de Salida](#metodos-de-salida)


## Clase 1 
### Aplicación Web
Son plataformas dinamicas e interactivas qu permiten a los usuarios realizar diferentes tareas. Las funcionalidades de las app web estan en constante mantenimiento y mejora. Para desarrollar una aplicacíon web vamos a usar Java Script.

### JavaScript
Es un leaguaje de progrmacion que se utiliza para aportar dinamismo a sitios y aplicaciones web. Funciona como complemento a HTML y CSS, permitiendo: 
- Crear nuevas funcionalidad e interacciones avanzadas con los usuarios. 
- Interactuar con otras aplicaciones o servicios backend. 

#### Caracteristicas de JavaScript
- Leguaje interpretado: se ejecuta en un interprete (los navegadores) 
- Se divide en Frontend y Backend 

#### Historia de JS
- 1995: Nace con Netscape 
- Actualmente usamos la version ES6 de JS 

### Elementos Basicos de Programacion 
1. Datos
   - Numericos
   - Cadena
   - Booleanos
   - Punteros
2. Variables
   - Globales
   - Locales    
3. Objetos
   - Array
   - Boolean
   - Date
   - Math
   - String 
4. Arrays
   - Indice 
   - Longitud
5. Funciones
   - Argumentos

### HTML, CSS y JavaScript

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| "Lenguaje" de marcado de etiquetas   | Hojas de estilo en cascada |    |
| Permite crear documentos para la web | Usado para definir y crear la presentacion de un documento estructurado | Permite controlar el comportamiento y funcionalidad de los elementos de una pagina web |
| Etiquetas, Atributos, Estructura | Estilo, Reglas, Medidas Fuente |    |

### Algortimos
Conjunto de procedimientos o funciones ordenados que se necesitan para realizar cierta operacion o accion. 


## Clase 2

### Como escrbir codigo JS? 
1. Directamente en el HTML mediente las etiquetas: `<script>// Aqui va el codigo JS</script>`
2. En un archivo individual con extencion .js 
   > Se vincula al HTML mediante la etiqueta `<script src="js/nombre_archivo.js"></script>` 

### Sintaxis
- JS es case sensitive lo que significa que se distingue entre mayusculas y minisculas 
- Se pueden incluir bloques de comentarios
   ```
   <script>
      // Comentario simple_ una linea
      /* Comentario de mas de una linea I 
         Comentario de mas de una linea II */
   </script>
   ```

Palabras reservadas: son aquellas que se utilizan para construir las sentencias de Javascript y que por lo tanto no pueden utilizarse libremente. 

### Variables
Una VARIABLE es espacio en memoria para guardar algo, ese algo en Java script es un DATO. Para decirlo de forma mas sencilla, es una cajita donde puedo guardar cosas para poder usarlas luego. Los **datos** de una la variable pueden ser de distintos tipos. 

#### Tipos de variables
1. Number: que son valores numéricos y pueden ser enteros o flotantes (es decir con decimales). 
2. String: en ingles “cadena” es decir una cadena de caracteres, o cadena de texto, se escribe con comillas dobles o simples.
3. Boolean: toma el valor de true o false

Las variables se **declaran**, que quiere decir que defino su existencia. Siguiendo con el ejemplo de la caja, armo la caja y le pongo el rótulo de lo que va a contener y la puedo declarar con LET o con CONST. Las variables también se **inicializan**, que quiere decir que le voy a asignar un valor, es decir le voy a guardar un dato. 

#### let y const 
Al usar alguna de estas variables reservadas se impide que se puedan crear dos variables con el mismo nom

| let | const | 
| --- | ----- |
| Una variable creada usando let, puede recibir multiples asignaciones en el transcurso de la aplicación | Una constante const recibe una unica asignacion al momento de su declaracion | 

#### Operaciones con variables
Tipos de operaciones: 
1. Matematicas: suma, resta, división, multiplicación.
2. Concatenacion: es una suma de cadena de caracteres. 

   > Aclaracion: no es lo mismo let numero = 5 que let numero = “5”, es decir que, si sumo dos variables con datos numéricos (ej. 2 + 2) si yo imprimo resultado será 4. Pero si los dos datos son string (ej "2" + "2") el resultado sera 22. 

### Metodos de entrada y de salida

#### Metodo de Entrada
prompt(): Muestra una ventana en el navegador donde el usuario va a poder ingresar un dato. Ese dato se debe guardar en una variable para poder usarlo. Ejemplo: 
`let nombre = prompt (“ingrese su nombre”)`

#### Metodos de Salida

| console.log() | alert() |
| ------------- | ------- |
| Muestra un mensaje, pero por consola, lo que muestre va a ser lo que le pase por parámetro, es decir lo que ponga en los paréntesis | Es la ventana que aparece en el navegador, lo que muestre es lo que pongamos en el paréntesis. |
| `console.log(nombreVariable)` | `alert(nombreVariable)` |




