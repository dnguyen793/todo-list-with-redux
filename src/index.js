import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// import promise from 'redux-promise';
import logger from './middleware/logger';
import promise from './middleware/promise';

import App from './components/app';

//{} is the state
const store = createStore( rootReducer, {}, applyMiddleware( logger, promise )); 

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
