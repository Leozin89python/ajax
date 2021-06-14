const ajax = async ()=>{
    const url = 'http://localhost:8081/server'
    const config = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
   await fetch(url,config)
            .then(response => response.json())
            .then(response => {
                response.map(
                    items =>{
                        let nomeBkd = items.nome
                        let promoBkd = items.promo
                        let precoBkd = items.preco

                        let nomeList = document.createElement('ul')
                        let promoList = document.createElement('ul')
                        let precoList = document.createElement('ul')

                        let nome = document.getElementById('nome')
                        let promo = document.getElementById('promo')
                        let preco = document.getElementById('preco')

                        nomeList.append(nomeBkd)
                        nome.append(nomeList)

                        promoList.append(promoBkd)
                        promo.append(promoList)

                        precoList.append(precoBkd)
                        preco.append(precoList)
                    })
            }).catch(err =>{
                alert('Error:' + err)
            })
}
ajax()

const slide1 = setInterval(()=>{
    $('.img-1').hide(10000)
               .show(10000)
},60000)

const slide2 = setInterval(function(){
    $('.img-2').hide(10000)
              .show(10000)
},50000)

const slide3 = setInterval(function(){
    $('.img-3').toggle(10000)
               .show(10000)
},36000)

const slide4 = setInterval(function(){
    $('.img-4').fadeIn(10000)
               .fadeOut(10000)
               .show(30000)
},12000)
