![banner](https://github.com/user-attachments/assets/cc72bddb-5576-4828-9341-d083ccdd2129)

 
![Estado](https://img.shields.io/badge/Status-En%20Desarrollo-red)
![Version](https://img.shields.io/badge/Version-1.0.0-orange)
![Fecha Personalizada](https://img.shields.io/badge/release%20Date-2025-yellow)
![GitHub](https://img.shields.io/badge/Support-active-brightgreen)
![MIT License](https://img.shields.io/badge/License-MIT-yellowgreen)
![Creative Commons](https://img.shields.io/badge/License-Creative%20Commons%20BY%204.0-lightgrey)
![GitHub](https://img.shields.io/github/stars/BreyanCordova/Amigo-Secreto?style=social)




   
# Amigo Secreto

Este proyecto es una aplicación simple desarrollada en JavaScript para gestionar una lista de nombres y sortear un "amigo secreto" entre los participantes.

## Índice

1. [Descripción](#descripción)
2. [Estructura del Código](#estructura-del-código)
3. [Uso](#uso)
4. [Requisitos](#requisitos)
5. [Código](#código)
6. [Mejoras Futuras](#mejoras-futuras)
7. [Contacto](#contacto)
8. [Licencia](#licencia)

## Descripción

La aplicación permite a los usuarios:

1. Agregar nombres a una lista.
2. Mostrar y actualizar la lista de amigos agregados.
3. Sortear un amigo secreto aleatorio entre los nombres de la lista.

## Estructura del Código

El código consta de tres funciones principales:

### 1. `agregarAmigo()`

Esta función:
- Obtiene el nombre ingresado en el campo de texto.
- Valida que el nombre no esté vacío y que no esté repetido.
- Agrega el nombre a la lista de amigos.
- Actualiza y muestra la lista de amigos en la interfaz.
- Limpia el campo de entrada tras agregar un nombre.

### 2. `actualizarLista()`

Esta función:
- Limpia la lista mostrada en pantalla.
- Itera sobre la lista de amigos y agrega cada nombre como un elemento `<li>` a la lista visible en la interfaz.

### 3. `sortearAmigo()`

Esta función:
- Valida que haya al menos un nombre en la lista.
- Selecciona un amigo al azar usando un índice aleatorio.
- Muestra el nombre del amigo secreto seleccionado en la interfaz.
- Limpia la lista visual de amigos tras realizar el sorteo.

## Uso

1. **Agregar amigos**:
   - Ingrese un nombre en el campo de texto y haga clic en el botón de agregar.
   - Si el campo está vacío o el nombre ya está en la lista, se mostrará una alerta.

2. **Mostrar la lista**:
   - La lista de nombres agregados se actualiza automáticamente y se muestra en la pantalla.

3. **Sortear un amigo secreto**:
   - Haga clic en el botón de sorteo.
   - Si la lista no está vacía, se mostrará el nombre del amigo secreto seleccionado al azar.
   - Si la lista está vacía, no se realizará el sorteo.

## Requisitos

Este proyecto está diseñado para ejecutarse en cualquier navegador moderno que soporte JavaScript.

## Código
Código desarrollado en JavaScript.
```javascript
let amigos = [];

function agregarAmigo(){
    const nombre = document.querySelector(`#amigo`).value.trim();

    if (nombre !== ""){
        amigos.push(nombre);
        actualizarLista();
    } else if (amigos.includes(nombre)) {
        alert("El nombre ya está en la lista.");
    } else {
        alert("Por favor, inserte un nombre.");
    }
    document.querySelector(`#amigo`).value = ``;
}

function actualizarLista(){
    let listaDeNombres = document.getElementById("listaAmigos");
    listaDeNombres.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let agregarLi = document.createElement("li");
        agregarLi.textContent = amigos[i];
        listaDeNombres.appendChild(agregarLi);
    }
}

function sortearAmigo(){
    if(amigos.length > 0){
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let mostraAmigoSecreto = document.getElementById("resultado");
        mostraAmigoSecreto.innerHTML = "";
        mostraAmigoSecreto.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    } else {
        console.log("No amigos");
    }
    document.getElementById("listaAmigos").innerHTML = "";
}
```
> [!WARNING]
> El programa esta en desarrollo, como tal podrían haber fallos en su ejecución.<br>
> Se agradece su comprensíon.

## Mejoras Futuras

1. Evitar ingresar nombres con números.
2. Introducir una función de reiniciar juego.
3. Agregar esilos con CSS a la lista de amigos.

## Contacto

¡Hola! Soy **Breyan Cordova**, el **desarrollador** detrás de este proyecto.

> 💻 [Mi GitHub](https://github.com/juanperez-dev) — Donde comparto mis proyectos.

## Licencia

Este proyecto fue proporcionado originalmente por Alura Latam y ha sido modificado como parte de un desafío de aprendizaje de JavaScript. Las modificaciones están licenciadas bajo la **Licencia MIT**.<br>

> [!CAUTION]
> La documentación de "Amigo Secreto" (por ejemplo, los archivos contenidos) pueden estar bajo licencia de Creative Commons.








