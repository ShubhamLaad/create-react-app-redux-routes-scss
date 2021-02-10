
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers/rootReducer';

const middlewares: any = [];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
);
export default store;