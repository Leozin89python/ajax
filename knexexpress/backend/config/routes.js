
module.exports = app => {
    app.post('/insert',app.api.postData.resultado)
    app.get('/',app.api.getData.resultado)
    app.put('/update/:id',app.api.putData.resultado)
    app.delete('/delete/:id',app.api.deleteData.resultado)
}