import './App.css';
import Joke from './components/Joke';
import React from 'react';

function App() {
  return (
    <div className="App bg-indigo-600 text-center">
      <header className="App-header">

        <Joke />

      </header>
    </div>
  );
}

export default App;