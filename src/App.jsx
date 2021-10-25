import React from 'react';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SignUp from './pages/Pricing';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/pricing' exact component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
