import { Router } from 'express'
import * as controllers from '../controllers/books.js'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/books', controllers.getBooks)
router.get('/books/:id', controllers.getBook)
router.post('/books', restrict, controllers.createBook)
router.put('/books/:id', restrict, controllers.updateBook)
router.delete('/books/:id', restrict, controllers.deleteBook)

export default router