const {gets, print} = require('../src/utils/utils');
let nome = ["David", "Gabriel", "Matheus"]
let xp = [2000, 10000, 7000]

console.log("Quantos novos herois voce quer adicionar?")
let qtd = parseInt(gets());

for(let i = 0; i < qtd; i++){
    let contador = i+1
    console.log("Qual o nome do " + contador + " Heroi?")
    nome.push(gets())
    console.log("E qual o nivel de XP desse heroi?")
    xp.push(gets())
}

function decisao (x, min, max){
    if (xp[x] >= min && xp[x] <= max){
        return true
    }
    else{
        return false
    }
}

for(let i = 0; i < nome.length; i++){
    let nivel = ""
    if(decisao(i,0,1000)){
        nivel = "Ferro"
    }
    else if (decisao(i,1001,2000)){
        nivel = "Bronze"
    }
    else if (decisao(i,2001,5000)){
        nivel = "Prata"
    }
    else if (decisao(i,5001,7000)){
        nivel = "Ouro"
    }
    else if (decisao(i,7001,8000)){
        nivel = "Platina"
    }
    else if (decisao(i,8001,9000)){
        nivel = "Ascendente"
    }
    else if (decisao(i,9001,10000)){
        nivel = "Imortal"
    }
    else{
        nivel = "Radiante"
    }
    console.log("O Herói de nome " + nome[i] + " está no nível de " + nivel)
}
