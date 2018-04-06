//hold all reducers and export root reducer
import { combineReducers } from 'redux';
import listReducer from './list_reducer';

export default combineReducers({
    list: listReducer
});