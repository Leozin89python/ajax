function retornar(){
        window.location.href = './loja.html'
}


function persistencia() {
        const url = 'http://localhost:3000/cliente/insert'
    
        //rz,mr,tf,el,ec,qt
        let razao      = document.getElementById('rz').value
        let mercadoria = document.getElementById('mr').value
        let telefone   = document.getElementById('tf').value
        let email      = document.getElementById('el').value
        let endereco   = document.getElementById('ec').value
        let quantidade = document.getElementById('qt').value

        let dados = []
        dados.push([razao,mercadoria,telefone, email,endereco, quantidade])


            const _METHODS = {
                method :'Post',
                body :JSON.stringify({ dados }),
                headers :{
                    'Content-type' :'application/json'
                }
            }        

        fetch(url, _METHODS)
                        .then(response => response.json())
                        .then(response => response)
                        .catch(err => alert('erro:' + err))

        clean()
}  


function clean(){
        let razao      = document.getElementById('rz')
        let mercadoria = document.getElementById('mr')
        let telefone   = document.getElementById('tf')
        let email      = document.getElementById('el')
        let endereco   = document.getElementById('ec')
        let quantidade = document.getElementById('qt')

        razao.value = ''
        mercadoria.value = ''
        telefone.value = ''
        email.value = '' 
        endereco.value = ''
        quantidade.value = ''
}

document.onclick = addEventListener('click',(e)=>{
         e.preventDefault()
})