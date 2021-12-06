import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About></About>
        <Contact></Contact>
      </main>

    </div>
  );
};

export default App;
