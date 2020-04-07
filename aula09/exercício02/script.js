function gerar(){

     let num = document.querySelector('input#numero')
     let tab = document.querySelector('select#resposta')

     if(num.value.length == 0 ){
          alert("Por favor, digite um número!")
     }else{
          let n = Number(num.value)
          
          tab.innerHTML = ''
          
          for (let c = 1; c <= 10; c++){
               let item = document.createElement('option')
               item.text = `${c} x ${n} = ${c*n}`
               item.value = `tab${c}`
               tab.appendChild(item)
          }
          
     }

}
