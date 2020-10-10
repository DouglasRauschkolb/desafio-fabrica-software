
const { Router } = require('express');
const controllers = require('../controllers/BookController');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/books', controllers.createBook);
router.get('/books', controllers.getAllBooks);
router.get('/books/:bookId', controllers.getBookById);
router.put('/books/:bookId', controllers.updateBook);
router.delete('/books/:bookId', controllers.deleteBook);

module.exports = router;