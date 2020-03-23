import React from 'react';
import ListItems from './components/ListItems';
import './App.css';

function App() {
  return (
    <ul>
      <ListItems abc={123} def={'hello'}/>
    </ul>
  );
}

export default App;
