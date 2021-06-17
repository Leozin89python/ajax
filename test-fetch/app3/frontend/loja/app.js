//Mock
let nomeAuth  = 'admin'
let senhaAuth = 1234

const _URL = 'http://localhost/3001'




function test() {
    let busca = document.getElementById('bc').value
    let ler   = document.getElementById('rd')

    ler.append(busca)
}






function requisicao() {
    const card = document.getElementById('card')
    const url = 'http://localhost:3000'

    _METHODS = {
        method :'GET',
        status : 200,
        cors   :'cors'
    }   
    
    fetch(url, _METHODS)
                    .then(response => response.json())
                    .then(response => {
                        response.map(e => {
                            let idBk    = e.id
                            let itemBk  = e.item
                            let precoBk = e.preco
                            let catBk   = e.categ

                            let idSt  = document.createElement('strong')
                            idSt.append(idBk)
                            let itemH5  = document.createElement('h5')
                            itemH5.append(itemBk)
                            let precoH6  = document.createElement('h6')
                            precoH6.append(precoBk)
                            let catH6  = document.createElement('h6')
                            catH6.append(catBk)
                            
                            let conteiner = document.createElement('span')
                            conteiner.append(idSt)
                            conteiner.append(itemH5)
                            conteiner.append(precoH6)
                            conteiner.append(catH6)

                            card.append(conteiner)
                        })
                    })
                    .catch(err => alert('erro:' + err))

}



    
function buscar() {
    let ler   = document.getElementById('rd')
    let busca = document.getElementById('bc').value
    const url = 'http://localhost:3000'

    _METHODS = {
        method :'GET',
        status : 200,
        cors   :'cors'
    }   

    fetch(url, _METHODS)
    .then(response => response.json())
    .then(response => {
        response.map(e => {
                if(busca ===  e.item){
                    ler.append(e.id)
                    ler.append(',')
                    ler.append(e.item)
                    ler.append(',')
                    ler.append(e.preco)
                    ler.append(',')
                    ler.append(e.categ)
                }else if(busca != e.item){
                    limparBusca()
                    return []
                }
        })
    })
    .catch(err => alert('erro:' + err))
}






function autenticar() {
    const nome      = document.getElementById('nome').value
    const senha     = document.getElementById('senha').value


    if(nome == nomeAuth && senha == senhaAuth){
        window.location.href = '../adm/adm.html'
    }else {
        alert('insira um nome e senha válidos!')
        limparEmailESenha()
    }
}






function logar() {
    const conteiner = document.getElementById('login')
    const main = document.getElementById('mn')
    conteiner.style.visibility = 'visible'
    main.style.overflowY       = 'hidden'
}





function limpar(e) {
    let busca = document.getElementById('bc')
    let ler   = document.getElementById('rd')

    busca.value = ''
    ler.value = ''

    window.location.reload()
}




function limparBusca() {
    let busca = document.getElementById('bc')
    busca.value = ''
}






function limparEmailESenha() {
    const nome      = document.getElementById('nome')
    const senha     = document.getElementById('senha')

    nome.value  = ''
    senha.value = ''
} 





document.onchange = addEventListener('change',()=>{
    let busca = document.getElementById('bc').value
    if(busca){
        buscar()
        limparBusca()
    }
})





document.onload = addEventListener('load' ,() =>{
    requisicao()
    const conteiner = document.getElementById('login')
    conteiner.style.visibility = 'hidden'
})
