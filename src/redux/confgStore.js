import {combineReducers , createStore,applyMiddleware} from 'redux' ;
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({

}) ; 
export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(thunk))) ;