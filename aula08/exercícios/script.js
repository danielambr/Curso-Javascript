function carregar(){
     var b = window.document.querySelector('body#fundo')
     var img = window.document.querySelector('img#imagem')
     var data = new Date()
     var hatual = window.document.querySelector('p#hatual')
     var hora = data.getHours()
     
     hatual.innerHTML = "Agora são " + data.getHours() + " horas."
          
     if (hora >= 5 && hora <= 12){
          //alert("manhã")
          img.src = 'img/manha.jpg'
          b.style.background = '#e2cd9f'
     }else if (hora > 12 && hora <= 18){
          //alert ("tarde")
          img.src = 'img/tarde.jpg'
          b.style.background = '#b9846f'
     }else {
          //alert("noite")
          img.src = 'img/noite.jpg'
          b.style.background = '#515154'
     }

}
