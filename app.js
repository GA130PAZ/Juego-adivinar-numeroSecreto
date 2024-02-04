
let numeroSecreto= 0;

let intentos=0;

let numeroMaximo= 10;

let listaNumerosSorteados= [];
function asignarTexto(elemento , texto) {

let elementoHTML= document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {

    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){

        asignarTexto('p',`acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTexto('p','el número secreto es menor')
        } else {
            asignarTexto('p','el número secreto es mayor')
        }
        intentos++;
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTexto('p','ya se sortearon todos los nùmeros posibles');
    } else {
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
   
}
function condicionesIniciales(){
    asignarTexto('h1' , 'Juego del número secreto');
    asignarTexto('p' , `elegir un número del 1 al ${numeroMaximo} `);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
    }

function reiniciarJuego() {
     limpiarCaja();
     condicionesIniciales();
     document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
