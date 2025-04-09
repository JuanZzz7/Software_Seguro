// Mostrar el popup al cargar la página
window.onload = function() {
    document.getElementById('loginPopup').classList.add('active');
};

// Cerrar el popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('loginPopup').classList.remove('active');
});