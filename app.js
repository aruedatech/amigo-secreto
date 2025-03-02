// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []
let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera número aleatorio y lo mltiplica por la canidad de amigos
let amigoSorteado = amigos[indiceAleatorio]; // obtiene el nombre sorteado


//Capturar el valor del campo de entrada: Utilizar document.getElementById o 
// document.querySelector para obtener el texto ingresado por el usuario.

function agregarAmigo() {
    let usuarioIngresado = document.getElementById('amigo').value;
    console.log(usuarioIngresado)

// Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, 
// mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    if (usuarioIngresado === ""){
        alert("Por favor, inserte un nombre.")

//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push()

    } else {
        amigos.push(usuarioIngresado)

//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
        document.getElementById('amigo').value = "";
    }

    console.log(amigos)

}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crea un nuevo <li>
        li.textContent = amigos[i]; // Asigna el nombre del amigo
        lista.appendChild(li); // Agrega el <li> a la lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista.";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}