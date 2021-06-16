
module.exports = app => {
    app.post('/insert',app.api.postData.resultado)
    app.get('/',app.api.getData.resultado)
    app.put('/update/:id',app.api.putData.resultado)
    app.delete('/delete/:id',app.api.deleteData.resultado)

   
    app.post('/cliente/insert', app.api.postData.resultadoCliente)
    app.get('/cliente', app.api.getData.resultadoCliente)
    app.put('/cliente/update/:id', app.api.putData.resultadoCliente) 
    app.delete('/cliente/delete/:id',app.api.deleteData.resultadoCliente)
}