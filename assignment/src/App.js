import React from 'react';
import './App.css';
import Table from './components/Table';
import people from './people.json';

function App() {
  return (
    <div className="App">
      < Table data={people}/>
    </div>
  );
}

export default App;
