
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function NewBook() {

  const history = useHistory();

  const [name, setName] = useState();
  const [volume, setVolume] = useState();
  const [author, setAuthor] = useState();
  const [stock_quantity, setStockQuantity] = useState();
  const [category, setCategory] = useState();
  const [delivery_period, setDeliveryPeriod] = useState();
  const [photo, setPhoto] = useState();

  async function handleNewBook(e) {
    e.preventDefault();

    const data = {
      name,
      volume,
      author,
      stock_quantity,
      category,
      delivery_period,
      photo
    };

    try {

      console.log(data);

      await api.post('books', data ).then(response => {
        console.log(response);
      });

      history.push('/books');
    } catch (err) {
      alert('Erro ao cadastrar novo livro, tente novamente.');      
    }
  }

  return (

    <div className="new-book-container">
    <div className="content">
      <section>

        <h1>Cadastro novo livro</h1>

        <Link className="back-link" to="/books">
          Voltar para lista
        </Link>
      </section>

      <form onSubmit={handleNewBook} >
        <input placeholder="Nome do livro" value={name} onChange={e =>setName(e.target.value)} />
        <input placeholder="Volume" value={volume} onChange={e =>setVolume(e.target.value)} />
        <input placeholder="Autor" value={author} onChange={e =>setAuthor(e.target.value)} />
        <input placeholder="Quantidade de estoque" value={stock_quantity} onChange={e =>setStockQuantity(e.target.value)} />
        <input placeholder="Categoria" value={category} onChange={e =>setCategory(e.target.value)} />
        <input placeholder="Periodo de entrega" value={delivery_period} onChange={e =>setDeliveryPeriod(e.target.value)} />
        <input placeholder="Foto" value={photo} onChange={e =>setPhoto(e.target.value)} />
        <button className="button" type="submit" >Cadastrar</button>
      </form>
    </div>
  </div>

  );
}