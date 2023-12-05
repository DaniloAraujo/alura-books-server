const { Router } = require("express");
const { getBooks, getBookForId, postBooks, changeBooks, removeBook } = require("../controller/books")

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBookForId)

router.post('/', postBooks)

router.patch('/:id', changeBooks)

router.delete('/:id', removeBook)

module.exports = router