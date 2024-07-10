
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Library</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/books">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/authors">Authors</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;
