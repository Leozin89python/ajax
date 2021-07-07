function out() {
   document.location.href = '../login/login.html' 
}
function adm() {
    document.location.href = '../adm/adm.html' 
}
function getPeople(){
    const url = 'http://localhost:3000'
    const config = {
        method:'GET',
        status:200,
        cache:'default'
    }
    fetch(url,config).then(res => res.json())
                     .then(res =>{
                         res.map(e => {

                            let idBck   = e.id
                            let nameBck = e.name
                            let depBckd = e.department
                            let jobBck  = e.job
                            let salBck  = e.salary

                            let id = document.getElementById('id')
                            creator(id,idBck)
                            let name = document.getElementById('name')
                            creator(name,nameBck)
                            let department = document.getElementById('department')
                            creator(department,depBckd)
                            let job = document.getElementById('job')
                            creator(job, jobBck)
                            let salary = document.getElementById('salary')
                            creator(salary,salBck)

                         })
                     })
                     .catch(error => {
                        let table = document.getElementById('table')
                        table.style.display = 'none'
                        let err   = document.getElementById('err')
                        err.style.display = 'flex' 
                        console.log(error)
    })
}
document.onload = addEventListener('load',() => {
    getPeople()
})
function creator(positioned,e) {
    let elUl = document.createElement('ul')
    elUl.append(e)
    positioned.append(elUl)
}