import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
        </Switch>
      </main>
      <Footer />
      </React.Fragment>
    </Router>
    
  );
};

export default App;
