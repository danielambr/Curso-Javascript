function hora(){
    var h = window.document.querySelector('p#hora')
    var x = new Date()
    var y = x.getDay()
    h.innerHTML = x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds()

    /* 
    0 - Domingo
    1 - Segunda-feira
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
    */

   switch (y){
        case 0:
            h.innerHTML += "<br/> Domingo"
            break
        case 1:
            h.innerHTML += "<br/> Segunda-feira"
            break
        case 2:
            h.innerHTML += "<br/> Terça-feira"
            break
        case 3:
            h.innerHTML += "<br/> Quarta-feira"
            break
        case 4:
            h.innerHTML += "<br/> Quinta-feira"
            break
        case 5:
            h.innerHTML += "<br/> Sexta-feira"
            break
        case 6:
            h.innerHTML += "<br/> Sábado"
            break
   }

}