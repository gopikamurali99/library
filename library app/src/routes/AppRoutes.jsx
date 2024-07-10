import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Books from '../components/Books'
import Authors from '../components/Authors'
import Book from '../components/Book'
import Author from '../components/Author'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/books/:id" element={<Book />} />
      <Route path="/authors/:id" element={<Author />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
