// Array

let num = [1,2,3,4,5] // declaração do array

console.log(`Conteúdo do vetor = ${num}`)

console.log(` `)

console.log(`Conteúdo da 4ª posição do vetor = ${num[4]}`) // exibindo o elemento da 4ª posição do array

console.log(` `)

num[5] = 6 // add elemento

num.push(7) // add elemento

console.log(`Conteúdo do vetor = ${num}`)

console.log(` `)

console.log(`Numero de elementos do vetor = ${num.length}`) // tamanho do array

console.log(` `)

num = [7,2,5,1,3,4,6]

num.sort() // ordena vetor

console.log(`Conteúdo do vetor ordenado = ${num}`) // vetor ordenado

console.log(` `)

for (let i = 0; i < num.length; i++){
    if (i == 0){
        console.log(`Conteúdo da posição ${i} (zero) do vetor = ${num[i]}`)
    }else{
        console.log(`Conteúdo da ${i}ª posição do vetor = ${num[i]}`)
    }
}
console.log(` `)

console.log(`Forma simplificada de utilizar o comando FOR para exibir o conteúdo de um vetor `)
// forma simplificada de utilizar o for para array
for (let i in num){
    console.log(num[i])
}

console.log(` `) 

// método para localizar a chava de um elemento localizado no vetor
console.log(`Em qual posição do vetor está o número 5?`) 
console.log(`O número 5 está na ${num.indexOf(5)}ª posição. `)

console.log(` `) 

let pos = num.indexOf(8)
if(pos == -1){ // Se o valor não estiver no vetor o retorno do indexOf será '-1' 
    console.log(`O valor não foi encontrado no vetor`)
}else{
    console.log(`O número está na ${num.indexOf(8)}ª posição. `)
}

