import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import "@babel/polyfill";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const initialStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


//?
// export const action = type => initialStore.dispatch({type})

export default initialStore;