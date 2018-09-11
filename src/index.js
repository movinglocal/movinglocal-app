import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import { Store } from '~/Store';

import initStyle from '~/initStyle';

import App from '~/App';

initStyle();

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
