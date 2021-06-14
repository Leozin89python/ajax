const url = './db.json'
fetch(url).then(response => response.json())
          .then(estados =>{
              const items = estados.reduce(
                  (html,estado)=> html + `<li>${estado.estado}</li>`
              )
              document.body.insertAdjacentHTML('beforeend', `<ul>${items}</ul>`)
              //console.log(items)
          })