import {legacy_createStore as createStores,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailReducer, productsReducer } from './reducers/productReducers';
import {userReducer} from './reducers/userReducers'

const reducers =combineReducers({
    products:productsReducer,
    productDetail:productDetailReducer,  
    userReducers:userReducer
});
const initialstate={};
const middleware=[thunk]
const store=createStores(
    reducers,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store



