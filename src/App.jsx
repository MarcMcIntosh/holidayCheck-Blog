import React from 'react';
// import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import store from './store';
import formatUrl from './formatUrl';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path={formatUrl('/')} component={Home} />
        <Route path={formatUrl('blog/:id')} component={Blog} />
      </div>
    </Router>
  </Provider>
);

export default App;
