import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: [],
};

import fruits from './reducers/fruits'
import cart from './reducers/cart'
import user from './reducers/user'
import orders from './reducers/order'

const rootReducer = combineReducers({
  cart,
  fruits,
  user,
  orders
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor };
