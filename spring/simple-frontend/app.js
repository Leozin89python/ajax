function ajaxSpring(){
    const url = 'http://localhost:8080/clients'
    const config = {
        method:'GET',
        mode:'cors',
        cache:'default'
    }
    fetch(url,config)
        .then(response => response.json())
        .then(response =>{
            response.map(clients =>{
                let nomeBkd     = clients.nome
                let sobrenomekd = clients.sobrenome 
                let idadeBkd    = clients.idade
                let sexoBkd     = clients.sexo
                let telefoneBkd = clients.telefone
                
                let nomeList = document.createElement('ul')
                let sobrenomeList = document.createElement('ul')
                let idadeList = document.createElement('ul')
                let sexoList = document.createElement('ul')
                let telefoneList = document.createElement('ul')

                let nome = document.querySelector('.nome')
                let sobrenome = document.querySelector('.sobrenome')    
                let idade = document.querySelector('.idade')    
                let sexo = document.querySelector('.sexo')    
                let telefone = document.querySelector('.telefone') 

                nomeList.append(nomeBkd)
                nome.append(nomeList)

                sobrenomeList.append(sobrenomekd)
                sobrenome.append(sobrenomeList)

                idadeList.append(idadeBkd)
                idade.append(idadeList)

                sexoList.append(sexoBkd)
                sexo.append(sexoList)

                telefoneList.append(telefoneBkd)
                telefone.append(telefoneList)
            })
        })
        .catch(err =>{
            alert('Error:' + err)
        })
}
ajaxSpring()
