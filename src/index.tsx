import React from 'react';
import { render } from 'react-dom';
import App from './Components/App/App';

export const rootElement: HTMLElement | null = document
  .querySelector('#root');

render(
  <App />,
  rootElement,
);
