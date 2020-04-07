function contar(){

     let ini = document.querySelector('input#inicio')
     let fim = document.querySelector('input#fim')
     let pas = document.querySelector('input#passo')
     let res = document.querySelector('div#contagem')

     if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
          res.innerHTML = "Impossível contar!"
     }else{

          res.innerHTML = `Contando.. <br/>`
          let i = Number(ini.value)
          let f = Number(fim.value)
          let p = Number(pas.value)
          if (p <= 0){
               alert('Passo inválido! Considerando PASSO igual a 1')
               p = 1
          }
          if (i < f){
               for (let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`
               }
          }else{
               for (let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
               }
          }
          res.innerHTML += `\u{1F3C1}`
     }

}
