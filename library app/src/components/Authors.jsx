import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/authors')
      .then(response => {
        setAuthors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the authors!', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Authors</h1>
      <ul className="list-group">
        {authors.map(author => (
          <li key={author.id} className="list-group-item">
            <Link to={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Authors;
