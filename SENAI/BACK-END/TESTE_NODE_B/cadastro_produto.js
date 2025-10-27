import express from "express"

const app = express()

const produtos = []

app.use(express.json())

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})

app.post("/produtos", (req, res) => {
    produtos.push(req.body)

    res.status(201).json(req.body)
})

app.listen(3000, () => console.log("Servidor Funcionando"))