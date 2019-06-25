import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import List from './List.js';
import STORE from './store.js';

export default function App(props) {

  return (
    <main>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {STORE.lists.map(list=>(
          <List 
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id=>STORE.allCards[id])}
        />
        ))}
        
      </div>
    </main>
  );
}
