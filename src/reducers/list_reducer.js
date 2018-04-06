import types from '../actions/types';

const DEFAULT_STATE = { 
    items: []
 };

 export default function( state = DEFAULT_STATE, actions ){
     switch( actions.type ){
        default:
            return state;
     }
 }
