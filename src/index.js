import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>

    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);


