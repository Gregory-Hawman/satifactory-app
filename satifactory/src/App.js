import React from 'react';
import './App.css';
import NodesList from './components/NodesList';
import SmeltersList from './components/SmeltersList';

function App() {
  return (
    <div className="App">
      <NodesList />
      <SmeltersList />
    </div>
  );
}

export default App;
