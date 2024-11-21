import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Recheche from './Recheche';

describe('<Recheche />', () => {
  test('it should mount', () => {
    render(<Recheche />);

    const recheche = screen.getByTestId('Recheche');

    expect(recheche).toBeInTheDocument();
  });
});
