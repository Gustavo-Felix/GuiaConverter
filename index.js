const fs = require('fs');

fs.writeFile('./gustavo.felix', "Novo conteúdo do arquivo!", (err) => {
    if (err) {
        console.log('Ocorreu uma falha durante o salvamento')
    }
});