import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Shop from './components/shop';
import ShoppingCart from './components/shopping-cart';

const Routes = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URl}>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/shopping-cart' component={ShoppingCart} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
