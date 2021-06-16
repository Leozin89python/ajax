
module.exports = app => {
    app.post('/insert',app.api.urls.entrada)
    app.get('/',app.api.urls.saida)
}