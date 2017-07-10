import React, { Component } from 'react';
import './App.css';
import Location from './location';
// import ajax from './utils/ajax';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import tflData from './redux/reducers';


const store = createStore(tflData, applyMiddleware(thunk,logger));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <Location/>
          </div>
        </Provider>
    );
  }
}

export default App;
