import React from 'react';
import { render } from 'react-dom';
import App from './App';

/* const render = Component => hydrate(<Component />, document.getElementById('root'));

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App.jsx', () => {
    const updatedApp = require('./App').default; // eslint-disable-line
    render(updatedApp);
  });
}

render(App); */
const elem = document.getElementById('root');
render(<App />, elem);
