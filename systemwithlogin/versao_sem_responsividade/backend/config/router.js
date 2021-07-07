
module.exports = app => {
    app.get('/',app.api.get.getPeople)
    app.post('/insert',app.api.post.insertPeople)
    app.put('/update/:id',app.api.put.updatePeople)
    app.delete('/delete/:id',app.api.delete.deletePeople)
}