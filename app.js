const express = require("express")
const routerBooks = require('./routes/books.js')

const app = express()
app.use(express.json())

const port = 8000

app.use('/livros', routerBooks)

app.listen(port, () => {
   console.log('Port:: ', port)
})