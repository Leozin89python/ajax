async function request(){
    const url = 'http://localhost:8080/workers'
    const config = {
        method:'GET',
        status:200,
        cache:'default',
        mode:'cors'
    }
 await fetch(url,config)
                .then(responseEntity => responseEntity.json())
                .then(responseEntity =>{
                    responseEntity.map(workers =>{
                        let nameBkd     = workers.name
                        let workerIdBkd = workers.workerId
                        let jobBkd         = workers.job

                        let nameList     = document.createElement('ul')
                        let workerIdList = document.createElement('ul')
                        let jobList = document.createElement('ul')
                        
                        let name     = document.getElementById('name')
                        let workerId = document.getElementById('workerId')
                        let job      = document.getElementById('job')

                        nameList.append(nameBkd)
                        name.appendChild(nameList) 

                        workerIdList.append(workerIdBkd)
                        workerId.append(workerIdList)

                        jobList.append(jobBkd)
                        job.append(jobList)
                    })
                })
                .catch(err =>{
                    alert('Error:' + err)
                })
}
request()