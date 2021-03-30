import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

const fetch = require('node-fetch')

 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);    
  });
});