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
        <Provider store={store}>
          <div className="l-main-content">
            <Location/>
            <CycleSearch/>
          </div>
        </Provider>
    );
  }
}

export default App;
