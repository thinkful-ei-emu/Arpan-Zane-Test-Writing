import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store';

const list ={
    id: '1',
    header: 'First list',
    cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
  };

describe('<List/>',()=>{
    it('renders without crashing',()=>{
        const div= document.createElement('div');

        ReactDOM.render((<List key= {list.id} title={list.header} cards={list.cardIds.map(id => STORE.allCards[id])} />), div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as Expected',()=>{
        const tree = renderer.create((<List key= {list.id} title={list.header} cards={list.cardIds.map(id => STORE.allCards[id])} />)).toJSON();
        expect(tree).toMatchSnapshot();
    });
});