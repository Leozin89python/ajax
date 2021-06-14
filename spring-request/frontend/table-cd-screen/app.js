async function request(){
    const url = 'http://localhost:8080/cd'
    const config = {
        method:'GET',
        mode:'cors',
        cache:'default',
        status:200
    }
  await fetch(url, config)
            .then(responseEntity => responseEntity.json())
            .then(responseEntity =>{
                responseEntity.forEach(response =>{
                    
                    let cityBkd = response.city
                    let ufBkd   = response.uf
                    let countryBkd = response.country
                    
                    let cityList    = document.createElement('ul')
                    let ufList      = document.createElement('ul')
                    let countryList = document.createElement('ul')  
                    
                    let city    = document.getElementById('city')
                    let uf      = document.getElementById('uf')
                    let country = document.getElementById('country')

                    cityList.append(cityBkd)
                    city.append(cityList)

                    ufList.append(ufBkd)
                    uf.append(ufList)

                    countryList.append(countryBkd)
                    country.append(countryList)
                })

            }).catch(err =>{
                alert('Err:' + err)
            })
}
request()