/* Tratando e lançando erros (Try, catch and throw) 
try {
    // É executada quando não há erros
} catch (e) {
    // É executada quando há erros
} finally {
    // Sempre
}

*/

// try {
//     console.log('Abri um arquivo')
//     console.log('Manipulei o arquivo e gerou erro')
//     console.log('Fechei o arquivo')
    
//     try{
//         console.log(b)//b not defined...
//     } catch (e) {
//         console.log('Deu erro')
//     } finally {
//         console.log('Também sou FINALLY.')
//     }
    
// } catch (e) {
//     console.log('Tratando o erro')
// } finally {
//     console.log('FINALLY: Eu sempre sou executado')
// }

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false  
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {  
    console.log(e)
} finally {
    console.log('Tenha um bom dia.')
}
