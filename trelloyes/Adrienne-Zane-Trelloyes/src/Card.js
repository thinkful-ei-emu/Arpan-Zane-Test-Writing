import React from 'react';

export default function Card(props) {
  console.log(props.title);
  return (
    <div className="Card">
      <button type="button">Delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}