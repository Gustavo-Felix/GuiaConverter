const fs = require('fs');

var conteudo;

fs.readFile('./gustavo.felix', {encoding: 'utf-8'}, (erro, dados) => {
    if (erro) {
        console.log('Ocorreu uma falha ao ler o arquivo')
    }
    else {
        console.log(dados)
        conteudo = dados
        console.log(conteudo)
    }
});