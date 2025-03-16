//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    console.log('Botão esta funcioando');
    if (amigo != "") {
        amigos.push(amigo);
        console.log(amigos);
        limparCampo();
        atualizarLista(amigos);
}
    else {
        alert('Por favor, insira um nome.');
    }
}
function limparCampo() {
    amigo = document.querySelector('input');
    amigo.value = "";
}
function atualizarLista (amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0 ; i < amigos.length ; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
    console.log('sortear vazio');
    alert('Lista de amigos vazia, por favor insira um nome')
    return;
} else {
    console.log('sortear não vazio');
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indiceSorteado];
    console.log(nomeSorteado);
    let resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = nomeSorteado;
}
}