![banner](https://github.com/user-attachments/assets/cc72bddb-5576-4828-9341-d083ccdd2129)

 <p align="left">
    <img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-red"> 
    <img src="https://img.shields.io/badge/version-1.0.0-orange">
    <img src="https://img.shields.io/badge/license-MIT-blue">
    <img src="https://img.shields.io/badge/support-active-brightgreen">
    <img src="https://img.shields.io/github/stars/BreyanCordova/Amigo-Secreto?style=social">
 </p>

   
# Amigo Secreto

Este proyecto es una aplicación simple desarrollada en JavaScript para gestionar una lista de nombres y sortear un "amigo secreto" entre los participantes.

## Índice

1. [Descripción](#descripción)
2. [Estructura del Código](#estructura-del-código)
   - [1. agregarAmigo()](#1-agregaramigo)
   - [2. actualizarLista()](#2-actualizarlista)
   - [3. sortearAmigo()](#3-sortearamigo)
3. [Uso](#uso)
4. [Requisitos](#requisitos)
5. [Código](#código)
6. [Mejoras Futuras](#mejoras-futuras)
7. [Autor](#autor)

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

## Mejoras Futuras

1. Evitar ingresar nombres con números.
2. Introducir una función de reiniciar juego.
3. Agregar esilos con CSS a la lista de amigos.

## Autor

¡Hola! Soy **Breyan Cordova**, el **desarrollador** detrás de este proyecto.

- 💻 [Mi GitHub](https://github.com/juanperez-dev) — Donde comparto mis proyectos.

## License

This project was originally provided by Alura Latam and has been modified by Breyan Cordova as part of a JavaScript learning challenge. The modifications are licensed under the MIT License.












