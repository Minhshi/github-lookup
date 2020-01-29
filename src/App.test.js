import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '';
    container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<App />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('should show the App', () => {
    const appTitle = document.querySelector('.app-title');
    expect(appTitle).not.toBe(null);
  });
});
