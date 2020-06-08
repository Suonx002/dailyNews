import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './utils/scrollToTop';

import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import Footer from './components/footer';
import Category from './components/category';
import { SearchProvider } from './context/searchContext';

const App = () => {
  return (
    <div className='App'>
      <SearchProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/category/:category_id' component={Category} />
            <Route exact path='/:searchQuery' component={Homepage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </SearchProvider>
    </div>
  );
};

export default App;
