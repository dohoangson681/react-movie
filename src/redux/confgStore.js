import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { slideReducer } from './reducer/movieReducer/SliderReducer';
import { quanLyPhimReducer } from './reducer/movieReducer/QuanLyPhimReducer';
import { quanLyRapReducer } from './reducer/rapReducer/quanLyRapReducer';
import { quanLyDatVeReducer } from './reducer/datVeReducer/QuanLyDatVeReducer';
import { quanLyNguoiDungReducer } from './reducer/qLNDReducer/qLNDReducer';


const RootReducer = combineReducers({
    slideReducer,
    quanLyPhimReducer,
    quanLyRapReducer,
    quanLyDatVeReducer,
    quanLyNguoiDungReducer,
   
});
export const store = createStore(RootReducer,composeWithDevTools( applyMiddleware(thunk)));