// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){ //Botón Añadir: agrega nombres a la lista
    const nombre = document.querySelector(`#amigo`).value.trim();//Obtiene y elimina espacios en blanco

        if (nombre !== ""){//valida si el input esta en blanco
            amigos.push(nombre);//Agrega el nombre a la lista
            actualizarLista();//llama a la funcion
        }else if(amigos.includes(nombre)){
            alert("El nombre ya está en la lista.");
        }else {
            alert("Por favor, inserte un nombre.");//Alerta si ingreso es vacio
        }
    document.querySelector(`#amigo`).value = ``;//Limpia el input
}

function actualizarLista(){ //Agrega y muestra los nombres
    let listaDeNombres = document.getElementById("listaAmigos"); //Obtiene el elemento
    listaDeNombres.innerHTML = ""; //Vacia la lista

        for(let i=0 ; i<amigos.length ; i++){ //iteración de la lista
          let agregarLi = document.createElement("li");   //Crea el elemento li
          agregarLi.textContent = amigos[i];  //Agrega texto a li
          listaDeNombres.appendChild(agregarLi);  //Agrega nombre a la lista
         }
}

function sortearAmigo(){ //Sortea al amigo secreto
        if(amigos.length > 0){  //Valida que la lista no este vacia
            let amigoSecreto = amigos[Math.floor(Math.random()*amigos.length)]; //Genera un indice y escoge el nombre dentro de la lista
            let mostraAmigoSecreto = document.getElementById("resultado");//Toma el elemnto de la lista "resultado"
            mostraAmigoSecreto.innerHTML = "";  //Vacia la lista
            mostraAmigoSecreto.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;//Muestra en el HTML el amigo secreto
        }else{
            console.log("No amigos");
        }
        document.getElementById("listaAmigos").innerHTML ="";
}
