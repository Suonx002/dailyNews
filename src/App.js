import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import Category from './components/category';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/category/:category_id' component={Category} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
