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
    document.getElementById('cpfForm').addEventListener('submit', function(event){
        event.preventDefault();
     
    }
    );
    


    if (!loginEmail || !loginSenha) {
        alert('Favor preencher todos os campos');
    } else {
        alert('Campos preenchidos com sucesso');

        window.location.href = 'cadastro.html';
    }
}


// FUNÇÃO PARA VERIFICAÇÃO DE VALIDADE DE E-MAIL INFORMADO
/*function verificaEmail() {
    // Verifica se e-mail é válido
    
    return emailRegex.test(emailUser);
}
*/
//Função de criação do array para armazenamento de dados 
var dadosLista = [];
var emailLista = [];
var CPFlista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;
    let CpfUser = document.getElementById('CpfUser').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Chama função de verificação de e-mail
    //verificaEmail();

    if (nomeUser && validarCPF(CpfUser) && (emailRegex.test(emailUser))) {
        dadosLista.push(nomeUser);
        emailLista.push(emailUser);
        CPFlista.push(CpfUser);
        //console.log(dadosLista);
        criarLista();
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
        document.getElementById('CpfUser').value = "";
    } else {
        if (!validarCPF(CpfUser)) {
            alert("Coloque um CPF válido");        
        } else {
                alert("Favor informar o nome e e email");
            }
        }
    }
// FUNÇÃO DE CRIAÇÃO DE LISTA
// Esse código tem a função de fazer uma tabela no projeto para que armazene e mostre o nome do usuário, e suas ações. Também à a variável responsável por pegar o último nome escrito para que ele fique amostra. Também tem o botão com a fumção para excluir e editar
//lenght é uma propriedade que calcula o tamanho da lista. tr e td é a propriedade responsável por parte do processo de criação de lista e tabela
function criarLista() {
    let tabela = "<tr><th>Nome Usuário</th><th>Email</th><th>CPF</th><th>Ações</th></tr>";
    for (let i = 0; i < dadosLista.length; i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + emailLista[i] + "</td><td>" + CPFlista[i] + "</td><td><button onclick='excluir(" + (i + 1) + ")'>Excluir</button> <button onclick='editar(" + (i + 1) + ")'>Editar</button></td></tr>";
    }
    document.getElementById('tabela').innerHTML = tabela;
}
// FUNÇÃO PARA EXCLUIR NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EXLUIR UM NOME JA ADICIONADO.
// array splice tem a função de adicionar um novo elemento enquanto remove outros elementos antigos
function excluir(i) {
    dadosLista.splice((i - i), 1); //Splice é uma das maneiras mais úteis de manipular arrays em JavaScript. Ele permite remover ou adicionar elementos em uma posição específica de um array
    emailLista.splice((i - i), 1);
    CPFlista.splice((i - i), 1);
    document.getElementById('tabela').deleteRow(i);
}
//FUNÇÃO PARA EDITAR O NOME DA LISTA
// TEM A FUNÇÃO DE COLOCAR UM BOTÃO NA LISTA PARA QUE VOCÊ POSSA EDITAR UM NOME JA ADICIONADO.
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    document.getElementById("emailUser").value = emailLista[(i - 1)];
    document.getElementById("CpfUser").value = CPFlista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}
// TEM A FUNÇÃO DE VALIDAR O EMAIL ANTES DE ENVIA-LO PARA O PROJETO.

//Validação do CPF do projeto


function validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
 
    // Estrutura de decisão para verificar quantidade de dígitos e se todos os digitos são iguais
    if(cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }
   
    let soma = 0;
    let resto;
 
    // Validando o primeiro digito verificador
    for(let i=1;i <= 9;i++){
        soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    }
 
    resto = (soma * 10) % 11;
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
    if(resto !== parseInt(cpf.substring(9, 10))){
        return false;
    }
 
    soma = 0;
    // Validando o segundo digito verificador
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1, i) * (12 - i));
    }
 
    resto = (soma * 10) % 11;
 
    if((resto === 10) || (resto === 11)){
        resto = 0;
    }
   
    if(resto !== parseInt(cpf.substring(10, 11))){
        return false;
    }
 
    return true;
}



