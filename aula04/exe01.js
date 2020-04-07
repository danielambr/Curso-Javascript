function exe01(){
    //alert("Olá, mundo!")
    //alert(window.document.charset)
    //alert(window.navigator.appName)
    //alert(window.document.URL)

    var corpo = window.document.body
    corpo.style.background = "lightgreen"

    var p1 = window.document.getElementsByTagName('p')[0]
    window.alert(p1.innerHTML)

    p1.style.color = 'blue'

    var artigo = window.document.getElementsByTagName('h1')[1]

    window.alert(artigo.innerHTML)

    var m = window.document.getElementById('msg')
    m.style.background = 'white'

    window.document.getElementById('msg').innerText = 'Estou alterando o conteúdo no JavaScript pela ID!'

    var d = window.document.getElementsByClassName('msg')[0]

    d.style.background = 'black'

    var g = window.document.querySelector('p.msg')

    g.style.color = 'red'

}

/* ÁRVORE DOM

             Window
         /      |     \
       /        |       \
location    document    history
                |
               html
               /  \
           head     body
          /  |          \
        /    |          section
    meta    title          |
                      header  p  p  article
                       |      |
                       h1     b
------------------------------------------
Navegação entre os elementos
Selecionar elementos
Acesso por:
    Marca (tag)
    por ID
    por Nome
    por Classe
    por Seletor

*/