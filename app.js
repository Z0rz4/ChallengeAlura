//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

function adicionarAmigo(){
    let input = document.querySelector('input');
    input.setAttribute('autocomplete','off');

    if(input != ""){
        listaNomes.push(input.value);
        atualizaLista();
        limpaCampo();
    } else {
        alert("Por favor, insira um nome.");
    }

}

function limpaCampo(){
    let campoInput = document.querySelector('input');
    campoInput.value = "";
}

function atualizaLista(){
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
    for(i = 0;i <= listaNomes.length - 1;i++){
       listaDeAmigos.innerHTML += `<li> ${listaNomes[i]} </li>`;
    }
}

function sortearAmigo(){
    let AmigoSelecionado = document.getElementById('resultado');
    let amigos = Math.floor(Math.random() * listaNomes.length);
    console.log(amigos.toString());
    AmigoSelecionado.innerHTML = `<li>${listaNomes[amigos]}</li>`;
}