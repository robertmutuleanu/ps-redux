import { createStore, applyMiddleware, compose, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import rootReducer, { AppState } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const configureStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};

export type PersistedState = {
  account: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, null, Action<string>>;
