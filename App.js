import React from 'react';
import './App.css';
import Form from './Form';
import Login from './Login';
import Header from './MemeGen/Header';
import MemeGenerator from './MemeGen/MemeGenerator';
import './MemeGen/Meme.css';
import Home from './BabyNames/Home';
import { NamesProvider } from './BabyNames/Context';

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
        {/* <Login /> */}
 
        {/* <Header />
        <MemeGenerator /> */}

       <NamesProvider>
          <Home />
      </NamesProvider>

    </div>
  );
}

export default App;
