import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer'
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
<Provider store={store}>
  <App />
  </Provider>, 
  document.getElementById('root'));