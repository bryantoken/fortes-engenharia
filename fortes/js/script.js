function openDash() {
window.open("dashboard.html", "_self");
}
function openInsc() {
window.open("inscricoes.html", "_self");
}
function openEdi() {
window.open("editais.html", "_self");
}
function openProj() {
window.open("projetos.html", "_self");
}

function showOffCanvas() {
    var offcanvas = document.querySelector('.sidebar').innerHTML;
     document.getElementById('offcanvasContent').innerHTML = offcanvas;
    document.querySelector('.offcanvas').style.display = 'block';
}
function closeOffCanvas() {
    document.querySelector('.offcanvas').style.display = 'none';
}
function logout() {
    window.open("../../../index.html", "_self");
}