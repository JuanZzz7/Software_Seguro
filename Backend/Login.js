document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página

    const usuario = document.getElementById("loginUsername").value.trim();
    const contrasena = document.getElementById("loginPassword").value.trim();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    const resultado = document.getElementById("authResult");

    if (usuarios[usuario] && usuarios[usuario] === contrasena) {
       resultado.innerText = `Inicio de sesión exitoso. Bienvenido, ${usuario}.`;

        resultado.style.color = "green";
        
        // Guardar el usuario activo
        localStorage.setItem("usuarioActivo", usuario);
    
        // Mostrar el nombre
        mostrarUsuarioActivo();
    
        // Ocultar popup
        document.getElementById("loginPopup").classList.remove("active");
    } else {
        resultado.innerText = "Usuario o contraseña incorrectos.";
        resultado.style.color = "red";
    }
    

    // Limpiar campos
    document.getElementById("loginUsername").value = "";
    document.getElementById("loginPassword").value = "";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("loginPopup").classList.remove("active");
});

function mostrarUsuarioActivo() {
    const usuario = localStorage.getItem("usuarioActivo");
    if (usuario) {
        document.getElementById("usuarioActual").innerText = usuario;
        document.getElementById("usuarioActivoBox").style.display = "block";
    }
}

function cerrarSesion() {
    localStorage.removeItem("usuarioActivo");
    document.getElementById("usuarioActivoBox").style.display = "none";
    document.getElementById("loginPopup").classList.add("active");
}

window.onload = function () {
    const usuario = localStorage.getItem("usuarioActivo");
    if (usuario) {
        mostrarUsuarioActivo();
    } else {
        document.getElementById("loginPopup").classList.add("active");
    }
}
