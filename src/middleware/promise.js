
export default store => next => action => {

    if( !action.payload || !action.payload.then ){
        console.log('no promises here')
        return next(action);

    }
    console.log('found a promise');

    action.payload.then(resp=>{
        const newAction = { ...action, payload: resp };
        //dispatch all action thru all middleware
        //at the end of the middleware is the reducer
        store.dispatch(newAction);
    });

    return action.payload;
}