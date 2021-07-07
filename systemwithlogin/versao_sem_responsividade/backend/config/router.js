
module.exports = app => {
    app.post('/insert',app.api.post.insertPeople)
    app.get('/',app.api.get.getPeople)
    app.get('/:id',app.api.getById.getPeopleById)
    app.put('/update/:id',app.api.put.updatePeople)
    app.delete('/delete/:id',app.api.delete.deletePeople)
}