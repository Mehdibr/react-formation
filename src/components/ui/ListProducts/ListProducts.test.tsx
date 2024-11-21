import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ListProducts from './ListProducts';

describe('<ListProducts />', () => {
  test('it should mount', () => {
    render(<ListProducts />);

    const listProducts = screen.getByTestId('ListProducts');

    expect(listProducts).toBeInTheDocument();
  });
});
