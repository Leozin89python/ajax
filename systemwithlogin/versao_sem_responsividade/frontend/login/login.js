 document.onload = addEventListener('click',(e) => {
     e.preventDefault()
 })

 
 function load() {
     let loginInput = document.getElementById('ioLogin').value
     let senhaInput = document.getElementById('ioSenha').value

    let fire = firebase.database()
                       .ref('login')
                       .on('value',(snapshot) =>{
                let login = snapshot.val().nome
                let senha = snapshot.val().senha
               
                if(loginInput != login || senhaInput != senha){
                    alert('please, enter with a user and password valid!')
                }else{
                    document.location.href = '../app/app.html'
                }

                clean()
    })

}


function clean() {
    let loginInput = document.getElementById('ioLogin')
    let senhaInput = document.getElementById('ioSenha')

    loginInput.value = ''
    senhaInput.value = ''
 }