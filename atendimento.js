// const fila = ["luiz", "anna", "roberta"];

// function verificarVazio() {
//     if (fila.length == 0) {
//         console.log("Fila Vazia")

//     } else {
//         console.log(fila)
//     }
// }

// function atenderCliente() {
//     let i = 0
//     let tamanho = fila.length
//     while (i < tamanho) {
//         let nome = fila.shift();
//         console.log("Atendendo estes clientes : " + nome);
//         verificarVazio();
//         i++;
//     }
// }

// atenderCliente()

//const inicial = fila.shift()
//console.log("atendendo o primeiro: " + inicial)
//console.log(fila)

let fila = []
function adicionarCliente() {
    let nome = prompt("Digite um nome do cliente: ");   
    if (/\d/.test(nome)) {
        alert("Erro o nome nao pode conter numeros")
        return;
    }
    let confirma = confirm(`Deseja adicionar o cliente ${nome} ?`)
    if (nome) {
        fila.push(nome); // Existe dado dentro do nome? se tiver adiciona a fila
    } else {
        alert("Voce nao digitou um nome!!")
    }
}

function AtenderCliente() {
    if (fila.length > 0) {
        let nome = fila.shift()


        alert(`Cliente ${nome} atendido!`)
    } else {
        alert("Fila Vazia!")
    }
}



