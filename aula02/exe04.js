function exe04(){
    var n1 = Number(prompt("Informe um numero real: "))

    //alert(`${n1.toFixed(2).replace('.',',')}`)
    
    alert(`${n1.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)

    // Dollar = USD, Euro = EUR

}