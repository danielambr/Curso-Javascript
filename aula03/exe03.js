function exe03(){
    var n1 = 2
    var n2 = 3
    var n3 = 5
 
    alert(`    ${n3 == n1 + n2}\n
    ${!n3 == n1 + n2}\n
    ${n3 > n1 && n2 > n1}\n
    ${n3 > n1 && n1 == n2}\n
    ${n3 == n1 && n1 < n2}\n

    ${n3 > n1 || n2 > n1}\n
    ${n3 > n1 || n2 < n1}\n
    ${n3 == n1 || n2 < n1}\n

    `)

    /*
    Operadores lógicos

    !  - Negação 
    && - e (conjunção)
    || - ou (disjunção)

    -----------------------

    Precedência entre operadores aritméticos, relacionais e lógicos

    1º - ()  **  / ...
    2º -  >  <  >= ...  
    3º - !
    4º - &&
    5º - ||S
    
    */



}