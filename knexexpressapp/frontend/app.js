function requestItems(){
    const url = 'http://localhost:3000/'
    let _METHODS = {
        method :'GET',
        cors :'cors',
        status :200,
        cache :'default'
    }

    fetch(url,_METHODS)
            .then(response => response.json())
            .then(response => {
                     response.forEach(item =>{
                        let itemIdBack = "id:" + item.id
                        let itemNomeBack = "nome:" + item.nome
                        let itemCategoriaBack = "categoria:" + item.itemCategoria
                        let itemPrecoBack = "preço:" + item.preco
                        let itemQuantidadeBack = "quantidade:" + item.quantidade
                        let itemDistribuidorBack = "distribuidor:" + item.distribuidor
                        
                        let itemIdUl = document.createElement('ul')
                        let itemNomeUl = document.createElement('ul')
                        let itemCategoriaUl = document.createElement('ul')
                        let itemQuantidade =  document.createElement('ul')
                        let itemPrecoUl = document.createElement('ul')
                        let itemDistribuidorUl = document.createElement('ul')

                        itemIdUl.append(itemIdBack)
                        itemNomeUl.append(itemNomeBack)
                        itemCategoriaUl.append(itemCategoriaBack)
                        itemDistribuidorUl.append(itemDistribuidorBack)
                        itemQuantidade.append(itemQuantidadeBack)
                        itemPrecoUl.append(itemPrecoBack)

                        itemIdUl.style.marginTop = '40px'

                        let dados = document.getElementById('dados')
                        dados.appendChild(itemIdUl)
                        dados.append(itemNomeUl)
                        dados.append(itemCategoriaUl)
                        dados.append(itemDistribuidorUl)
                        dados.append(itemQuantidade)
                        dados.append(itemPrecoUl)
                        
                        
                        
                })
            })
            .catch(err => alert('erro:' + err))
}
requestItems()


/* contém erros!
function insertItems(){
    const url = 'http://localhost:3000/insert'
    let _METHODS = {
        method :'POST',
        cors :'cors',
        status :204,
        cache :'default'
    }
    fetch(url,_METHODS)
                    .then(request => request.text())
                    .then(request =>{
                        let nome = document.getElementById('nome')
                        let inseriNome = request.value
                        nome = inseriNome

                        let categoria = document.getElementById('categoria')
                        let inseriCategoria = request.value
                        categoria = inseriCategoria

                        let quantidade = document.getElementById('quantidade')
                        let inseriQuantidade = request.value
                        quantidade = inseriQuantidade   
                        
                        let distribuidor = document.getElementById('distribuidor')
                        let inseriDistribuidor = request.value 
                        distribuidor = inseriDistribuidor 
                        
                        let preco = document.getElementById('preco')
                        let inseriPreco = request.value 
                        preco = inseriPreco 

                    }).then(request => JSON.parse(request))
                    .catch(err => alert('err:' + err))
} */

