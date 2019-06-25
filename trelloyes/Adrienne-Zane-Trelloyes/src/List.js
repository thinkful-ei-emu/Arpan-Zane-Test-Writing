import React from 'react';
import Card from './Card.js';
import STORE from './store.js';

export default function List(props) {
   const individualCards = props.cards.map((card) => (
    <Card key={card.id} title={card.title} content={card.content} />
  ));
  console.log(individualCards);
  console.log(props.cards);
  return (
  <section className="List">
    <header className="List-header">{props.header}
    </header>
    <div className="List-cards">
      {individualCards}
    </div>
  </section>
  );
}