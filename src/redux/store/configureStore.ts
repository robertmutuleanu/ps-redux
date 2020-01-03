import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(rootReducer, loadState(), composeEnhancers(applyMiddleware(thunk)));

  store.subscribe(
    throttle(() => {
      const state = store.getState();
      saveState({
        courses: state.courses
      });
    }, 500)
  );

  return store;
};

export default configureStore;
