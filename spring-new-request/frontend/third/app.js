async function request(){
    let url = 'http://localhost:8080/address'
    const config = {
        method:'GET',
        mode:'cors',
        status:200,
        cache:'default'
    }
 await  fetch(url, config)
                .then(responseEntity => responseEntity.json())
                .then(responseEntity =>{
                    responseEntity.map(address =>{
                        let cityBkd    = address.city
                        let ufBkd      = address.uf
                        let countryBkd = address.country

                        let cityList     = document.createElement('ul')
                        let ufList       = document.createElement('ul')
                        let countryList  = document.createElement('ul')
                     

                        let city = document.getElementById('city')
                        let uf      = document.getElementById('uf')
                        let country = document.getElementById('country')

                        cityList.append(cityBkd)
                        city.append(cityList)
                        
                        ufList.append(ufBkd)
                        uf.append(ufList)

                        countryList.append(countryBkd)
                        country.append(countryList)
                    })
                })
                .catch(err=>{
                    alert('Error:' + err)
                })
}
request() 



async function requestFuncionario(){
    let url = 'http://localhost:8080/workers'
    const config = {
        method:'GET',
        mode:'cors',
        status:200,
        cache:'default'
    }
  await fetch(url, config)
                    .then(responseEntity => responseEntity.json())
                    .then(responseEntity =>{
                        responseEntity.map(funcionario =>{
                            let nameBkd  = funcionario.name
                            let nameList = document.createElement('ul')
                            let name     = document.getElementById('name')

                            nameList.append(nameBkd)
                            name.append(nameList)
                        })
                    })
                    .catch(err =>{
                        alert('Error:' + err)
                    })
}
requestFuncionario()
