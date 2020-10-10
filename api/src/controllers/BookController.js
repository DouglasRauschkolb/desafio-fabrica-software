const models = require("../models");

const createBook = async (req, res) => {
  try {
    const book = await models.Books.create(req.body);
    return res.status(201).json({
      book
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await models.Books.findAll();
    return res.status(200).json({ books });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getBookById = async (req, res) => {
  try {
    const { bookId } = req.params;

    console.log(bookId);
    
    const book = await models.Books.findOne({
      where: { id: bookId }
    });
    if (book) {
      return res.status(200).json({ book });
    }
    return res.status(404).send("Book with the specified ID does not exists");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const [updated] = await models.Books.update(req.body, {
      where: { id: bookId }
    });
    if (updated) {
      const updatedBook = await models.Books.findOne({ where: { id: bookId } });
      return res.status(200).json({ post: updatedBook });
    }
    throw new Error("Book not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const deleted = await models.Books.destroy({
      where: { id: bookId }
    });
    if (deleted) {
      return res.status(204).send("Book deleted");
    }
    throw new Error("Book not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook
};