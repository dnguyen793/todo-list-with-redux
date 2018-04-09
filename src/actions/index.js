import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";
const API_KEY =  "?key=somethinghasntbeenusedbefore";

export function getList(){
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

    return{
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id + API_KEY}`);

    return{
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

//completed status
    //add toogle complete btn for completed
    //delete item
    //one completed, completed = true, completed get the timestamp of the completion
//delete item:
//axios.delete(`${BASE_URL}/todos/${id + API_KEY}`)

//toogle complete:
//axios.put(`${BASE_URL}/todos/${id + API_KEY}`)