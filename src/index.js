import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unistore/react';

import { Store } from '~/Store';
import App from '~/App';
import GlobalStyles from '~/styles/Global';

ReactDOM.render(
  <Provider store={Store}>
    <Fragment>
      <GlobalStyles />
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('app')
);
