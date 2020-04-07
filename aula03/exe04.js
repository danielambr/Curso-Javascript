function exe04(){
    var n1 = Number(prompt("Insira a primeira nota do aluno: "))
    var n2 = Number(prompt("Insira a segunda nota do aluno: "))
    var n3 = (n1 + n2) /2

    alert(`${n3 >= 7.0 ? "Aprovado" : "Recuperação"}`)

    /*
    Operador Ternário

    ?  - é exibido caso o resultado de uma expressão lógica seja verdadeiro
    :  - é exibido caso o resultado da expressão lógica seja falsa

    Exemplo

        média >= 7 ? "Aprovado" : "Recuperação"
    
    */



}