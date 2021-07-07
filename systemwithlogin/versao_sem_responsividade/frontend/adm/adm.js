//login: adm, 1234

function back() {
    document.location.href = '../app/app.html'
}
function post(){
    let name = document.getElementById('name').value
    let department = document.getElementById('department').value
    let job = document.getElementById('job').value
    let salary = document.getElementById('salary').value

    if(  name == '' || name == null ||
         department == '' || department == null || 
         job == '' || job == null ||
         salary == '' || salary == null ) {
             
            let alerted =  alert('please, enter data and all form fields!') 
            let clean   = clear()
            
            return {  alerted, clean  }
        } 

        

    let data = {
            name,
            job,
            department,
            salary
    } 

    const url = 'http://localhost:3000/insert'

    const config = {
        method : 'POST',
        body :JSON.stringify(data),
        headers :{
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache :'default',
        status :201,
    }

    fetch(url,config)
                    .then(res => res.json())
                    .then(res => res)
                    .catch(err => console.log(err))
    clear()
}
function clear() {
    let id = document.getElementById('idGet')
    let name = document.getElementById('name')
    let department = document.getElementById('department')
    let job = document.getElementById('job')
    let salary = document.getElementById('salary')

    id.value = ''
    name.value = ''
    department.value = ''
    job.value = ''
    salary.value = ''
}
function clearFields() {
    let id = document.getElementById('idGet')
    let name = document.getElementById('name')
    let department = document.getElementById('department')
    let job = document.getElementById('job')
    let salary = document.getElementById('salary')

    id.value = ''
    name.value = ''
    department.value = ''
    job.value = ''
    salary.value = ''
}
function getById() {
    let id = document.getElementById('idGet').value
    const url = `http://localhost:3000/${id}`

    let config  = {
        method :'GET',
        cache  :'default',
        mode   :'cors',
        status :200
    }

    fetch(url, config)
                .then(res => res.json())
                .then(res => {
                    res.filter(e => {
                        if(e.id){

                        let nameBckd = e.name
                        let depBckd  = e.department
                        let jobBckd  = e.job 
                        let salBckd  = e.salary
                        
                        let name = document.getElementById('name').value = nameBckd
                        let department = document.getElementById('department').value = depBckd
                        let job = document.getElementById('job').value = jobBckd
                        let salary = document.getElementById('salary').value = salBckd

                     

                        }else{
                            return []
                        }
                    })
                })
}
document.oninput = addEventListener('input',() => {
        let id = document.getElementById('idGet').value
       if(id != '') {
            getById()
        }
})