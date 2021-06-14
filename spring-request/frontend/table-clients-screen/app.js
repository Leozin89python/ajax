async function request(){
    const url = 'http://localhost:8080/clients'
    const config = {
        method:'GET',
        mode:'cors',
        cache:'default',
        status:200
    }
 await fetch(url,config)
                .then(responseEntity => responseEntity.json())
                .then(responseEntity =>{
                    responseEntity.forEach(response =>{
                            
                            let cnpjBkd        = response.cnpj
                            let portBkd        = response.port
                            let fantasyNameBkd = response.fantasyName

                            let cnpjList        = document.createElement('ul')
                            let portList        = document.createElement('ul')
                            let fantasyNameList = document.createElement('ul')
                    
                            let cnpj            = document.getElementById('cnpj')
                            let port            = document.getElementById('port')
                            let fantasyName     = document.getElementById('fantasyName')


                            cnpjList.append(cnpjBkd)
                            cnpj.append(cnpjList)

                            portList.append(portBkd)
                            port.append(portList)

                            fantasyNameList.append(fantasyNameBkd)
                            fantasyName.append(fantasyNameList)
                    })

                })
                .catch(err =>{
                    alert('Error:'+ err)
                })
}
request()