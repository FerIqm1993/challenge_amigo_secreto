// Variables globales para la lista de amigos y nombres de amigos a agregar
let listadoAmigos = [];
let nombreAmigo = document.getElementById("amigo");

// Verificar que se agrege un nombre correcto
function verificarNombre() {
    let nombre = nombreAmigo.value.trim(); // Se obtiene el valor sin redefinir la variable global

    if (nombre === "" || /\d/.test(nombre)) {
        alert("Debes escribir solo un nombre de tu amigo sin incluir números.");
        return;
    }

    if (listadoAmigos.includes(nombre)) {
        alert("Este amigo ya fue agregado.");
        return;
    }
    agregarAmigo(nombre);
}

function agregarAmigo(nombre) {
    let lista = document.getElementById("listaAmigos");

    // Agregar amigo al array
    listadoAmigos.push(nombre);

    // Crear un nuevo elemento <li> y añadirlo a la lista
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    lista.appendChild(nuevoElemento);

    nombreAmigo.value = ""; // Limpia el input
}

// Función para sortear un único ganador
function sortearAmigo() {
    if (listadoAmigos.length < 1) {
        alert("Se necesita al menos 1 amigo para hacer el sorteo.");
        return;
    }

    // Elegir un ganador aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listadoAmigos.length);
    let ganador = listadoAmigos[indiceAleatorio];
    mostrarResultado(ganador);
}

// Función para mostrar el ganador
function mostrarResultado(ganador) {
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar resultados previos

    // Mostrar solo el ganador
    let item = document.createElement("li");
    item.textContent = `El ganador es: ${ganador}`;
    listaResultado.appendChild(item);
}
