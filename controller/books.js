const { getAllBooks, getBookId, insertBooks, patchBooks, deleteBook } = require('../services/books')

function getBooks(req, res) {
   try {
      const books = getAllBooks()
      res.send(books)
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function getBookForId(req, res) {
   try {
      const id = req.params.id

      if (id && Number(id)) {
         const book = getBookId(id)
         res.send(book)
      } else {
         res.status(422)
         res.send('Id inválido.')
      }
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function postBooks(req, res) {
   try {
      const body = req.body
      if (body.nome) {
         insertBooks(body)
         res.status(201)
         res.send('Post realizado com sucesso!')
      } else {
         res.status(422)
         res.send('Campo "nome" obrigatório.')
      }
      
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function changeBooks(req, res) {
   try {
      const id = req.params.id

      if (id && Number(id)) {
         const body = req.body
         patchBooks(body, id)
         res.send(`Livro do id: ${id} alterado com sucesso.`)
      } else {
         res.status(422)
         res.send('Id inválido.')
      }
      
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

function removeBook(req, res) {
   try {
      const id = req.params.id

      if (id && Number(id)) {
         deleteBook(id)
         res.send('Livro removido com sucesso.')
      } else {
         res.status(422)
         res.send('Id inválido.')
      }
      
   } catch (error) {
      res.status(500)
      res.send(error.message)
   }
}

module.exports = {
   getBooks,
   getBookForId,
   postBooks,
   changeBooks,
   removeBook
}