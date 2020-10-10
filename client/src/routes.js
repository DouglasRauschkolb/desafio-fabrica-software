import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Books from './pages/Books';
import NewBook from './pages/NewBook';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/books/new" component={NewBook} />
      </Switch>
    </BrowserRouter> 
  );
}