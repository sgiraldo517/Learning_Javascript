# Javascript - Coder: Desarrollo Full Stack

Link al drive con la documentacion: [aqui](https://drive.google.com/drive/folders/1mZubHBuBDm6vQ8otxj7ND6cio6eveXnL)
Link al repositorio: [aqui](https://github.com/omanias/comision-51885)

- [Javascript - Coder: Desarrollo Full Stack](#javascript---coder-desarrollo-full-stack)
  - [Clase 0](#clase-0)
    - [Aplicación Web](#aplicación-web)
    - [JavaScript](#javascript)
      - [Caracteristicas de JavaScript](#caracteristicas-de-javascript)
      - [Historia de JS](#historia-de-js)
    - [Elementos Basicos de Programacion](#elementos-basicos-de-programacion)
    - [HTML, CSS y JavaScript](#html-css-y-javascript)
    - [Algortimos](#algortimos)
  - [Clase 1](#clase-1)
    - [Como escrbir codigo JS?](#como-escrbir-codigo-js)
    - [Sintaxis](#sintaxis)
    - [Variables](#variables)
      - [Tipos de variables](#tipos-de-variables)
      - [let y const](#let-y-const)
      - [Operaciones con variables](#operaciones-con-variables)
    - [Metodos de entrada y de salida](#metodos-de-entrada-y-de-salida)
      - [Metodo de Entrada](#metodo-de-entrada)
      - [Metodos de Salida](#metodos-de-salida)
    - [Script](#script)
      - [Anidar](#anidar)
      - [Parsear](#parsear)
  - [Clase 2](#clase-2)
    - [Condicionales](#condicionales)
      - [Control de flujos](#control-de-flujos)
      - [Estructura IF](#estructura-if)
      - [Estructura if... else](#estructura-if-else)
      - [Estructura if... else if](#estructura-if-else-if)
      - [Operadores logicos](#operadores-logicos)
  - [Clase 3](#clase-3)
    - [Ciclos](#ciclos)
      - [Tipos de bucles](#tipos-de-bucles)


## Clase 0 
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


## Clase 1

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
Una VARIABLE es espacio en memoria para guardar algo, ese algo en Java script es un DATO. Para decirlo de forma mas sencilla, es una cajita donde puedo guardar cosas para poder usarlas luego. Puede cambiar de contenido a lo largo de la ejecución de un programa. Los **datos** de una la variable pueden ser de distintos tipos. 

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

### Script
Un script es una secuencia de instrucciones que realizan una o más tareas.

#### Anidar
En programación, se refiere a escribir una sentencia junto a una subsiguiente dentro de la misma estructura sintáctica. Es decir, que no hay un salto de línea en el medio.

#### Parsear 
Es una palabra devengada del inglés "parse". Refiere en programación, a una actividad que consiste en el análisis de texto para determinar si cumple o no reglas o patrones y en base a esto tomar alguna determinación.


## Clase 2

### Condicionales
Estructura sintáctica que sirve para tomar una decisión a partir de una condición. 
`Si <condición> entonces <operación>`

#### Control de flujos
Hasta ahora todas las instrucciones que escribimos se ejecutan en línea recta, una sentencia después de la otra. La idea del **control de flujos** es marcar puntos en nuestra aplicación donde, a partir de alguna evaluación, nuestro programa pueda tomar varios caminos posibles de acción.

   >**Valores Booleanos:** Para generar estos controles empezamos a trabajar con los valores booleanos. Estos pueden tomar dos valores posibles, true o false, verdadero o falso (Tambien se pueden representar en el sistema binario). Así, para que nuestro programa tome un camino u otro le vamos a decir que resuelva alguna evaluación/comparación. Si es verdadera (true) tomará un camino, y si es falsa (false) tomará otro.

#### Estructura IF 
Esta estrucutra es la mas usada en la mayoria de los lenguajes para hacer control de flujos. 

```
// Ejemplo estructura if
if(true / false) {	
   //Bloque de codigo a ejecutar
}
```

Si la condición se cumple (es decir, si su valor es true) se ejecutan todas las instrucciones que se encuentran dentro de {...}. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {...} y el programa continúa ejecutando el resto de instrucciones del script.

#### Estructura if... else

Las condiciones suelen ser del tipo «si se cumple esta condición, hazlo; si no se cumple, haz esto otro». Para lograr esto usamos **if ... else**. 

```
// Ejemplo estructura if...else
if(true / false) {	
   //Bloque de codigo a ejecutar
} else {
   // Bloque de codigo a ejecutar si condicion 1 no se cumple
}
```

#### Estructura if... else if
```
// Ejemplo estructura if...else
if(Condicion 1) {	
   //Bloque de codigo a ejecutar
} else if (Condicion 2) {
   // Bloque de codigo a ejecutar 
} else if (Condicion 3) {
   // Bloque de codigo a ejecutar 
} else {
   // Bloque de codigo a ejecutar si no se cumple ninguna condicion
}
```

#### Operadores logicos
Permiten agrupar expresiones lógicas. Las expresiones lógicas son todas aquellas expresiones que obtienen como resultado verdadero o falso. Los operadores lógicos son aquellos que hacen de nexo de este tipo de expresiones.

| Operadores logicos y relacionales | Descripcion | Ejemplo |
| --------------------------------- | ----------- | ------- |
| == | Es igual | a == b |
| === | Es ***estrictamente*** igual | a === b |
| != | Es distinto | a != b |
| !== | Es ***estrictamente*** distinto | a !== b |
| <, <=, >, >= | Menor, menor o igual, mayor, mayor o igual| a <= b |
| && | Operador and (y) | a && b |
| || | Operador or (o) | a || b |
| ! | Operador not (no) | !a |


## Clase 3 

### Ciclos
Los ciclos, también conocidos como bucles o iteraciones son un medio rápido y sencillo para hacer algo repetidamente. Si tenemos que hacer alguna operación más de una vez en el programa, de forma consecutiva, usaremos las estructuras de bucles de JavaScript:  for, while o do...while.

#### Tipos de bucles
1. Ciclos por conteo: Repiten un bloque de código un número de veces específica. 
   **Estrutura For**
   ```
   for(desde; hasta; actualizacion) {
      // Bloque de codigo que se ejecutara mientras dure el ciclo
   }
   ```
   -**Desde** es la zona en la que se establecen los valores iniciales de las variables que controlan el ciclo.
   -**Hasta** es el único elemento que decide si se repite o se detiene el ciclo.
   -**Actualizacion**  es el nuevo valor que se asigna después de cada repetición a las variables que controlan la repetición.

      >**Break** en ocasiones cuando escribimos una estructura for, necesitamos que bajo cierta condición el ciclo se interrumpa. Para eso se utiliza la sentencia break. Al escribir esa línea dentro de un ciclo for, el mismo se interrumpirá como si hubiera finalizado.

         ```
         for(desde; hasta; actualizacion) {
            // Bloque de codigo que se ejecutara mientras dure el ciclo
            if (condicion) {
               break;
            }
         }
         ```

      >**Continue** a veces, cuando escribimos una estructura for, necesitamos que bajo cierta condición, el ciclo **salte** esa repetición y **siga con la próxima**. Para eso se utiliza la sentencia continue.

         ```
         for(desde; hasta; actualizacion) {
            // Bloque de codigo que se ejecutara mientras dure el ciclo
            if (condicion) {
               continue;
            }
         }
         ```

2. Ciclos condicionales: Repiten un bloque de código mientras la condición evaluada es verdadera. Estructuras while y do...while.
   **Estructura WHILE**
   La estructura while permite crear bucles que se ejecutan cero o más veces, dependiendo de la condición indicada.
   ```
   while(condicion = true) {
      // Bloque de codigo que se ejecutara mientras dure el ciclo
   }
   ```

   **Estructura DO... WHILE**
   A diferencia de while, garantiza que el bloque de código se interpreta al menos una vez, porque la condición se evalúa al final.
   ```
   do {
      // Bloque de codigo que se ejecutara mientras dure el ciclo
   } while(condicion)
   ```

3. Switch: esta diseñada para manejar de forma sencilla múltiples condiciones sobre la misma variable. (Es similar a usar if pero esta estructura es mas ordenada)
   **Estructura SWITCH**
   Cada condición se evalúa y, si se cumple, se ejecuta lo que esté indicado dentro de cada **case**. Normalmente, después de las instrucciones de cada case se incluye la sentencia **break** para terminar la ejecución del switch, aunque no es obligatorio.
      >Se utiliza el valor **default** para indicar las instrucciones que se ejecutan cuando ninguna condición anterior se cumplió.


   ```
   switch (variable) {
      case condicion1 : 
         // Codigo que se debe ejecutar
         break;
      case condicion2 : 
         // Codigo que se debe ejecutar
         break;
      case condicion3 : 
         // Codigo que se debe ejecutar
         break;
      default : 
         // Codigo que se debe ejecutar
         break;
   }
   ```









