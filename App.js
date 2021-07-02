import React from 'react';
import Home from './BabyNames/Home';
import { NamesProvider } from './BabyNames/Context';

function App() {
  return (
    <div className="App">
    
       <NamesProvider>
          <Home />
      </NamesProvider>

    </div>
  );
}

export default App;
