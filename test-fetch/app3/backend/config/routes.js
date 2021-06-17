
module.exports = app => {
    app.post('/insert', app.api.data.entrada)
    app.get('/', app.api.data.saida)
}