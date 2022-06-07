const { response } = require('express')
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.urlencoded({ 
    extended: true 
}))

app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))
app.use(cors())

app.get('/', (_req, res) => {
    res.statusCode = 200
    res.sendFile(path.join(__dirname, 'index.html'))
})

function errorHandler(error, res) {
    if (!error) return 'pablo'

    console.log('Erro ao achar a pagina')
    res.end(JSON.stringify({
        error: "page not found"
    }))
}


const hostname = 'localhost'
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor rodando no http://${hostname}:${port}/\n>`)
})