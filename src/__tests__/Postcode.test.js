import React from 'react';
import { render, screen } from '@testing-library/react';
 import ReactRouter from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import Postcode from '../Postcode';
import '@testing-library/jest-dom'
const fetch = require('node-fetch')

 
describe('Postcode component', () => {
  test('renders postcode component', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
    render(<Router><Postcode /></Router>)

    screen.getByText("POSTCODE")
    expect(screen.getByText("POSTCODE")).toBeInTheDocument();    
  });
});