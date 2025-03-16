let amigos = [];
function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    if (amigo != "") {
        amigos.push(amigo);
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
function atualizarLista(amigos) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Lista de amigos vazia, por favor insira um nome')
        return;
    } else {
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceSorteado];
        let resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = nomeSorteado;
    }
}