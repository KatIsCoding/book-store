import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import reportWebVitals from './reportWebVitals';

const testData = [
  {
    id: 1,
    title: 'The Lord of the Rings',
  },
  {
    id: 2,
    title: 'The Hobbit',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
      <Switch>
        <Route exact path="/">
          <Books books={testData} />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
