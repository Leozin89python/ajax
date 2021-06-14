
module.exports = application => {
    application.post('/insert',application.api.postData.resultado)
    application.get('/',application.api.getData.resultado)
    application.put('/update/:id',application.api.putData.resultado)
    application.delete('/delete/:id',application.api.deleteData.resultado)
}