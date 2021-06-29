import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const config = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [],
    devTools: composeWithDevTools(),
  });

  return store;
};

export default config;
