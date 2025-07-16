const fs = require('fs');

function modificarArquivo(nome, curso, categoria){
    fs.readFile('./usuario.json', {encoding: 'utf-8'}, (err, dados) => {
        if(err){
            console.log("Um erro aconteceu!")
        } else {
            var conteudo = JSON.parse(dados) // Texto para objeto Javascript(JSON)
            console.log(conteudo)
            conteudo.nome = nome
            conteudo.curso = curso
            conteudo.categoria = categoria
            console.log(conteudo)

            fs.writeFile('./usuario.json', JSON.stringify(conteudo), (err) => { // Objeto Javascript(JSON) para texto
                if (err) {
                    console.log("Ocorreu um erro")
                }
                
            }) 
        }
    });
}

modificarArquivo("José", "Formação Node", "Node.js");