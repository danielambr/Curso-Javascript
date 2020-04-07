// Utilizar o node
// Instalar a extensão Node Exec no Visual Studio Code para executar o código em js

/* Exemplo 01

var vel = 40.5
console.log(`A velocidade do carro é de ${vel} km/h`)
if (vel > 60){
    console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
}else{
    console.log(`Você está dentro da velocidade permitida.`)
}
console.log(`Dirija sempre usando cinto de segurança!`)

*/

/* Exemplo 02

var país = 'EUA'

console.log(`Vivendo no país ${país}`)
if (país == 'Brasil'){
    console.log(`Você é Brasileiro!`)
}else{
    console.log(`Você é estrangeiro!`)
}

*/

function calcula(){
    var textvel = window.document.querySelector('input#textvel')
    var resultado = window.document.querySelector('div#resultado')
    var vel = Number(textvel.value)

    resultado.innerHTML = `<p> Sua velocidade atual é de <b> ${vel} </b> km/h </p>`
    if (vel > 60){
        resultado.innerHTML += `<p> Você ultrapassou o limite de velocidade. MULTADO! </p>`
    }else{
        resultado.innerHTML += `<p> Você está dentro do limite de velocidade. </p>`
    }
    resultado.innerHTML += `<p> Dirija sempre com cinto de segurança! </p>`

}


function verifica(){
        var t = window.document.getElementById('textnac')
        var r = window.document.querySelector('div#resultado')
        
        //r.innerHTML = `<p> Seu país de origem é o(a) <b> ${t.value.toUpperCase()} </b>.</p>`
        // "Seu país de origem é o(a) " + (t.value).toUpperCase() + ".<br/>"

        if(t.value == 'Brasil' || t.value == 'brasil'){
            r.innerHTML = `<p> Seu país de origem é o(a) <b> ${t.value.toUpperCase()}</b>. Você é brasileiro. </p>`
        }else{
            r.innerHTML = `<p> Seu país de origem é o(a) <b> ${t.value.toUpperCase()}</b>. Você é extrangeiro. </p>`        }
}

