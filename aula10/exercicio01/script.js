var vetor = []
var cont = 0

function add(){
     var num = document.querySelector('input#numero')
     var tab = document.querySelector('select#addelemento')
     var n = Number(num.value)
     var c = 0

     if (n < 1 || n > 100){
          alert("[ERRO] Valor inválido! Informe outro valor")
     }else{
          if (vetor.length == 0){
               tab.innerHTML = ''
               vetor.push(n)
               let item = document.createElement('option')
               item.text = `Valor ${n} adicionado`
               item.value = `tab${cont}`
               tab.appendChild(item)
          }else{
               
               for(let i = 0; i < vetor.length; i++){
                    if (n == vetor[i]){  
                         alert(`O número ${n} já está na lista!`)       
                         c += 1
                    }
               }
               
               if (c == 0){
                    vetor.push(n)
                    let item = document.createElement('option')
                    item.text = `Valor ${n} adicionado`
                    item.value = `tab${cont}`
                    tab.appendChild(item)
               }
          }
     }
     cont += 1
}

function fim(){
     var resp = document.querySelector('div#resposta')
     resp.innerHTML += `<b> Estatística </b><br/>`
     resp.innerHTML += `Número de elementos ${vetor.length} da lista <br/>`
     let cont = soma = media = maior = 0
     let menor = 101
     for(let i in vetor){
          if (vetor[i] > maior){
               maior = vetor[i]
          }
          if (vetor[i] < menor){
               menor = vetor[i]
          }
          soma += vetor[i]
          cont += 1
     }
     media = soma / cont
     resp.innerHTML += `O maior elemento da lista = ${maior} <br/>`
     resp.innerHTML += `O menor elemento da lista = ${menor} <br/>`
     resp.innerHTML += `Resultado da soma dos elementos da lista = ${soma} <br/>`
     resp.innerHTML += `Resultado da media dos elementos da lista = ${media}`
}