const express = require('express')
const cors = require('cors')

const app = express()
const path = require('path')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json'}))
app.use(cors())

// exemplo do uso do get
// http://localhost:3000/
app.get('/', (_req, res) => {
    res.statusCode = 200
    res.sendFile(path.join(__dirname, 'index.html'))
})

// POST -> serve para incluir dados no servidor
// curl -d "key=chave&key2=chave2" -X POST http://localhost:3000/api
app.post('/api', (req, res) => {
    console.log("Foi mandado : \n", req.body)
    _key = req.body.key
    _key2 = req.body.key2

    res.status(200).send({
        sucess: 'true',
        message: 'Ok correto...'
    })
})

const hostname = 'localhost'
const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Servidor rodando no http://${hostname}:${port}/\n>`))
