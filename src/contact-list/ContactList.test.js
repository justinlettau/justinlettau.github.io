import React from 'react';
import ReactDOM from 'react-dom';

import ContactList from './ContactList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ContactList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
