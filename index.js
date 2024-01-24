let saldoVitorias = soma(101, 0)


if (saldoVitorias <= 10){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Ferro." )
}else if (saldoVitorias <= 20){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Bronze." )
}else if (saldoVitorias <= 50){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Prata." )
}else if (saldoVitorias <= 80){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Ouro." )
}else if (saldoVitorias <= 90){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Diamante." )
}else if (saldoVitorias <= 100){
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Lendário." )
}else {
    console.log ("O Herói tem o saldo de " + saldoVitorias + " vitórias e está no nivel de Imortal." )
}

function soma(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    return saldoVitorias    
}