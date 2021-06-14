
const url = 'http://localhost:8080/server'
fetch(url)
     .then(response => response.json())
     .then(response => {
         const data = response.map(form =>{
             let nameBck   = form.name
             let ageBck    = form.age
             let sexBck    = form.sex
             let jobBck    = form.job
             let adressBck = form.adress

             const nameList = document.createElement('ul')
             const ageList = document.createElement('ul')
             const sexList = document.createElement('ul')
             const jobList = document.createElement('ul')
             const adressList = document.createElement('ul')


             let name   = document.getElementById('name')
             let age    = document.getElementById('age')
             let sex    = document.getElementById('sex')
             let job    = document.getElementById('job')
             let adress = document.getElementById('adress')
            
             nameList.append(nameBck)
             name.append(nameList)

             ageList.append(ageBck)
             age.append(ageList)

             sexList.append(sexBck)
             sex.append(sexList)
             
             jobList.append(jobBck)
             job.append(jobList)

             adressList.append(adressBck)
             adress.append(adressList)
         })
         document.body.append(data)
     }).catch(err =>{
         alert('Error:' + err)
     })