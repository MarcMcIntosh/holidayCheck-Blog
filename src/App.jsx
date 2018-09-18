import React from 'react';
// import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Posts from './containers/Posts';
import store from './store';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>Hello</h1>
      <Posts />
    </div>
  </Provider>
);

export default App;
