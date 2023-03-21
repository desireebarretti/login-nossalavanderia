// para chamar a funcao logar escrevemos onclick no input enviar
function logar(){
    // irá receber o que vem no input login... value para buscar o que foi digitado
    let login = document.getElementById("login_input_usuario").value;
    let senha = document.getElementById("login_input_senha").value;

    if(login == "admin" && senha == "1234"){
        // encaminhando para a home
        location.href = "home.html";
    } else {
        alert("Insira um login e senha válidos!");
    }
}