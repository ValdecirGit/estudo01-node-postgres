const pg = require('pg');
const client = new pg.Client({
    user: "postgres",
    password: "postgres",
    host: "0.0.0.0",
    port: 5432,
    database: "cursojava"

})

// conexão com o banco
//client.connect(); // abrir conexao
//client.query("select * from usuario") // executar query sql
//.then(results => { // jogar resultado da query no results
//     const resultado = results.rows; // jogar as linhas na variavel
//     console.table(resultado); // mostrar o resultado
//})
//.finally(() => client.end());

// postConexoes("Neia","123456");

deleteUsuario("caue");

// getConexoes();

async function getConexoes() {
    try {
        console.log("iniciando a conexão.");
        await client.connect();
        console.log("Conexão bem sucedida!");
        const resultado = await client.query("select * from usuario")
        console.table(resultado.rows); // mostrar o resultado
    }
    catch (ex) {
        console.log("Ocorreu um erro na getConexoes! erro:" + ex)
    }
    finally {
        await client.end();
        console.log("Cliente desconectado.")
    }
}

async function postConexoes(usuario, senha) {
    try {
        console.log("iniciando a conexão.");
        await client.connect(); // iniciar conexao
        console.log("Conexão bem sucedida!");
        await client.query('insert into usuario("usuario","senha") values ('+"'"+usuario+"', '"+senha+"');")
        console.log("valor inserido na tabela");

        const resultado = await client.query("select * from usuario")
        console.table(resultado.rows); // mostrar o resultado
    }
    catch (ex) {
        console.log("Ocorreu um erro na postConexoes! erro:" + ex)
    }
    finally {
        await client.end();
        console.log("Cliente desconectado.")
    }
}


async function deleteUsuario(usuario) {
    try {
        console.log("iniciando a conexão.");
        await client.connect(); // iniciar conexao
        console.log("Conexão bem sucedida!");
        await client.query("delete from usuario where usuario = '"+usuario+"';")
        console.log("usuario deletado na tabela");

        const resultado = await client.query("select * from usuario")
        console.table(resultado.rows); // mostrar o resultado
    }
    catch (ex) {
        console.log("Ocorreu um erro na postConexoes! erro:" + ex)
    }
    finally {
        await client.end();
        console.log("Cliente desconectado.")
    }
}
