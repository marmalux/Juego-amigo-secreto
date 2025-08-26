let nombres = [];

function agregarAmigo(){
    let elemento = document.querySelector('#amigo').value;

   // console.log(elemento[elemento.length - 1].length);

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
function mostrarNombre(id){
    let cajaNombre = document.querySelector(id) ;
    cajaNombre.innerHTML = cajaNombre.innerHTML + "<br>" + nombres[nombres.length-1];
    
}

function limpiarCuadro(){
    let elementoEliminar = document.querySelector('#amigo').value = "";
}


function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random()*(nombres.length));
    console.log(`El numero aleatorio es ${numeroAleatorio}`);
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `El amigo secreto es: ${nombres[numeroAleatorio]}`;
}

