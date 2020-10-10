import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('books').then(response => {
      setBooks(response.data.books);
    }) }, []);

  async function handleDeleteBook(id){

    try {
      await api.delete(`books/${id}`);

      setBooks(books.filter(book => book.id !== id ));
    } catch (err) {
      alert('Erro ao deletar o livro, tente novamente.')
    }
  }

  return (
    <div className="books-container">
      <header>
        <Link className="button" to="/books/new">Cadastrar novo livro</Link>
      </header>

      <h1>Livros cadastrados</h1>

      <ul>
        {books.map(book => (
          <li key={book.id}>
            <p><strong>Nome:</strong> {book.name}</p>
            <p><strong>Volume:</strong> {book.volume}</p>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Estoque:</strong> {book.stock_quantity}</p>
            <p><strong>Categoria:</strong> {book.category}</p>
            <p><strong>Periodo entrega:</strong> {book.delivery_period}</p>
            <p><strong>Foto:</strong> {book.photo}</p>

            <button onClick={() => handleDeleteBook(book.id)} type="reset" > Excluir </button>
          </li>
        ))}
      </ul>
    </div>
  );
}