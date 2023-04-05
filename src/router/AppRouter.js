import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList';
import useLocalStorage from '../hooks/useLocalStorage';
const AppRouter = () => {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;