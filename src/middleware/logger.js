
//es6
export default store => next => action => {
    //code goes here for middleware
    console.log('Logger Middleware', action);
    //go to the next thing
    return next(action);
}


// //same as this in ES5
//
// export default function(store){
//     return function(next){
//         return function(action){
//             //code goes here
//         }
//     }
// }