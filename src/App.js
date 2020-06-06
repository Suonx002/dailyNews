import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar';
import Homepage from './pages/homepage';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
