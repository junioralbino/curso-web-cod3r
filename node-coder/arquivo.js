const fs =  require('fs');


const caminho = __dirname + '/arquivo.js'


const conteudo = fs.readFileSync(caminho, 'utf-8')



console.log(conteudo)