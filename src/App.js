import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About></About>
        <Contact></Contact>
        <Resume></Resume>
        <Portfolio></Portfolio>
      </main>
      <Footer />
    </div>
  );
};

export default App;
