import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/books/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the book!', error);
      });
  }, [id]);

  if (!book) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
    </div>
  );
};

export default Book;
