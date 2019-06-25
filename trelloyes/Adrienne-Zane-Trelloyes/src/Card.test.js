import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';




describe('<Card/>',()=>{
    it('renders without crashing',()=>{
        const div= document.createElement('div');

        ReactDOM.render(<Card title="Card 1" content="Stuffs and Things"/>,div);


        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders this UI as Expected',()=>{
        const tree=renderer.create(<Card title="Card 1" content="Stuffs And Things"/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


