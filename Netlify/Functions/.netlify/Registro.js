function mostrarPopupRegistro() {
    document.getElementById("popupRegistro").classList.add("active");
}

function cerrarPopupRegistro() {
    document.getElementById("popupRegistro").classList.remove("active");
}

function registrarUsuario() {
    const usuario = document.getElementById("nuevoUsuario").value.trim();
    const contrasena = document.getElementById("nuevaContrasena").value.trim();

    if (usuario === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[usuario]) {
        alert("El usuario ya existe.");
        return;
    }

    usuarios[usuario] = contrasena;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente.");

    document.getElementById("nuevoUsuario").value = "";
    document.getElementById("nuevaContrasena").value = "";
    cerrarPopupRegistro();
}