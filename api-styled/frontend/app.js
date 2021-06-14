
let url = 'http://localhost:8080/server'
fetch(url).then(response => response.json())
          .then(response =>{
              const resp = response.map(
                  data =>{
                      let city = data.city
                      let country = data.country

                      let cityList = document.createElement('ul')
                      let countryList = document.createElement('ul')

                      cityList.append(city)
                      countryList.append(country)

                      let ct = document.querySelector('.ct')
                      let cy = document.querySelector('.cy')

                      ct.append( cityList)
                      cy.append( countryList)
                  }
              )
              document.body.append(resp)
          }).catch(err=>{
              alert('Error:' + err)
          })