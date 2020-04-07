
function area(){
var a = window.document.getElementById('area')

a.addEventListener('mouseover',over)
a.addEventListener('mouseout',out)
a.addEventListener('mousedown',down)

function over(){
    a.innerText = "Em cima!"
    a.style.background = "red"
}
function out(){
    a.innerText = "Saiu!"
    a.style.background = "green"
}
function down(){
    a.innerText = "Pressionou!"
    a.style.background = "blue"
}
}

// Exercício 02

function somar(){
    var tn1 = window.document.getElementById('tn1')
    var tn2 = window.document.querySelector('input#tn2')
    var res = window.document.querySelector('p#resp')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2

    res.innerHTML = `A soma de ${n1} e ${n2} é igual a <b>${s}</b>`



}