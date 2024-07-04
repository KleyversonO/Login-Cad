//VALIDAÇÃO DE PREENCHIMENTO
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value
    let loginSenha = document.getElementById('loginSenha').value

    if(!loginEmail || !loginSenha){
        alert('Favor preencher todos os campos')
    }else{
        //alert("Campos preenchidos com sucesso")
        window.location.href = 'cadastro.html';
    }
}


//FUNÇÃO DE CRIAÇÃO DE ARRAY PARA ARMAZENAMENTO DE NOMES

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser)
        console.log(dadosLista);
    }else{
        alert("Favor, informe um nome")
}
}