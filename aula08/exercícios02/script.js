
function verifica(){
     var data = new Date()
     var ano = data.getFullYear()
     var fano = window.document.querySelector('input#tano')
     var resultado = window.document.querySelector('div#resultado')
     var img = window.document.createElement('img')
     img.setAttribute('id', 'imagem')

     if(fano.value.length == 0 || Number(fano.value) > ano){
          alert('[ERRO] o ano informado está incorreto! Verifique o valor informado e tente novamente.')
     }else{
          var radio = window.document.getElementsByName('genero')
          var idade = ano - Number(fano.value)
          var gênero = ''

          if(radio[0].checked){
               gênero = "homem"
               if (idade >= 0 && idade < 12){
                   img.setAttribute('src', 'img/criancam.jpg')
               }else if(idade < 21){
                    img.setAttribute('src', 'img/adolem.jpg')
               }else if(idade < 50){
                    img.setAttribute('src', 'img/adultm.jpg')
               }else{
                    img.setAttribute('src', 'img/idosom.jpg')
               }
          }else{
               gênero = "mulher"
               if (idade >= 0 && idade < 12){
                    img.setAttribute('src', 'img/criancaf.jpg')
               }else if(idade < 21){
                    img.setAttribute('src', 'img/adolef.jpg')
               }else if(idade < 50){
                    img.setAttribute('src', 'img/adultf.jpg')
               }else{
                    img.setAttribute('src', 'img/idosaf.jpg')
               }
          }          

          resultado.style.textAlign = 'center'
          resultado.innerHTML = `Detectamos o ${gênero} com ${idade} anos`
          resultado.appendChild(img)

     
     }

}


