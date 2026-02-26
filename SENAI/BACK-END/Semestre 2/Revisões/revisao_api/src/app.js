import express from "express"

const app = express()

app.use(express.json())

const musicas = [
    {
        id: 233,
        titulo: "No Surprises",
        artista: "Radiohead",
        genero: "Alt Rock",
        ano_publicacao: 1997
    }
]

function buscarMusica(id) {
    return musicas.findIndex(musica => {
        return musica.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("CRUD Músicas")
})

app.get("/musicas", (req, res) => {
    res.status(200).json(musicas)
})

app.get("/musicas/:id", (req, res) => {
    const index = buscarMusica(req.params.id)

    res.status(200).json(musicas[index])
})

app.post("/musicas", (req, res) => {
    musicas.push(req.body)
    res.status(201).json(musicas)
})

app.put("/musicas/:id", (req, res) => {
    const index = buscarMusica(req.params.id)

    musicas[index].titulo = req.body.titulo
    musicas[index].artista = req.body.artista
    musicas[index].genero = req.body.genero
    musicas[index].ano_publicacao = req.body.ano_publicacao

    res.status(200).json(musicas[index])
})

app.delete("/musicas/:id", (req, res) => {
    const index = buscarMusica(req.params.id)
    musicas.splice(index, 1)

    res.status(200).json(musicas)
})

export default app