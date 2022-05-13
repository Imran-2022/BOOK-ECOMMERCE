import counterReducer from './counter';
import isloggedIn from './islogged';
import cart from './cart';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    counter: counterReducer,
    islogged: isloggedIn,
    cart:cart,
})

export default rootReducers;