import { legacy_createStore as _createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer1 } from '../reducer/reducer1'
import thunk from 'redux-thunk'


const pesistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(pesistConfig, reducer1);
export const store = _createStore(persistedReducer, applyMiddleware(thunk));
// persistStore(store)
export const persistor = persistStore(store);
