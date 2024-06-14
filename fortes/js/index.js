const adm = {
    usuario: "Administrador",
    senha: "adm123"
}
const user = {
    usuario: "Donatario01",
    senha: "dona123"
}

function logar(event) {
    event.preventDefault();
    let user_entry = document.getElementById("email").value;
    let pass_entry = document.getElementById("senha").value;
    switch(true) {
        case user_entry == adm.usuario && pass_entry == adm.senha:
            window.open("./fortes/admin/dashboard.html", "_self");
            break;
        case user_entry == user.usuario && pass_entry == user.senha:
            window.open("./fortes/donatario/editais.html", "_self");
            break;
        case user_entry === "" || pass_entry === "":
            alert("Preencha todos os campos!");
            break;
        default:
            alert("Usuário ou senha inválidos!");
            break;
    }
}
document.getElementById('login-form').addEventListener('submit', logar);

// login.addEventListener("click", function() {
    
// });

// // TROCAR CONTEUDO DA PÁGINA
// link = document.querySelectorAll(".link");
// link.forEach((item) => {
//     item.addEventListener("click", () => {
//         let page = item.getAttribute("data-page");
//         window.open(page, "_self");
//     });
// });