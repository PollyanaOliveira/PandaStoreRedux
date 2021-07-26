import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';

import pandaHeader from './images/pandaHeader.png';

function App() {
  return (
    <div>
      <header className="header">
        <img src={pandaHeader} alt="urso panda" width="65px" />
        <h1>PANDA STORE</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
