import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom'
const fetch = require('node-fetch')

 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);  
    
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.queryByText(/this is a test/)).toBeNull();

    // screen.debug();
  });
});