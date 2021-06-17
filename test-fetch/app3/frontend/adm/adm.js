function retornar(){
    window.location.href = '../loja/app.html'
}

function insercao() {

    let item   = document.getElementById('item').value
    let categ  = document.getElementById('categ').value
    let preco  = document.getElementById('preco').value
    let qtde   = document.getElementById('qtde').value

    const url = 'http://localhost/3000/insert'

    const _METHODS = {
        method  : 'POST',
        status :201,
        cache :'default',
        headers :{
            'content-type':'application/json'
        }
        ,body :JSON.stringify({
            item,
            categ,
            preco,
            qtde
        })
    }

    fetch(url, _METHODS)
                    .then(response => response.json())
                    .then(response => response)
                    .catch(err => alert('erro:' + err))
}

document.onclick = addEventListener('click' ,(e) => {
    e.preventDefault()
})