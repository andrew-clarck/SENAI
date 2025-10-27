import express from "express"

const app = express()

const users = []

app.use(express.json())

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.status(201).json(req.body)
})

app.listen(3000, () => console.log("Servidor Rodando"))