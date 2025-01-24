// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){ //Botón Añadir: agrega nombres a la lista
    const nombre = document.querySelector(`#amigo`).value.trim();//Obtiene y elimina espacios en blanco

        if (nombre !== ""){//valida si el input esta en blanco
            amigos.push(nombre);
        }else {
            alert("Por favor, inserte un nombre.");
        }
    document.querySelector(`#amigo`).value = ``;
    console.log(amigos);
    actualizarLista();

}

