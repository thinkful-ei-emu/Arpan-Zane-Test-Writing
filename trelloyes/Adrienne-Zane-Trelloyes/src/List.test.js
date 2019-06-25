import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import Card from './Card';
import App from './App';

describe('<List/>',()=>{
    it('renders without crashing',()=>{
        const div= document.createElement('div');

        ReactDOM.render(<List /> ,div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders this UI as Expected',()=>{
        const tree=renderer.create(<List/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});