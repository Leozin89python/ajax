
function requestNav(){
    
    let url = 'http://localhost:8081/server'
    fetch(url)
            .then(response => response.json())
            .then(response =>{
                    response.map(mrkt =>{
                    let marketText =  mrkt.msg

                    let marketTextList = document.createElement('ul')
                    
                    let promotion = document.getElementById('promotion')

                    marketTextList.append(marketText)
                    promotion.append(marketTextList)
                })
            }).catch(err =>{
                alert('Error:' + err)
            })
}
requestNav()


function requestMain(){
    
    let url = 'http://localhost:8080/server'

    fetch(url)
            .then(response => response.json())
            .then(response =>{
                  response.map(data =>{
                      let systembkd  = data.system
                      let servicebkd = data.service
                      let pricebkd   = data.price

                      let  systemList  = document.createElement('ul')
                      let  serviceList = document.createElement('ul')
                      let  priceList   = document.createElement('ul')

                      let system    = document.getElementById('system')
                      let service   = document.getElementById('service')
                      let price     = document.getElementById('price')

                      systemList.append(systembkd)
                      system.append(systemList)

                      serviceList.append(servicebkd)
                      service.append(serviceList)

                      priceList.append(pricebkd)
                      price.append(priceList)
                      
                  })
            }).catch(err =>{
                alert('Error:' + err)
            })
}
requestMain()
