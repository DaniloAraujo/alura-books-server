const express = require('express')
const cors = require('cors')
const routerBooks = require('./routes/books.js')

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))

const port = 8000

app.use('/livros', routerBooks)

app.listen(port, () => {
   console.log('Port:: ', port)
})