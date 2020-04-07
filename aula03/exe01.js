function exe01(){
    var n1 = Number(prompt("Informe um número: "))
    var n2 = Number(prompt("Informe um número: "))
    s = n1 + n2
    subt = n1 - n2
    m = n1 * n2
    d = n1 / n2
    r = n1 % n2
    p = n1 ** n2
    t = (p / n1) + (m * (s - n2)) 
    alert(`    ${n1} + ${n2} = ${s}\n
    ${n1} - ${n2} = ${subt}\n
    ${n1} x ${n2} = ${m}\n
    ${n1} / ${n2} = ${d}\n
    Resto da divisão de ${n1} por ${n2} = ${r}\n
    ${n1} elevado a ${n2} = ${p}\n
    Resultado da expressão: (${p} / ${n1}) + (${m} * (${s} - ${n2})) = ${t}\n
    Incremento de ${n1++}++ = ${n1}
    Decremento de ${n1--}-- = ${n1}
    `)

    /*
    
    Precedência dos operadores aritméticos
    1º - ()
    2º - **
    3º - *  /  %
    4º - +  -
    
    */



}