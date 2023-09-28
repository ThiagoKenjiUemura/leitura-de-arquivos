const fs = require('fs/promises');

const modificarArquivo = (async(req,res)=>{
    const texto = 'tudo bem?';

 await fs.writeFile('./src/b.txt', texto);
res.json('ok');
});

const alterarArquivo = (async(req,res)=>{
    const{nome, idade} = req.body;
try {
    const teste = await fs.readFile('./src/usuarios.json');

    const pessoas = JSON.parse(teste);

    pessoas.push({nome,idade});

    const pessoasStringify = JSON.stringify(pessoas);


    await fs.writeFile('./src/usuarios.json', pessoasStringify);

    return res.json('pessoa cadastrada com sucesso');
} catch (erro){ 
    return res.json(`Deu erro: ${erro.message}`)
} finally{
    console.log('isso sempre sera executado');
}
    });

module.exports = {
    modificarArquivo, 
    alterarArquivo
}