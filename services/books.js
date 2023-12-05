const fs = require('fs')

function getAllBooks() {
   return JSON.parse(fs.readFileSync('books.json'))
}

function getBookId(id) {
   const listBooks = JSON.parse(fs.readFileSync('books.json'))
   const filterBooks = listBooks.filter(item => item.id === id)[0]
   return filterBooks
}

function insertBooks(newBook) {
   const listBooks = JSON.parse(fs.readFileSync('books.json'))
   const newListBooks = [...listBooks, newBook]

   fs.writeFileSync('books.json', JSON.stringify(newListBooks))
}

function patchBooks(change, id) {
   let listBooks = JSON.parse(fs.readFileSync('books.json'))
   const indexChange = listBooks.findIndex(item => item.id === id)
   const changeContent = { ...listBooks[indexChange], ...change }
   listBooks[indexChange] = changeContent

   fs.writeFileSync('books.json', JSON.stringify(listBooks))
}

function deleteBook(id) {
   let listBooks = JSON.parse(fs.readFileSync('books.json'))
   const newList = listBooks.filter(item => item.id !== id)

   fs.writeFileSync('books.json', JSON.stringify(newList))
}

module.exports = {
   getAllBooks,
   getBookId,
   insertBooks,
   patchBooks,
   deleteBook
}