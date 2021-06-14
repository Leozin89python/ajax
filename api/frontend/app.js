
let url = 'http://localhost:8080/server'
fetch(url).then(response => response.json())
          .then(response =>{
              const doc = response.map(
                resp => {
                    let city = resp.city
                    let country = resp.country

                    let data = document.querySelector('.data')
                    data.append('city:' + city + ',')
                    data.append('country:' + country + ',')
                }   
              )
              document.body.append(doc)
          }).catch(err =>{
              alert(err)
          })
