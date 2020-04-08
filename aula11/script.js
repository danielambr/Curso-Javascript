// Exemplo Array
let num = [1,2,3]
console.log(typeof(num))
console.log(num)

// Objeto

// Cada chave, diferentemente do Array, receberá um nome ao invés de um número. Além de poder adicionar uma função como elemento
let amigo = {
    nome:'Chico',
    idade:'6',
    sexo:'m',
    peso:25,
    engordar(p=0){
        this.peso += p
    }
}
console.log(typeof(amigo))
console.log(amigo)

amigo.engordar(2)
console.log(`${amigo.nome} pesa agora ${amigo.peso}kg`)

