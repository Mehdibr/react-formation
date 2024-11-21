import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollableProducts from './ScrollableProducts';

describe('<ScrollableProducts />', () => {
  test('it should mount', () => {
    render(<ScrollableProducts />);

    const scrollableProducts = screen.getByTestId('ScrollableProducts');

    expect(scrollableProducts).toBeInTheDocument();
  });
});
