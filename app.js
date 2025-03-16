//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    console.log('Botão esta funcioando');
    if (amigo != "") {
        amigos.push(amigo);
        console.log(amigos);
        limparCampo();
    }
    else {
        alert('Por favor, insira um nome.');
    }
}
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = "";
}
