// funções

console.log(`A soma de 1 + 2 = ${soma(1,2)}`)

function soma(x, y){
    return x + y
}

parImpar(5)

function parImpar(n){
    if(n % 2 == 0){
        console.log(`O número é par`)
    }else{
        console.log(`O número é ímpar`)
    }
}

// Parâmetros opcionais

console.log(``)

console.log(`${soma(1)}`)

function soma(x=0, y=0){
    return x + y
}

console.log(``)

// Variáveis podem receber funções
let c = function(x){
    return x*2
}

console.log(`${c(5)}`)

console.log(``)

console.log(`${fatorial(5)}`)

/*
function fatorial(n){
    let f = 1
    for (let i = n; i >= 1; i--){
        f = f * i
    }
    return f
}
*/

function fatorial(n){
    if (n == 1){
        return 1    
    }else{
        return n * fatorial(n-1)
    }
}
