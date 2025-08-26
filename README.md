# Juego-amigo-secreto
Juego de amigo secreto Alura
## Acerca de
El juego consiste en agregar los nombres de tus amigos a la página mediante un botón "Añadir" y posteriormente con el boton "Sortear Amigo" se elige al azar a alguno que ya este agregado.

Además, si se intenta agregar un nombre vacío, osea intentar agregar un nombre sin antes escribirlo, aparece una alerta indicando que no es válido, también esta configurado para que el nombre tenga al menos 3 letras pues con solo 2 el nombre tampoco sería valido.

Los nombres agregados apareceran en pantalla y al seleccionar al azar uno de ellos también se mostrara.

El objetivo del pequeño proyecto fue modificar el archivo .js y un poco el .html para hacer funcionar el juego.
## Aqui se detallan los bloques de código usados 
```
let nombres = [];
  function agregarAmigo(){
      let elemento = document.querySelector('#amigo').value;
  
      if (elemento == "" || elemento.length <= 2){
          alert("Ingrese un nombre valido");
      }
      else{
      nombres.push(elemento);
      mostrarNombre('#listaAmigos');
      limpiarCuadro();
          if(nombres.length > 1){
              document.getElementById('sorteoAmigo').removeAttribute('Disabled')
          }
      }
  
  }
``` 
Esta función se activa con el boton "Agregar", primero obtiene los datos del bloque de la pagina HTML y comprueba si esta vacio "" o si el tamaño del nombre, que es denotado por los caracteres, son menores o iguales a 2, si es así, surge la alerta, en caso contrario agrega el nombre al arreglo donde se almacenan los nombres que se declara fuera del bloque de función.

Sumado a esto, se agrega un if.
```
 if(nombres.length > 1){
              document.getElementById('sorteoAmigo').removeAttribute('Disabled')
          }
```
El cual hace que al haber 2 nombres guardados, se habilite el botón de sorteo, pues no se puede sortear con 1 nombre o con 0 nombres. Hay 2 funciones creadas ligadas a esta.
```
mostrarNombre('#listaAmigos');
limpiarCuadro();
```
Los cuales se explican después.

```
function mostrarNombre(id){
    let cajaNombre = document.querySelector(id) ;
    cajaNombre.innerHTML = cajaNombre.innerHTML + "<br>" + nombres[nombres.length-1];
    
}

function limpiarCuadro(){
    let elementoEliminar = document.querySelector('#amigo').value = "";
}
```
La funcion "mostrarNombre" muestra los nombres que vamos agregando, la parte que interesa del codigo es:
```
cajaNombre.innerHTML = cajaNombre.innerHTML + "<br>" + nombres[nombres.length-1];
```
Esto toma lo que contiene el texto que se almacena primero, es decir, si se ingresa un primer nombre, simplemente se agrea, pero en el segundo nombre se agrega un salto de linea denotado por <br> el cual es el salto de linea de HTML, esto para organizarlo, una vez agregado el salto, se agrega el último elemento del arreglo, por lo que este código solo agrega el último nombre agregado.
La función limpiarCuadro solo borra lo escrito en la caja.

```
function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random()*(nombres.length));
    console.log(`El numero aleatorio es ${numeroAleatorio}`);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `El amigo secreto es: ${nombres[numeroAleatorio]}`;
}
```
Esta función consiste en seleccionar un sumero aleatorio con Math.random, multiplicado por la cantidad de nombres asignados para que el numero aleatorio este entre estacantidad de valores, tambien se usa Math.floor para que se elimine el punto decimal y pueda se usado como indicador de posicion en "nombres[numeroAleatorio]", cuando se selecciona el numero aleatorio, este es la posicion del arreglo de nombres que terminara por imprimirse en la página.
