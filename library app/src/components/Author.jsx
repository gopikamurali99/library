import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    axios.get(`https://api.example.com/authors/${id}`)
      .then(response => {
        setAuthor(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the author!', error);
      });
  }, [id]);

  if (!author) return <div className="container mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <h1>{author.name}</h1>
      <p>{author.bio}</p>
    </div>
  );
};

export default Author;
