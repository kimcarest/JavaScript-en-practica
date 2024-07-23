

const formulario = document.querySelector("#formulario")

const ingresoNombre = document.querySelector("#nombre")
const errorNombre = document.querySelector('.errorNombre')

const ingresoAsunto = document.querySelector("#asunto")
const errorAsunto = document.querySelector('.errorAsunto')

const ingresoMensaje = document.querySelector("#mensaje")
const errorMensaje = document.querySelector('.errorMensaje')

const boton = document.querySelector("#boton")

const resultado = document.querySelector('.resultado')

const regexNombre = /^[a-zA-Z\s]+$/;
const regexAsunto = /^[a-zA-Z\s]+$/;
const regexMensaje = /^[a-zA-Z\s]+$/;

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    resultado.innerHTML = "";
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";

    const nombre = ingresoNombre.value
    const asunto = ingresoAsunto.value
    const mensaje = ingresoMensaje.value

    if (!regexNombre.test(nombre)) {
        errorNombre.innerHTML = "El Nombre es Requerido"
        return
    }
    if (!regexAsunto.test(asunto)) {
        errorAsunto.innerHTML = "El Asunto es Requerido"
        return
    }
    if (!regexMensaje.test(mensaje)) {
        errorMensaje.innerHTML = "El Mensaje es Requerido"
        return
    }
    if (!regexMensaje.test(mensaje) === false && !regexAsunto.test(asunto) === false && !regexNombre.test(nombre) === false) {
        resultado.innerHTML = "Mensaje enviado con éxito!!!"
    }

})