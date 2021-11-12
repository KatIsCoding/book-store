import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Books from './components/books';
import Categories from './components/categories';
import reportWebVitals from './reportWebVitals';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>

    <meta name="image" property="og:image" content="https://github.com/microverseinc/curriculum-react-redux/raw/main/bookstore/images/bookstore.png" />
    <meta name="author" content="Fabrizio Gomez" />
    <Provider store={store}>

      <Router>
        <Navbar bg="light" expand="lg">

          <Navbar.Brand className="NavTitle">BookStore CMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Link as={Link} to="/">Books</Nav.Link>
              <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            </Nav>
            <Nav.Link as={Link} to="/" className="justify-content-end">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
          </Navbar.Collapse>

        </Navbar>

        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route exact path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
