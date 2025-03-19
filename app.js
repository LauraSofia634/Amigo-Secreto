//  Definir el array de participantes
let participantes = []; 

// función para asignar los amigos secretos
function agregarParticipante(){

let input = document.getElementById("nombreParticipante");
let nombre = input.value.trim();

if(nombre){
    participantes.push(nombre);
    input.value = "";  // para limpiar el campo de texto
    mostrarParticipantes(); // llama a la funcion para mostrar la lista
    
}else{
    alert("Por favor, ingresa un nombre válido."); // mensaje de error si el campo esta vacio
    }
}


// creando una funcion para mostrar la lista de participantes
function mostrarParticipantes(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de mostrarla
    
    participantes.forEach(participante => {
        let li = document.createElement("li");
        li.textContent = participante;
        lista.appendChild(li);
    });
}

// agregar el evento al boton para llamar a la funcion 
document.getElementById("agregarParticipante").addEventListener("click", agregarParticipante);


//asignar amigos secretos
function asignarAmigosSecretos() {
    if (participantes.length < 2) {
        alert("Necesitas al menos 2 participantes para asignar amigos secretos.");
        return;
    }

    let amigosSecretos = [...participantes]; // Copiar el array de participantes
    amigosSecretos.sort(() => Math.random() - 0.5); // Mezclar el array

    let asignaciones = []; // Array para almacenar las asignaciones

    for (let i = 0; i < participantes.length; i++) {
        // Asegurarse de que nadie se asigne a sí mismo
        if (participantes[i] === amigosSecretos[i]) {
            return asignarAmigosSecretos(); // Repetir si hay coincidencias
        }
        asignaciones.push({ amigo: participantes[i], secreto: amigosSecretos[i] });
    }

    return asignaciones; // Retornar las asignaciones
}

//mostrar las asignaciones
function mostrarAsignaciones(asignaciones) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores

    asignaciones.forEach(asignacion => {
        let p = document.createElement("p");
        p.textContent = `${asignacion.amigo} tiene como amigo secreto a ${asignacion.secreto}.`;
        resultadoDiv.appendChild(p); // Agregar el párrafo al div de resultados
    });
}


document.getElementById("asignarAmigosSecretos").addEventListener("click", function() {
    let asignaciones = asignarAmigosSecretos(); // Llama a la función para asignar amigos secretos
    if (asignaciones) {
        mostrarAsignaciones(asignaciones); // Muestra las asignaciones si no hay errores
    }
});





/*tion mostrarAsignaciones(asignaciones) {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    asignaciones


/*
// mezclar el array de amigos secretos
amigosSecretos.sort(()=> Math.random() - 0.5);

// asignar amigos secretos
for(let i =0; i < participantes.length; i++){

    // asegurarse de que nadie se asigne a sí mismo
    if(participantes[i] === amigosSecretos[i]){
        return asignarAmigosSecretos(participantes);
    }
}






/*

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // si el usuario no acerto, entonces
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;   
}
*/