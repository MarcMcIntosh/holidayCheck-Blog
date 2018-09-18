import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer, { initialState } from './reducer';

// fake state for now

const isClient = typeof window !== 'undefined';
const ENV = process.env.NODE_ENV || 'development';
const isProduction = ENV === 'production';

const enhancers = (isClient && !isProduction) ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) : applyMiddleware(thunk);

const store = createStore(reducer, initialState, enhancers);

export default store;
