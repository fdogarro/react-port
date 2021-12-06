import React from 'react';
import Header from './components/Header';
import About from './pages/About';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About></About>
      </main>

    </div>
  );
};

export default App;
