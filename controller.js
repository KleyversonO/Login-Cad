//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if (nomeUser) {
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        document.getElementById('nomeUser').value = "";

    } else {
        alert("Favor, informe um nome")
    }
}
// Validação de preenchimento
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        alert('Campos preenchidos com sucesso');

        window.location.href = 'cadastro.html';
    }
}

// FUNÇÃO PARA VERIFICAÇÃO DE VALIDADE DE E-MAIL INFORMADO
function verificaEmail() {
    // Verifica se e-mail é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailUser);
}

//Função de criação do array para armazenamento de dados 
var dadosLista = [];
var emailLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    // Chama função de verificação de e-mail
    verificaEmail();

    if (nomeUser && emailUser) {
        dadosLista.push(nomeUser);
        emailLista.push(emailUser);
        //console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    }
    else {
        alert("Favor informar nome e e-mail");
    }
}

// FUNÇÃO DE CRIAÇÃO DE LISTA
// Esse código tem a função de fazer uma tabela no projeto para que armazene e mostre o nome do usuário, e suas ações. Também à a variável responsável por pegar o último nome escrito para que ele fique amostra. Também tem o botão com a fumção para excluir e editar
//lenght é uma propriedade que calcula o tamanho da lista. tr e td é a propriedade responsável por parte do processo de criação de lista e tabela
function criarLista() {
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Email</th><th>Ações</th></tr>";
    for (let i = 0; i <= (dadosLista.length - 1); i++) { // A propriedade length tem como responsabilidade retornar a quantidade de caracteres de uma string ou o tamanho de um array. Caso a string ou o array esteja vazio, é retornado o valor 0.
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td>  <button onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> <button onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}
// FUNÇÃO PARA EXCLUIR NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EXLUIR UM NOME JA ADICIONADO.
// array splice tem a função de adicionar um novo elemento enquanto remove outros elementos antigos
function excluir(i) {
    dadosLista.splice((i - i), 1); //Splice é uma das maneiras mais úteis de manipular arrays em JavaScript. Ele permite remover ou adicionar elementos em uma posição específica de um array
    emailLista.splice((i - i), 1);
    document.getElementById('tabela').deleteRow(i);
}
//FUNÇÃO PARA EDITAR O NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EDITAR UM NOME JA ADICIONADO.
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emailLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
// TEM A FUNÇÃO DE VALIDAR O EMAIL ANTES DE ENVIA-LO PARA O PROJETO.
