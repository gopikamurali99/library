import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Books</h1>
      <ul className="list-group">
        {books.map(book => (
          <li key={book.id} className="list-group-item">
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
