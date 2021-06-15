function request() {
    const url = 'http://localhost:3000'
    const   _METHODS = {
        cache  :'default',
        method :'GET',
        status :200
    }
    fetch(url,_METHODS)
                    .then(produtos => produtos.json())
                    .then(produtos => {
                        produtos.map(mercadoria =>{
                            //id,item,categoria,descricao,distribuidor,quantidade,preco 
                            let titulo = '_PRODUTO'
                            let idBack = 'ID:'+ mercadoria.id 
                            let itemBack = 'ITEM:'+  mercadoria.item 
                            let categoriaBack = 'CATEGORIA:' + mercadoria.categoria 
                            let descricaoBack = 'DESCRIÇÃO:'+ mercadoria.descricao 
                            let distribuidorBack = 'DISTRIBUIDOR:' + mercadoria.distribuidor 
                            let quantidadeBack   = 'QUANTIDADE:' + mercadoria.quantidade 
                            let precoBack   = 'PREÇO:' + mercadoria.preco + 'R$ unidade'
                            let fazerPedido = 'FAZER PEDIDO'
                            


                            let conteinerMercadoria = document.createElement('div')
                            
                            let tituloH2 = document.createElement('h2')
                            tituloH2.append(titulo) 
                            let idH4 = document.createElement('h4')
                            idH4.append(idBack)
                            let itemH5 = document.createElement('h5')
                            itemH5.append(itemBack)
                            let categoriaStg = document.createElement('strong')
                            categoriaStg.append(categoriaBack)
                            let descricaoParag = document.createElement('p')
                            descricaoParag.append(descricaoBack)
                            let distribuidorParag = document.createElement('p')
                            distribuidorParag.append(distribuidorBack)
                            let quantidadeParag = document.createElement('p')
                            quantidadeParag.append(quantidadeBack)
                            let precoParag = document.createElement('p')
                            precoParag.append(precoBack)
                            let butaoPedido = document.createElement('button')
                            butaoPedido.append(fazerPedido)
                            

                            conteinerMercadoria.append(tituloH2)
                            conteinerMercadoria.append(idH4)
                            conteinerMercadoria.append(itemH5)
                            conteinerMercadoria.append(categoriaStg)
                            conteinerMercadoria.append(descricaoParag)
                            conteinerMercadoria.append(distribuidorParag)
                            conteinerMercadoria.append(quantidadeParag)
                            conteinerMercadoria.append(precoParag)
                            conteinerMercadoria.append(butaoPedido)

                            butaoPedido.addEventListener('click', () =>{
                                window.location.href = './compras.html'
                            })

                            let conteiner = document.querySelector('.card')
                            conteiner.append(conteinerMercadoria)
                        })
                    })
                    .catch(err => alert('erro:' + err))
}

request()


function buscaPor(){
    let busca = document.getElementById('busca').value 
    const url = 'http://localhost:3000'
    const   _METHODS = {
        cache  :'default',
        method :'GET',
        status :200
    }
    fetch(url, _METHODS)
                    .then(produtos => produtos.json())
                    .then(produtos => {
                        produtos.map(mercadoria =>{
                            //id,item,categoria,descricao,distribuidor,quantidade,preco 
                            if(busca === mercadoria.item){
                                alert(
                                    'id:' + mercadoria.id +',' 
                                        + 'item:' + mercadoria.item + ','   
                                             + 'categoria:' + mercadoria.categoria + ','
                                                 + 'distribuidor:' + mercadoria.distribuidor + ','
                                                    + 'quantidade:' + mercadoria.quantidade + ','
                                                        + 'preco :' + mercadoria.preco  
                                            ) 
                            }else if(busca != mercadoria.item){
                                return []
                            }
                            else{
                                alert('produto não encontrado!')
                            }
                        })
                    })
                    .catch(err => console.log(err))
                   
}

document.onchange = addEventListener('change',()=>{
    let busca = document.getElementById('busca').value   
    if(busca){
        buscaPor()
   }
})

