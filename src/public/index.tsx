import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './shared/styles/index.scss';
import { store } from './shared/redux/store';
import Main from './pages/Main/Main';

const rootApp = document.getElementById('app');
if (!rootApp) throw new Error('No se encontró el elemento root')

ReactDOM.createRoot(rootApp)
  .render(
    <Provider store={store}>
      <Main />
    </Provider>
  );