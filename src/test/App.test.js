import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store';
import { StyleSheetTestUtils } from 'aphrodite';
import App from '../containers/App';

const initialState = { output: 100 };
const mockStore = configureStore();
let store;
let container;

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
  store = mockStore(initialState);
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  store = mockStore(initialState);
  const div = document.createElement('div');
  ReactDOM.unmountComponentAtNode(div);
});
