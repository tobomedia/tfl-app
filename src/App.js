import React, { Component } from 'react';
import './App.css';
import Location from './location';
import CycleSearch from './cycleSearch';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import tflData from './redux/reducers';


const store = createStore(tflData, applyMiddleware(logger));

class App extends Component {
  render() {
    return (
    <Provider store = {store} >
        <div className="l-content">
            <div className="l-content__block">
                    <Location/>
            </div>
            <div className="l-content__block">
                <CycleSearch/>
            </div>
        </div>
    </Provider>
    );
  }
}

export default App;
