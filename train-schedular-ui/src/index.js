import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import './index.css'
import AddTrainComponent from "./components/AddTrainComponent";
import Home from "./components/Home";

const store = createStore(reducer);
ReactDOM.render(<Provider store={store}>
        <Home/>

    </Provider>, document.getElementById('root')
)


