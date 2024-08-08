//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').value="";

    }else{
        alert("Favor, informe um nome")
}
}
// Validação de preenchimento
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos');
    }else{
        alert('Campos preenchidos com sucesso');
       
        window.location.href = 'cadastro.html';
    }
}
 
//Função de criação do array para armazenamento de dados
 
var dadosLista = [];
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
    }
    else{
        alert("Favor informar o nome");
    }
}
// FUNÇÃO DE CRIAÇÃO DE LISTA
// Esse código tem a função de fazer uma tabela no projeto para que armazene e mostre o nome do usuário, e suas ações. Também à a variável responsável por pegar o último nome escrito para que ele fique amostra. Também tem o botão com a fumção para excluir e editar
//lenght é uma propriedade que calcula o tamanho da lista. tr e td é a propriedade responsável por parte do processo de criação de lista e tabela
function criarLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++){ // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>editar</button>  <button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button>  </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
//FUNÇÃO PARA EXCLUIR NOME DA LISTA
// ESSA CÓDIGO TEM A FUNÇÃO DE APAGAR 
// array splice tem a função de adicionar um novo elemento enquanto remove outros elementos antigos

function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}

// FUNÇÃO PARA EDITAR NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EDITAR UM NOME JA ADICIONADO.
function editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
