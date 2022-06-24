import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/create">Create new book</Link>
            </li>
            <li>
              <Link to="/book/1">Update a book</Link>
            </li>
            <li>
              <Link to="/books">List of books</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/books">
            <ListPage />
          </Route>
          <Route exact path="/create">
            <CreatePage />
          </Route>
          <Route exact path="/books/:id">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

