//http://127.0.0.1:5500/frontend/adm/adm.html

function back() {
    document.location.href = '../app/app.html'
}
function post(){
    let name = document.getElementById('name').value
    let department = document.getElementById('department').value
    let job = document.getElementById('job').value
    let salary = document.getElementById('salary').value

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
    let name = document.getElementById('name')
    let department = document.getElementById('department')
    let job = document.getElementById('job')
    let salary = document.getElementById('salary')

    name.value = ''
    department.value = ''
    job.value = ''
    salary.value = ''
}